import React, { useContext, useEffect, useState } from "react"
import "./Article.css"
import { Link } from "react-router-dom"
import { FriendContext } from "../friends/FriendProvider"



export const Article = ({ articleObj }) => {


    return (
        <>
        <div className="articleCard" id={articleObj.id}>
            <h4 className="articleCard__title"><Link to={`/detail/${articleObj.id}`}>
                {articleObj.title}
            </Link></h4>
            <div className="articleCard__synopsis">{articleObj.sysopsis}</div>

        </div>
        </>
    )
}