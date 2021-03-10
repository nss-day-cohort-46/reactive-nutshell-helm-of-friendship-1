
import React, { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { UserCard } from "../users/User"
import { UserContext } from "../users/UserProvider"
import { FriendCard } from "./Friend"
import { FriendContext } from "./FriendProvider"

export const UserSearch = () => {
  const { setSearchTerms } = useContext(UserContext)

  return (
    <>
      Friend search:
      <input type="text"
        className="input--wide"
        onKeyUp={(event) => setSearchTerms(event.target.value)}
        placeholder="Search for a friend... " />
    </>
  )
}
export const UserList = () => {
    const { users, getUsers, searchTerms } = useContext(UserContext)

    useEffect(() => {
        getUsers()
        // .then(getFriends)
    }, [])

    const [ filteredUsers, setFiltered ] = useState([])
    

    useEffect(() => {
        if (searchTerms !== "") {
            const subset = users.filter(user => user.name.toLowerCase().includes(searchTerms.toLowerCase()))
            setFiltered(subset)
        } else {
            setFiltered(users)
        }
    }, [searchTerms, users])

    return (
        <div className="userList">
            
            {
                filteredUsers.map(filteredUser => {
                    // const sessionUserId = parseInt(sessionStorage.getItem("nutshell_user"))
                    // const currentUser = filteredUsers.find(user => user.id === sessionUserId)
                    // const userObject = filteredUsers.find(user => user.id !== currentUser.id)
                return <UserCard key={filteredUser.id}
                            userObject={filteredUser}
                            // user={filteredUser}
                             />
                })            
            }
            {/* <button onClick={() => history.push("/friends/search")} className="searchFriendsButton">Search for Friends</button> */}
        </div>
    )
}