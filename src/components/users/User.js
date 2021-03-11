import React, { useContext, useState } from "react"
import { useHistory } from "react-router-dom"
import { FriendContext } from "../friends/FriendProvider"



export const UserCard = ({user}) => {
  const {addFriend} = useContext(FriendContext)

  const history = useHistory()
  const handleAddFriend = () => {
        const currentUser = parseInt(sessionStorage.getItem("nutshell_user"))
        addFriend({
            userId: user.id,
            currentUserId: currentUser
        })
        .then(() => history.push("/friends"))
      }
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
)}