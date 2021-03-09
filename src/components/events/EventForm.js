import React, { useContext, useEffect, useState } from "react"
import { EventContext } from "./EventProvider"
import { useParams, useHistory } from "react-router-dom"



export const EventForm = () => {

    const { getEvents, addEvent, updateEvent, getEventById } = useContext(EventContext)

    const [event, setEvent] = useState({
        date: "",
        userId: 0,
        title: "",
        info: "",
    })
    
    const [isLoading, setIsLoading] = useState(true)
    const { eventId } = useParams()

    const history = useHistory()

    useEffect(() => {
        getEvents()
            .then(() => {
                if (eventId) {
                    getEventById(eventId)
                        .then(event => {
                            setEvent(event)
                            setIsLoading(false)
                        })
                } else {
                    setIsLoading(false)
                }
            })
    }, [])

    
    const handleControlledInputChange = event => {

        const newEvent = {...event}
        // "+" is the unary operator for "parseInt()" [line 45]
        let selectedVal = event.target.value
        if (event.target.id.includes("Id")) {
            selectedVal = +selectedVal
        }

        newEvent[event.target.id] = selectedVal

        setEvent(newEvent)
    }
    
    const handleSaveEvent = () => {

        
        setIsLoading(true)

        // get userId from session storage
        const currentUserId = sessionStorage.getItem("id")
        if(eventId) {
            updateEvent({
                date: event.date,
                userId: currentUserId,
                title: event.title,
                info: event.info,
                id: event.id
            }).then(() => history.push(`/events/detail/${event.id}`))
        } else {
            addEvent({
                date: event.date,
                userId: currentUserId,
                title: event.title,
                info: event.info,
            }).then(() => history.push("/events"))
        }
    }

    return (
        <form className="eventForm">
            <h2 className="eventFormTitle">{eventId ? "Edit Event" : "Add Event"}</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Event Title: </label> 
                    <input type="title" id="title" onChange={handleControlledInputChange} required autofocus className="form-control" placeholder="title?" value={event.title} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="date">Event Date: </label> 
                    <input type="date" id="date" onChange={handleControlledInputChange} required className="form-control" value={event.date} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="info">Event Description: </label> 
                    <textarea type="info" id="info" onChange={handleControlledInputChange} required className="form-control" placeholder="info?" value={event.info}></textarea>
                </div>
            </fieldset>
            <button className="btn btn-primary"
                disabled={isLoading}
                onClick={event => {
                    event.preventDefault()
                    handleSaveEvent()
                }}>
                    {eventId ? "Save Event" : "Add Event"}
                </button>
        </form>
    )

    
}   