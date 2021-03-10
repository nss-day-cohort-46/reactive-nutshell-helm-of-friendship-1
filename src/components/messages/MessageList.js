import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { MessageCard } from "./Message.js";
import { MessageContext } from "./MessageProvider.js";
import { UserContext } from "../users/UserProvider.js";
import "./Message.css"

// creates message board
export const MessageList = () => {
    const { messages, getMessages } = useContext(MessageContext)
    const { users, getUsers } = useContext(UserContext)

    const history = useHistory()

    // fetch message data and change message state
    useEffect(() => {
        debugger
        console.log("useEffect", users, messages)
        getUsers()
        .then(getMessages)
    }, [])

    // render message board to DOM
    return (
        <aside className="messageAside">
            <div className="messages">
                <h3>Message Board</h3>
                {
                    messages.map(message => {
                        const user = users.find(user => user.id === message.userId)
                        return <MessageCard key={message.id} message={message} user={user}/>
                    })
                }
                <textarea placeholder="Write your message here">
                </textarea>
                <button>
                    Send It
            </button>
            </div>
        </aside>
    )
}