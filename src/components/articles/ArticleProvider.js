import React, {useState, createContext} from "react"

export const ArticleContext = createContext()

export const ArticleProvider = (props) => {
  const [articles, setArticles] = useState([])
  
  const getArticles = () =>{
    return fetch("http://localhost:8088/articles")
    .then(res => res.json())
    .then(setArticles)
  }

  return(
    <ArticleContext.Provider value={{
      articles, setArticles, getArticles
  }}>
      {props.children}
  </ArticleContext.Provider>
  )
}