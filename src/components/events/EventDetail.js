import React, { useContext, useEffect, useState } from "react"
import { EventContext } from "./EventProvider"
import {UserContext} from "../users/UserProvider"
import { useParams, useHistory } from "react-router-dom"
// import userEvent from "@testing-library/user-event"

export const EventDetail = () => {

    const { getEventById, deleteEvent } = useContext(EventContext)
    const [event, setEvent] = useState({})
    
    const { getUserById } = useContext(UserContext)
    const [user, setUser] = useState({})
    
    
    const history = useHistory()
    const { eventId } = useParams()
    //get user Id from session storage
    const currentUserId = +sessionStorage.getItem("nutshell_user")


    // Get details for specific event and it's creator
    useEffect(() => {
        getEventById(eventId)
            .then(response => {
                setEvent(response)
            })

        // getUserById(currentUserId)
        //     .then(response => {
        //         setUser(response)
            // })
    }, [])

    // Delete event button function
    const handleDelete = () => {
        deleteEvent(eventId)
            .then(() => {
                history.push("/events")
            })
    }
    
    return (
        <section className="event__item">
            <h4 className="event__title">{event.title}</h4>
            <div className="event__date">{event.date}</div>
            <div className="event__info">Description: {event.info}</div>
            <div className="event__user">Host: {event.user?.name}</div>
            {currentUserId === event.userId? <button onClick={handleDelete}>Delete Event</button> : ""}
            {currentUserId === event.userId ? <button onClick={() => history.push(`/events/edit/${eventId}`)}>
                Update Event
            </button> : "" } 
        </section>
    )
}