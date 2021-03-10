import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { MessageCard } from "./Message.js";
import { MessageContext } from "./MessageProvider.js";
import "./Message.css"

export const MessageList = () => {
    const { messages, getMessages } = useContext(MessageContext)

    const history = useHistory()

    useEffect(() => {
        getMessages()
    }, [])

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