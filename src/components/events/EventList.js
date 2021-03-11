import React, { useContext, useEffect, useState } from "react"
import { EventContext } from "./EventProvider"
import { EventCard } from "./Event"
import { useHistory } from "react-router-dom"
import "./Events.css"
import { FriendContext } from "../friends/FriendProvider"
//! Render in correct order
//! Display by user
export const EventList = () => {

    // Event Context
    const { events, getEventsByUserId, getEvents } = useContext(EventContext)
    const [userEvents, setUserEvents] = useState([])
    const { friends, getFriends } = useContext(FriendContext)
    const currentUserId = +sessionStorage.getItem("nutshell_user")
    const history = useHistory()


    //! Get all events, then all friends
    //! Match events to currentUser id, then match events to friend.userId matches of current

    // Filter events for current user via fetch call
    useEffect(() => {
        getEvents()
            .then(getFriends)
    }, [])


    // Sort events by date when events state Changes
    useEffect(() => {
        const sortByDate = events.sort((a, b) => new Date(b.date) - new Date(a.date))
        setUserEvents(sortByDate)
    }, [events])

    




    

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