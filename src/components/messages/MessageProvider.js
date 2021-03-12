import React, { useState, createContext } from "react";

export const MessageContext = createContext()

export const MessageProvider = (props) => {
    // set state for messages
    const [messages, setMessages] = useState([])

    // fetch call then setMessages
    const getMessages = () => {
        return fetch("http://localhost:8088/messages/?_expand=user")
            .then(res => res.json())
            .then(setMessages)
    }

    const getMessageById = (id) => {
        return fetch(`http://localhost:8088/messages/${id}/?_expand=user`)
        .then(res => res.json())
    }

    const addMessage = message => {
        return fetch("http://localhost:8088/messages", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(message)
        })
        .then(res => res.json())
        .then(getMessages)
    }

    const deleteMessage = (id) => {
        return fetch(`http://localhost:8088/messages/${id}`, {
            method: "DELETE"
        })
            .then(getMessages)
    }

    // store functions in MessageContext
    return (
        <MessageContext.Provider value={{
            messages, getMessages, addMessage, getMessageById, deleteMessage
        }}>
            {props.children}
        </MessageContext.Provider>
    )
}