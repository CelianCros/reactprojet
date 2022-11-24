import "../styles.css";

export default function Recette({ recette }) {
  return (
    <div className={"recette"}>
      <h2>{recette.strMeal}</h2>
      <p>origine : {recette.strArea}</p>
      <img src={recette.strMealThumb} alt={"IMG"} />
      <p className={"description"}>{recette.strInstructions}</p>
    </div>
  );
}