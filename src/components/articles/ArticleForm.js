import React, { useContext, useState, useEffect } from "react"
import { ArticleContext, } from "./ArticleProvider"
import "./Article.css"
import { useHistory, useParams } from 'react-router-dom';

export const ArticleForm = () => {
    const {addArticle, updateArticle, getArticleById } = useContext(ArticleContext)

    const [article, setArticle] = useState({
      title: "",
      synopsis: "",
      url: ""
    });
    
    const[isLoading, setIsLoading] = useState(true)
    
    const { articleId } = useParams();
    const history = useHistory();

    const handleControlledInputChange = (event) => {
      const newArticle = { ...article }
      newArticle[event.target.id] = event.target.value
      setLocation(newArticle)
    }

    const handleSaveLocation = () => {

      if (article.title === "" || article.synopsis === "" || article.url === "") {
          window.alert("Please enter an article")
        } else {
          setIsLoading(true);

      if (articleId){
          
          updateArticle({
              title: article.title,
              synopsis: article.synopsis,
              url: article.url,
          })
          .then(() => history.push(`/locations/detail/${location.id}`))
        }else {
          
          addArticle({
            title: article.title,
            synopsis: article.synopsis,
            url: article.url,
          })
          .then(() => history.push("/"))
        }
      }
    }
    useEffect(() => {
      if (locationId) {
        getLocationById(locationId)
        .then(location => {
            setLocation(location)
            setIsLoading(false)
        })
      } else {
        setIsLoading(false)
    }
}, [])


    return (
      <form className="locationForm">
          <h2 className="locationForm__title">{locationId ? "Edit Location" : "Add New Location"}</h2>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="name">Location name:</label>
                  <input type="text" id="name" required autoFocus className="form-control" placeholder="Location name"
                  onChange={handleControlledInputChange}
                  value={location.name}/>
              </div>
          </fieldset>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="address">Location address:</label>
                  <input type="text" id="address" required className="form-control" placeholder="Location address"
                  onChange={handleControlledInputChange}
                  value={location.address}/>
              </div>
          </fieldset>

          <button className="btn btn-primary"
              disabled={isLoading}
              onClick={event => {
                  event.preventDefault()
                  handleSaveLocation()
              }}>
              {locationId ? "Save Location" : "Add New Location"}</button>
      </form>
  )
}
  