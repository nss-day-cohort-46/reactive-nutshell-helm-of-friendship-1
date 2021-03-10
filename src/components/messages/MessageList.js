import React, { useState, useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { MessageCard } from "./Message.js";
import { MessageContext } from "./MessageProvider.js";
import { UserContext } from "../users/UserProvider.js";
import "./Message.css"

// creates message board
export const MessageList = () => {
    const { messages, getMessages, addMessage } = useContext(MessageContext)
    const { users, getUsers } = useContext(UserContext)
    
    const currentUserId = parseInt(sessionStorage.getItem("nutshell__user"))
    const [message, setMessage] = useState({
        userId: 0,
        content: "",
        timestamp: 0,
        id: 0
    });

    // const [isLoading, setIsLoading] = useState(true);
    const history = useHistory()

    const handleControlledInputChange = (event) => {
        const newMessage = { ...message }
        newMessage[event.target.id] = event.target.value
        setMessage(newMessage)
    }

    const handleSaveMessage = () => {
        addMessage({
            userId: currentUserId,
            content: message.content,
            timestamp: message.timestamp
        })
            .then(() => history.push("./messages"))
    }

    // fetch message data and change message state
    useEffect(() => {
        console.log("event")
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
                        console.log(user, message)
                        return <MessageCard key={message.id} message={message} user={user} />
                    })
                }
                <fieldset>
                <label htmlFor="content"></label>
                <textarea type="text" name="textarea" id="content" onChange={handleControlledInputChange} required autoFocus placeholder="Write your message here" value={message.content} >
                </textarea>
                </fieldset>
                <button onClick={handleSaveMessage}>
                    Send It
                </button>
            </div>
        </aside>
    )
}