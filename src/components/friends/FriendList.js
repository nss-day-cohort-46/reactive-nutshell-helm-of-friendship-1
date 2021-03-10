import React, { useContext, useEffect } from "react"
import { UserContext } from "../users/UserProvider"
import { FriendCard } from "./Friend"
import { FriendContext } from "./FriendProvider"

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
                    const sessionUserId = sessionStorage.getItem("nutshell_user")
                    const currentUser = users.find(user => user.id === parseInt(sessionUserId))
                    const userObject = users.find(user => user.id === friend.userId)
                    const reversedRoleCurrentUser = users.find(user => user.id === friend.currentUserId)
                    console.log(sessionUserId)
                return <FriendCard key={friend.id}
                            userObject={userObject}
                            currentUser={currentUser}
                            reversedRoleCurrentUser={reversedRoleCurrentUser}
                            friend={friend} />
                })            
            }
        </div>
    )
}