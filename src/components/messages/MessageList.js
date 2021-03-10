import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { MessageCard } from "./Message.js";
import { MessageContext } from "./MessageProvider.js";

export const MessageList = () => {
    const { messages, getMessages } = useContext(MessageContext)

    const history = useHistory()

    useEffect(() => {
        getMessages()
    }, [])

    return (
        <aside className="messages">
            {}
            <textarea>

            </textarea>
            <button>

            </button>
        </aside>
    )
}