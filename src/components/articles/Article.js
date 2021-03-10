import React from "react"
import "./Article.css"


export const Article = ({articleObj}) => {
  return (
    <div className="articleCard" id={articleObj.id}>
        <h3 className="articleCard__title">{articleObj.title}</h3>
        <div className="articleCard__synopsis">{articleObj.sysopsis}</div>
        <div className="articleCard__url">{articleObj.url}</div>
    </div>
    )
}