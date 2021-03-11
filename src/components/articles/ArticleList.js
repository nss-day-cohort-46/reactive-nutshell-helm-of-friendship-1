import React, {useContext, useEffect} from "react"
import {useHistory} from "react-router-dom"
import {ArticleContext} from "./ArticleProvider"
import {FriendContext} from "../friends/FriendProvider"
import {Article} from "./Article"
import "./Article.css"

export const ArticleList = (props) =>{

const history = useHistory()

const {articles, getArticles, setArticles} = useContext(ArticleContext)






useEffect(() => {
  getArticles()
}, [])


return (
  <>
  <h3 className="homeHeader">News</h3>
  <button onClick={() =>{ history.push("/articles/create")}}>
      Add Article
    </button>
  <div className="articleList__user">
  
  
    {articles.map(article =><Article key={article.id} articleObj={article}/>)}
    
  </div>
  </>
)
}