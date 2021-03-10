import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { MessageCard } from "./Message.js";
import { MessageContext } from "./MessageProvider.js";
import "./Message.css"

// creates message board
export const MessageList = () => {
    const { messages, getMessages } = useContext(MessageContext)

    const history = useHistory()

    // fetch message data and change message state
    useEffect(() => {
        getMessages()
    }, [])

    // render message board to DOM
    return (
        <aside className="messageAside">
            <div className="messages">
                <h3>Message Board</h3>
                { }
                <textarea placeholder="Write your message here">
                </textarea>
                <button>
                    Send It
            </button>
            </div>
        </aside>
    )
}