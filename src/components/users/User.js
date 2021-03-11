import React, { useContext, useState } from "react"
import { useHistory } from "react-router-dom"
import { FriendContext } from "../friends/FriendProvider"



export const UserCard = ({user}) => {
  const {addFriend} = useContext(FriendContext)
  const currentUser = parseInt(sessionStorage.getItem("nutshell_user"))

  const history = useHistory()
  const handleAddFriend = () => {
        
        addFriend({
            userId: user.id,
            currentUserId: currentUser
        })
        .then(() => history.push("/friends"))
      }
      if (user.id !== currentUser) {

        return (
          <section className="user">
        <h3 className="user__name">
          {user.name}
        </h3>
        {<button className="btn btn-primary"
          onClick={event => {
            event.preventDefault()
            handleAddFriend()
          }}>Add Friend</button>}
    </section>
)} else {
  return ("")
}
}