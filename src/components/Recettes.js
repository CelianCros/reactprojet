import "../styles.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Recette from "./Recette";

export default function Recettes() {
  const [recettes, setRecettes] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php", {
        params: {
          s: search
        }
      })
      .then((response) => {
        setRecettes(response.data["meals"]);
      });
  }, [search]);

  const searchChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div>
      <h1>Appli recette de cuisine</h1>
      <div className={"input"}>
        <input
          type={"text"}
          placeholder={"Tappez le nom d'un aliment (anglais)"}
          value={search}
          onChange={searchChange}
        />
      </div>
      <div className={"listeRecette"}>
        {recettes.map((recette) => (
          <Recette key={recette.idMeal} recette={recette} />
        ))}
      </div>
    </div>
  );
}