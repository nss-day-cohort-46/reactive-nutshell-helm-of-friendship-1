import React, { useState, createContext } from "react"

export const EventContext = createContext()

export const EventProvider = (props) => {

    const [events, setEvents] = useState([])


    const getEvents = () => {
        return fetch("http://localhost:8088/events")
            .then(res => res.json())
            .then(setEvents)
    }

    const addEvent = (eventObj) => {
        return fetch("http://localhost:8088/events", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(eventObj)
        })
        .then(getEvents)
    }

    const getEventById = (id) => {
        return fetch(`http://localhost:8088/events/${id}?_expand=user`)
            .then(res => res.json())
    }

    const updateEvent = event => {
        return fetch(`http://localhost:8088/events/${event.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(event)
        })
        .then(getEvents)
    }

    const getEventsByUserId = (userId) => {
        return fetch(`http://localhost:8088/events?userId=${userId}`)
            .then(res => res.json())
            .then(setEvents)
    }

    const deleteEvent = eventId => {
        return fetch(`http://localhost:8088/events/${eventId}`, {
            method: "DELETE"
        })
        .then(getEvents)
    }

    return (
        <EventContext.Provider value ={{
            events, getEvents, addEvent, updateEvent, getEventById, getEventsByUserId, deleteEvent
        }}>
            {props.children}
        </EventContext.Provider>
    )


}