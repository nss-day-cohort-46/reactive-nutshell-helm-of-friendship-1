import React, { useContext, useEffect, useState } from "react"
import { EventContext } from "./EventProvider"
import { EventCard } from "./Event"
import { useHistory } from "react-router-dom"
import "./Events.css"
//! Render in correct order
//! Display by user
export const EventList = () => {

    const { events, getEventsByUserId } = useContext(EventContext)
    const [userEvents, setUserEvents] = useState([])

    const currentUserId = +sessionStorage.getItem("nutshell_user")

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
        const sortByDate = events.sort((a, b) => new Date(a.date) - new Date(b.date))
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