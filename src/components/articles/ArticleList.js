import React, {useContext, useEffect} from "react"
import {useHistory} from "react-router-dom"
import {ArticleContext} from "./ArticleProvider"
import {Article} from "./Article"
import "./Article.css"

export const ArticleList = () =>{
  
const history = useHistory()
const currentUserId = parseInt(sessionStorage.getItem("nutshell_user"))
const {articles, getArticles, setArticles} = useContext(ArticleContext)

useEffect(() => {
  getArticles()
}, [])

useEffect(() =>{
  const sortByDate = articles.sort((a, b) => new Date(a.date) - new Date(b.date))
  setArticles(sortByDate)
}, [articles])

return (
  <>
  <h3 className="homeHeader">News</h3>
  <button onClick={() =>{ history.push("/articles/create")}}>
      Add Article
    </button>
  <div className="articleList">
  {articles.map(article =>{
      if(article.userId === currentUserId)
      return <Article key={article.id} articleObj = {article}/>
    })}
  </div>
  </>
)
}