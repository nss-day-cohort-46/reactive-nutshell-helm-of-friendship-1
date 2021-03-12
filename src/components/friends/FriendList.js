import React, { useContext, useEffect } from "react"
import { UserContext } from "../users/UserProvider"
import { FriendCard } from "./Friend"
import { FriendContext } from "./FriendProvider"

//! Working on a merge fix

export const FriendList = () => {
    const { friends, getFriends } = useContext(FriendContext)
    const { users, getUsers } = useContext(UserContext)

    useEffect(() => {
        getUsers()
        .then(getFriends)
    }, [])
    return (
        <div className="friendList">
            {
                friends.map(friend => {
                    const currentUser = users.find(user => user.id === friend.currentUserId)
                    const userObject = users.find(user => user.id === friend.userId)
                return <FriendCard key={friend.id}
                            userObject={userObject}
                            currentUser={currentUser}
                            friend={friend} />
                })            
            }
        </div>
    )
}