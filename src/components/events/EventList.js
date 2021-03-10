import React, { useContext, useEffect, useState } from "react"
import { EventContext } from "./EventProvider"
import { EventCard } from "./Event"
import { useHistory } from "react-router-dom"

//! Render in correct order
export const EventList = () => {

    const { events, getEvents } = useContext(EventContext)
    const [sortedEvents, setSortedEvents] = useState([])
    const currentUserId = parseInt(sessionStorage.getItem("nutsehll_user"))

    useEffect(() => {
        getEvents()
    }, [])

    useEffect(() => {
        const filterEventsByUser = events.filter(event => event.userId === currentUserId) 
        const eventsSortedByDate = filterEventsByUser.sort((a, b) => {
            return (new Date(b.date).valueOf - new Date(a.date).valueOf)
        })
        setSortedEvents(eventsSortedByDate)
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
                    
                    events.map(event => {
                        return <EventCard key={event.id} event={event} />
                    })
                }
            </div>
        </>
    )
}