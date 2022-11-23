import axios from "axios";
import { useEffect, useState } from "react";
import Article from "./Article"

export default function Blog() {
    const [articles, setArticles] = useState([]);
    const [auteur, setAuteur] = useState('');
    const [message, setMessage] = useState('');
    const [bEnvoyer,setEnvoyer] = useState(true);
    useEffect(() => {
        axios.get("http://localhost:3003/articles")
          .then((response) => {
            setArticles(response.data)
          });
      }, []);
    
    const CreationMessage = (event) => {
        axios.post('http://localhost:3003/articles', {
            author: auteur,
            date: new Date(),
            content: message
          })
          .then(function (response) {
            console.log(response);
          })
    };

    const auteurChange = (event) => {
        setAuteur(event.target.value);
        envoyerChange()
      };

    const messageChange = (event) => {
        setMessage(event.target.value);
        envoyerChange()
      };

    const envoyerChange = () =>{
        if(message.length >=100 & auteur !== ''){
            setEnvoyer(false)
        }else{
            setEnvoyer(true)
        }
    }

    return (
        <div>
            <h1>Blog</h1>
            <div className={"form"}>
                <div className={"articleForm"}>
                    <input className={"articleInput"}
                    type={"text"}
                    placeholder={"Nom"}
                    value={auteur}
                    onChange={auteurChange}
                    />
                    <textarea className={"articleText"}
                    type={"text"}
                    placeholder={"Message"}
                    value={message}
                    onChange={messageChange}
                    ></textarea>
                    <button className={"articleButton"} onClick={CreationMessage} disabled={bEnvoyer}>Envoyer</button>
                </div>
            </div>
            <div className={"listeArticle"}>
                {articles.map((article) => (
                <Article article={article} />
                ))}
            </div>
        </div>);
};
  