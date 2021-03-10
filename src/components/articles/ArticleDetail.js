import React, { useContext, useEffect, useState } from "react"
import { ArticleContext } from "./ArticleProvider"
import "./Article.css"
import { useParams, useHistory } from "react-router-dom"

export const ArticleDetail = () => {

  const { getArticleById } = useContext(ArticleContext) 


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
  return (
    <section className="location">
      <h3 className="location__name">{article.title}</h3>
      <div className="location__address">Summary: {article.synopsis}</div>
      <button onClick={() => {history.push(`/edit/${article.id}`)}}>Edit</button>
    </section>
  )
}