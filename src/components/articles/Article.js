import React, { useContext, useEffect, useState } from "react"
import "./Article.css"
import { Link } from "react-router-dom"
import { FriendContext } from "../friends/FriendProvider"



export const Article = ({ articleObj }) => {
    const { friends, getFriends } = useContext(FriendContext)
    const [arrayOfFriends, setArrayOfFriends] = useState([])
    useEffect(() => {
        getFriends()
    }, [])
    
    useEffect(() => {
        const sessionUserId = parseInt(sessionStorage.getItem("nutshell_user"))
        let arrayOfFriendIds = friends.filter(friend => {
        return(sessionUserId === friend.currentUserId)
        }).map(friend => friend.userId)
        setArrayOfFriends(arrayOfFriendIds)
        
    }, [friends])

    return (
        <>
        {(arrayOfFriends.includes(articleObj.id))&&
        <div className="articleCard" id={articleObj.id}>
            <h4 className="articleCard__title"><Link to={`/detail/${articleObj.id}`}>
                {articleObj.title}
            </Link></h4>
            <div className="articleCard__synopsis">{articleObj.sysopsis}</div>

        </div>}
        </>
    )
}