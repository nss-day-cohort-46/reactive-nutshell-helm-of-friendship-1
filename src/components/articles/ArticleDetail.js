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
    getLocationById(locationId)
    .then((response) => {
      setArticle(response)
    })
    }, [])
  return (
    <section className="location">
      <h3 className="location__name">{location.name}</h3>
      <div className="location__address">Address: {location.address}</div>
      <button onClick={() => {history.push(`/locations/edit/${location.id}`)}}>Edit</button>
    </section>
  )
}