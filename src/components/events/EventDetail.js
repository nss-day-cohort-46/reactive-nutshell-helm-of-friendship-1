import React, { useContext, useEffect, useState } from "react"
import { EventContext } from "./EventProvider"
// ! Import user context
import { UserContext } from "./UserProvider"
import { useParams, useHistory } from "react-router-dom"
import userEvent from "@testing-library/user-event"

export const EventDetail = () => {

    const { getEventById } = useContext(EventContext)
    const [event, setEvent] = useState({})
    
    const { getUserById } = useContext(UserContext)
    const [user, setUser] = useSTate({})
    
    
    
    const history = useHistory()
    const { eventId } = useParams()

    useEffect(() => {
        getEventById(eventId)
            .then(response => {
                setEvent(response)
            })

        getUserById(userId)
            .then(response => {
                setUser(response)
            })
    }, [])

    
    return (
        <section className="event__item">
            <h4 className="event__title">{event.title}</h4>
            <div className="event__date">{event.date}</div>
            <div className="event__info">Description: {event.info}</div>
            <div className="event__user">Host: {user.name}</div>
        </section>
    )
}