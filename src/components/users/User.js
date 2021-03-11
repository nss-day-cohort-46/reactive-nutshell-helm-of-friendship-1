import React, { useContext, useState } from "react"
import { useHistory } from "react-router"
import { FriendContext } from "../friends/FriendProvider"



export const UserCard = ({user, userObject}) => {
  const {addFriend} = useContext(FriendContext)

  const history = useHistory()
  const handleAddFriend = () => {
        addFriend({
            userId: user.id,
            currentUserId: userObject.id
        })
        .then(() => history.push("/friends"))
      }

  return (
    <section className="user">
        <h3 className="user__name">
          {userObject.id !== user.id? user.name : ""}
        </h3>
        {userObject.id !== user.id? <button className="btn btn-primary"
          onClick={event => {
            event.preventDefault()
            handleAddFriend()
          }}>Add Friend</button> : ""}
    </section>
)}