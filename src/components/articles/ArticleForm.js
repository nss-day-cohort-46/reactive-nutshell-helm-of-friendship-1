import React, { useContext, useState, useEffect } from "react"
import { ArticleContext, } from "./ArticleProvider"
import "./Article.css"
import { useHistory, useParams } from 'react-router-dom';

export const ArticleForm = () => {
    const {addArticle, updateArticle, getArticleById } = useContext(ArticleContext)

    const [article, setArticle] = useState({
      title: "",
      synopsis: "",
      url: "",
      userId: 0

    });
    
    const[isLoading, setIsLoading] = useState(true)
    const currentUserId = parseInt(sessionStorage.getItem("nutshell_user"))
    const { articleId } = useParams();
    const history = useHistory();

    const handleControlledInputChange = (event) => {
      const newArticle = { ...article }
      newArticle[event.target.id] = event.target.value
      setArticle(newArticle)
    }

    const handleSaveArticle = () => {

      if (article.title === "" || article.synopsis === "" || article.url === "") {
          window.alert("Please enter an article")
        } else {
          setIsLoading(true);

      if (articleId){
          
          updateArticle({
              id: article.id,
              title: article.title,
              synopsis: article.synopsis,
              url: article.url,
              userId: currentUserId
          })
          .then(() => history.push(`/detail/${article.id}`))
        }else {
          
          addArticle({
            title: article.title,
            synopsis: article.synopsis,
            url: article.url,
            userId: currentUserId
          })
          .then(() => history.push("/"))
        }
      }
    }
    useEffect(() => {
      if (articleId) {
        getArticleById(articleId)
        .then(article => {
            setArticle(article)
            setIsLoading(false)
        })
      } else {
        setIsLoading(false)
    }
}, [])


    return (
      <form className="articleForm">
          <h2 className="articleForm__head">{articleId ? "Edit Article" : "Add New Article"}</h2>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="title">Title:</label>
                  <input type="text" id="title" required autoFocus className="form-control" placeholder="Title"
                  onChange={handleControlledInputChange}
                  value={article.title}/>
              </div>
          </fieldset>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="synopsis">Article Summary:</label>
                  <input type="text" id="synopsis" required className="form-control" placeholder="Summary"
                  onChange={handleControlledInputChange}
                  value={article.synopsis}/>
              </div>
          </fieldset>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="url">Link:</label>
                  <input type="text" id="url" required className="form-control" placeholder="URL"
                  onChange={handleControlledInputChange}
                  value={article.url}/>
              </div>
          </fieldset>

          <button className="btn btn-primary"
              disabled={isLoading}
              onClick={event => {
                  event.preventDefault()
                  handleSaveArticle()
              }}>
              {articleId ? "Save Article" : "Add New Article"}</button>
      </form>
  )
}
  