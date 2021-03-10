import React, { useContext, useEffect, useState } from "react"
import { EventContext } from "./EventProvider"
import { EventCard } from "./Event"
import { useHistory } from "react-router-dom"

//! Render in correct order
//! Display by user
export const EventList = () => {

    const { events, getEvents } = useContext(EventContext)
    const [userEvents, setUserEvents] = useState([])
    console.log('userEvents: ', userEvents);

    const currentUserId = +sessionStorage.getItem("nutshell_user")


    useEffect(() => {
        getEvents()
    }, [])

    useEffect(() => {
        const filteredByUser = events.filter(e => e.userId === currentUserId)
        setUserEvents(filteredByUser)
    }, [])


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