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
    const { events, getEventsByUserId } = useContext(EventContext)
    const [userEvents, setUserEvents] = useState([])

    // Logged In User Id
    const currentUserId = +sessionStorage.getItem("nutshell_user")

    //Friend Context
    const { friends, getFriends } = useContext(FriendContext)

    //Sorted Friend State
    const [sortedFriends, setSortedFriends] = useState([])

    // Fetch friends data on render
    useEffect(() => {
        getFriends()
    }, [])
    
    console.log("friends on render", friends)
    //Sort the friends relationship table to find objects containing the logged in userId
    useEffect(() => {
        const sortedFriends = friends.filter(friend => currentUserId === friend.userId || friend.currentUserId )
        setSortedFriends(sortedFriends)
    }, [friends])

    // Exclude repeats

    // Filter events for current user via fetch call
    useEffect(() => {
        getEventsByUserId(currentUserId)
    }, [])

    // useEffect(() => {
    //     const filteredByUser = events.filter(e => e.userId === currentUserId)
    //     setUserEvents(filteredByUser)
    // }, [])

    // Sort events by date when events state Changes
    useEffect(() => {
        const sortByDate = events.sort((a, b) => new Date(b.date) - new Date(a.date))
        setUserEvents(sortByDate)
    }, [events])

    



    const history = useHistory()

    

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