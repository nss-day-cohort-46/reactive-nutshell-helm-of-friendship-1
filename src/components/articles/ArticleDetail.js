import React, { useContext, useEffect, useState } from "react"
import { ArticleContext } from "./ArticleProvider"
import "./Article.css"
import { useParams, useHistory, Link } from "react-router-dom"

export const ArticleDetail = () => {

  const { getArticleById, deleteArticle } = useContext(ArticleContext) 
  const currentUserId = parseInt(sessionStorage.getItem("nutshell_user"))

	const [article, setArticle] = useState({})

	const {articleId} = useParams();
	const history = useHistory();

  useEffect(() => {
    console.log("useEffect", articleId)
    getArticleById(articleId)
    .then((response) => {
      setArticle(response)
    })
    }, [])
  
  
    const handleDelete = () => {
      if(article.userId === currentUserId){
      deleteArticle(articleId)
        .then(() => {
          history.push("/")
        })}
    }
  
    return (
    <section className="article">
      <h3 className="article__title">{article.title}</h3>
      <div className="article__summary">Summary: {article.synopsis}</div>
      <div className="article__url"><a href={article.url} target="_blank">Go to Article</a></div>
      <button onClick={() => {history.push(`/articles/edit/${article.id}`)}}>Edit</button>
      {article.userid === currentUserId? <button onClick={handleDelete}>Delete</button>:""}
    
    </section>
  )
}
//! only render delete button if its the users article
