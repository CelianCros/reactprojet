import axios from 'axios';
import React, { useState } from 'react';
import ReactTooltip from 'react-tooltip';

export default function Article({ article, update }) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const [bEdit, setEdit] = useState(false);





    const suppression = () =>{
        axios.delete('http://localhost:3003/articles/'+ article.id)
          .then(()=>{
              update()
          })
    }



    const changeEdit = () => {
        setEdit(!bEdit)
    }





    function ArticleCard(){
        return (
            <div className={"article"}>
                <div className={"article_header"}>
                <h2>{article.author}</h2>
                <p>Posté le {new Date(article.date).toLocaleDateString("fr-FR", options)}</p>
                </div>
                <p>{article.content}</p>
                <div className={"button"}>
                    <button onClick={changeEdit}>Modifier</button>
                    <button onClick={suppression}>Supprimer</button>
                </div>
            </div>
        )
    }



    function ArticleEdit(){

        const [message, setMessage] = useState(article.content);
        const [auteur, setAuteur] = useState(article.author);

        const auteurChange = (event) => {
            setAuteur(event.target.value)
          };

        const messageChange = (event) => {
            setMessage(event.target.value)
          };

        const modification = () =>{
            axios.put('http://localhost:3003/articles/'+ article.id,{
                author: auteur,
                date: new Date(),
                content: message
            })
            .then(()=>{
                changeEdit()
                update()
            })
        }
        return (
            <div className={"article"}>
                <div className={"form"}>
                    <div className={"articleFormEdit"}>
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
                        rows={6}
                        required
                        ></textarea>
                        <div className={"button"}>
                            <button onClick={modification} disabled={!(message.length >=100 && !!auteur)} data-tip={!(message.length >=100 && !!auteur) ? "Veuillez mettre un titre et un message d'au moins 100 caractères": "" } >Confirmer</button>
                            <button onClick={changeEdit}>Annuler</button>
                        </div>
                        <ReactTooltip />
                    </div>
                </div>
            </div>
        )
    }

    function Greeting() {
        return bEdit ? <ArticleEdit /> : <ArticleCard />;
    }

    return (<Greeting />);

};
