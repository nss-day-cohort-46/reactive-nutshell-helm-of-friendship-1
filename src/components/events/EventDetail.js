import React, { useContext, useEffect, useState } from "react"
import { EventContext } from "./EventProvider"
// ! Import user context
// import { UserContext } from "./UserProvider"
import { useParams, useHistory } from "react-router-dom"
import userEvent from "@testing-library/user-event"

export const EventDetail = () => {

    const { getEventById } = useContext(EventContext)
    const [event, setEvent] = useState({})
    
    //const { getUserById } = useContext(UserContext)
    //const [user, setUser] = useState({})
    
    
    
    const history = useHistory()
    const { eventId } = useParams()
    //get user Id from session storage
    const currentUserId = sessionStorage.getItem("id")

    useEffect(() => {
        getEventById(eventId)
            .then(response => {
                setEvent(response)
            })

        // getUserById(currentUserId)
        //     .then(response => {
        //         setUser(response)
        //     })
    }, [])

    
    return (
        <section className="event__item">
            <h4 className="event__title">{event.title}</h4>
            <div className="event__date">{event.date}</div>
            <div className="event__info">Description: {event.info}</div>
            {/* <div className="event__user">Host: {user?.name}</div>*/}
        </section>
    )
}