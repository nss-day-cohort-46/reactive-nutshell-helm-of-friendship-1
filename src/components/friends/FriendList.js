import React, { useContext, useEffect, useState, useHistory } from "react"
import { UserContext } from "../users/UserProvider"
import { FriendCard } from "./Friend"
import { FriendContext } from "./FriendProvider"

export const FriendList = () => {
    const { friends, getFriends } = useContext(FriendContext)
    const { users, getUsers, searchTerms } = useContext(UserContext)

    useEffect(() => {
        getUsers()
        .then(getFriends)
    }, [])

    const [ filteredUsers, setFiltered ] = useState([])
    const history = useHistory()

    useEffect(() => {
        if (searchTerms !== "") {
            const subset = users.filter(user => user.name.toLowerCase().includes(searchTerms.toLowerCase()))
            setFiltered(subset)
        } else {
            setFiltered(users)
        }
    }, [searchTerms, users])

    return (
        <div className="friendList">
            <button onClick={() => history.push("/friends/search")} className="searchFriendsButton">Search for Friends</button>
            {
                friends.map(friend => {
                    const sessionUserId = sessionStorage.getItem("nutshell_user")
                    const currentUser = users.find(user => user.id === parseInt(sessionUserId))
                    const userObject = users.find(user => user.id === friend.userId)
                    const reversedRoleCurrentUser = users.find(user => user.id === friend.currentUserId)
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

{/* <button onClick={() => history.push("/animals/create")}>
              Make Reservation
          </button> */}
// const [ filteredAnimals, setFiltered ] = useState([])
// const history = useHistory()

// // useEffect dependency array with dependencies - will run if dependency changes (state)
// // searchTerms will cause a change
// useEffect(() => {
//     if (searchTerms !== "") {
//         // If the search field is not blank, display matching animals
//         const subset = animals.filter(animal => animal.name.toLowerCase().includes(searchTerms.toLowerCase()))
//         setFiltered(subset)
//     } else {
//          // If the search field is blank, display all animals
//         setFiltered(animals)
//     }
// }, [searchTerms, animals])

// return (
//     <>
//       <h1>Animals</h1>

//       <button onClick={() => history.push("/animals/create")}>
//           Make Reservation
//       </button>
//       <div className="animals">
//       {
//         filteredAnimals.map(animal => {
//             const customer = customers.find(c => c.id === animal.customerId)
//                 const location = locations.find(l => l.id === animal.locationId)
//                 console.log("In map owner:", customer)
//                 return <AnimalCard key ={animal.id}
//                             location={location}
//                             customer={customer} 
//                             animal={animal} />
//           })
//       }
//       </div>
//     </>
//   )
// }