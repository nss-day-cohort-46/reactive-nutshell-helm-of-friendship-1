import React, { useState, createContext } from "react";

export const MessageContext = createContext()

export const MessageProvider = (props) => {
    // set state for messages
    const [messages, setMessages] = useState([])

    // fetch call then setMessages
    const getMessages = () => {
        return fetch("http://localhost:8088/messages")
            .then(res => res.json())
            .then(setMessages)
    }

    // store functions in MessageContext
    return (
        <MessageContext.Provider value={{
            messages, getMessages
        }}>
            {props.children}
        </MessageContext.Provider>
    )
}