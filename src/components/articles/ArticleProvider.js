import React, {useState, createContext} from "react"

export const ArticleContext = createContext()

export const ArticleProvider = (props) => {
  const [articles, setArticles] = useState([])
  
  const getArticles = () =>{
    return fetch("http://localhost:8088/articles?_sort=timestamp")
    .then(res => res.json())
    .then(setArticles)
  }

  const addArticle = articleObj => {
    return fetch("http://localhost:8088/articles", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(articleObj)
    })
    .then(getArticles)
}

const getArticleById = (id) => {
  return fetch(`http://localhost:8088/articles/${id}`)
      .then(res => res.json())
}

const updateArticle = article => {
  return fetch(`http://localhost:8088/articles/${article.id}`, {
  method: "PUT",
  headers: {
      "Content-Type": "application/json"
  },
  body: JSON.stringify(article)
  })
  .then(getArticles)
}

const deleteArticle = articleId => {
  return fetch(`http://localhost:8088/articles/${articleId}`, {
      method: "DELETE"
  })
      .then(getArticles)
}

  return(
    <ArticleContext.Provider value={{
      articles, setArticles, getArticles, addArticle, getArticleById, updateArticle, deleteArticle
  }}>
      {props.children}
  </ArticleContext.Provider>
  )
}