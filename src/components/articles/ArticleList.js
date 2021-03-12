import React, {useContext, useEffect, useState} from "react"
import {useHistory} from "react-router-dom"
import {ArticleContext} from "./ArticleProvider"
import {FriendContext} from "../friends/FriendProvider"
import {Article} from "./Article"
import "./Article.css"

export const ArticleList = () =>{

const history = useHistory()

const {articles, getArticles} = useContext(ArticleContext)
const {getUsersFriends, friends} = useContext(FriendContext)
const [userArticles, setUserArticles] = useState([])
const currentUserId = +sessionStorage.getItem("nutshell_user")

useEffect(() =>{
  getUsersFriends(currentUserId)
  .then(getArticles)
}, [])

useEffect (() =>{
  
  const matchingCurrentUserArticles = articles.filter(article => (currentUserId === article.userId))
  
  const matchingFriendArticles = articles.filter(article =>{
    return friends.map(friend => friend.userId === article.userId)
  })
  let filteredMatchingFriendArticles = []
  matchingFriendArticles.forEach(obj =>{
    if(obj.userId !== currentUserId){
      filteredMatchingFriendArticles.push(obj)
    }
  })

  const allArticleMatches = matchingCurrentUserArticles.concat(filteredMatchingFriendArticles)
  setUserArticles(allArticleMatches)
}, [articles, friends])







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