import React, {useContext, useEffect} from "react"
import {ArticleContext} from "./ArticleProvider"
import {Article} from "./Article"
import "./Article.css"

export const ArticleList = () =>{


const {articles, getArticles} = useContext(ArticleContext)

useEffect(() => {
  getArticles()
}, [])

return (
  <>
  <h3 className="homeHeader">News</h3>
  <div className="articleList">
  {articles.map(article =>{
      return <Article key={article.id} articleObj = {article}/>
    })}
  </div>
  </>
)
}