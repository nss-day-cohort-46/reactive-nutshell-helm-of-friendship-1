import React, { useContext, useEffect, useState } from "react"
import { EventContext } from "./EventProvider"
import { EventCard } from "./Event"
import { useHistory } from "react-router-dom"
import "./Events.css"
import { FriendContext } from "../friends/FriendProvider"
//! Render in correct order

export const EventList = () => {

    // Event Context
    const { events, getEventsByUserId, getEvents } = useContext(EventContext)
    const [userEvents, setUserEvents] = useState([])
    const { friends, getFriendsByCurrentUser } = useContext(FriendContext)
    const currentUserId = +sessionStorage.getItem("nutshell_user")
    const history = useHistory()


    

    // Fetch friends for current user then fetch all events
    useEffect(() => {
        getFriendsByCurrentUser(currentUserId)
            .then(getEvents)
    }, [])


    // Find events that match currentUserId and friends.userId, and update this combined userEvents every time events' or friends' state changes
    useEffect(() => {

        const matchingCurrentUserEvents = events.filter(event => (currentUserId === event.userId) )
            
        const matchingFriendEvents = events.filter(event => {
            return friends.map(friend => friend.userId === event.userId)
        })

        
        let filteredMatchingFriendEvents = []
        
        matchingFriendEvents.forEach(obj => {
            if (obj.userId !== currentUserId) {
                filteredMatchingFriendEvents.push(obj)
            }
        })
        
        const allEventMatches = matchingCurrentUserEvents.concat(filteredMatchingFriendEvents)
        
        allEventMatches.sort((a, b) => new Date(a.date) - new Date(b.date))
        console.log('allEventMatches: ', allEventMatches);
        
        
        

        setUserEvents(allEventMatches)

    }, [events, friends])





    

    return (
        <>
            <h2>Events</h2>
                <button onClick={() => {history.push("/events/create")}}>
                    Create Event
                </button>
            <div className="eventList">
                {
                    
                    userEvents.map(event => {
                        return <EventCard key={event.id} event={event} />
                    })
                }
            </div>
        </>
    )
}