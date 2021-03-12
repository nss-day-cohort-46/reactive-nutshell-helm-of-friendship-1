import React, { createContext, useState } from "react"

export const FriendContext = createContext()

export const FriendProvider = (props) => {
    const [friends, setFriends] = useState([])

    const getFriends = () => {
        return fetch("http://localhost:8088/friends")
        .then(res => res.json())
        .then(setFriends)
    }

    // const [ searchTerms, setSearchTerms ] = useState("")

    const addFriend = (friendObj) => {
        return fetch("http://localhost:8088/friends", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(friendObj)
        })
        .then(getFriends)
    }

    const getFriendById = (id) => {
        return fetch(`http://localhost:8088/friends/${id}`)
            .then(res => res.json())
    }

    const getFriendsByCurrentUser = (id) => {
        return fetch(`http://localhost:8088/friends?currentUserId=${id}`)
            .then(res => res.json())
            // .then(setFriends)
    }





    return (
        <FriendContext.Provider value={{
            friends, getFriends, addFriend, getFriendById, getFriendsByCurrentUser
        }}>
            {props.children}
        </FriendContext.Provider>
    )
}



