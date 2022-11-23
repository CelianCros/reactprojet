import React from 'react';

export default function Article({ article }) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',hour: 'numeric', minute: 'numeric', second: 'numeric' };
    return (
        <div key={article.idMeal} className={"article"}>
            <div className={"article_header"}>
                <h2>{article.author}</h2>
                <p>Posté le {new Date(article.date).toLocaleDateString("fr-FR", options)}</p>
            </div>
            <p>{article.content}</p>
            <div className={"button"}>
                <button>Modifier</button>
                <button>Supprimer</button>
            </div>
        </div>
    );
};
