import axios from "axios";
import { useEffect, useState } from "react";
import Article from "./Article"
import ReactTooltip from 'react-tooltip';

export default function Blog() {
    const [articles, setArticles] = useState([]);
    const [auteur, setAuteur] = useState('');
    const [message, setMessage] = useState('');
    useEffect(() => {
      loadData()
    }, []);

    const loadData = () =>{
      axios.get("http://localhost:3003/articles")
      .then((response) => {
        setArticles(response.data)
      });
    } 
  

    const CreationMessage = (event) => {
        axios.post('http://localhost:3003/articles', {
            author: auteur,
            date: new Date(),
            content: message
          })
          .then(function (response) {
            console.log(response);
            loadData();
            setAuteur('')
            setMessage('')
          })
    };

    const auteurChange = (event) => {
        setAuteur(event.target.value)
      };

    const messageChange = (event) => {
        setMessage(event.target.value)
      };

    return (
        <div>
            <h1>Blog</h1>
            <div className={"form"}>
                <div className={"articleForm"}>
                    <input className={"articleInput"}
                    type={"text"}
                    id={"auteur"}
                    placeholder={"Nom*"}
                    value={auteur}
                    onChange={auteurChange}
                    required
                    />
                    <textarea className={"articleText"}
                    type={"text"}
                    id={"message"}
                    placeholder={"Message*"}
                    value={message}
                    onChange={messageChange}
                    required
                    ></textarea>
                    <button className={"articleButton"} onClick={CreationMessage} disabled={!(message.length >=100 && !!auteur)} data-tip={!(message.length >=100 && !!auteur) ? "Veuillez mettre un titre et un message d'au moins 100 caractères": "" }>Envoyer</button>
                </div>
            </div>
            <div className={"listeArticle"}>
                {articles.map((article) => (
                <Article key={article.id} article={article} update={loadData} />
                ))}
            </div>
            <ReactTooltip />
        </div>);
};
  