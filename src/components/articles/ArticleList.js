import React, {useContext, useEffect} from "react"
import {useHistory} from "react-router-dom"
import {ArticleContext} from "./ArticleProvider"
import {FriendContext} from "../friends/FriendProvider"
import {UserContext} from "../users/UserProvider"
import {Article} from "./Article"
import "./Article.css"

export const ArticleList = () =>{
// const { friends, getFriends } = useContext(FriendContext)
const { users, getUsers, searchTerms } = useContext(UserContext) 
const history = useHistory()
const sessionUserId = parseInt(sessionStorage.getItem("nutshell_user"))
const {articles, getArticles, setArticles} = useContext(ArticleContext)

useEffect(() => {
  getArticles()
}, [])




// useEffect(() => {
// getFriends()
// }, [])

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
      if(article.userId === sessionUserId )
      return <Article key={article.id} articleObj = {article}/>
    })}
  </div>
  </>
)
}