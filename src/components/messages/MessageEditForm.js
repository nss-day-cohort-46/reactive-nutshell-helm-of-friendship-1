import React, { useContext, useEffect, useState } from "react"
import { MessageContext } from "./MessageProvider"
import { useHistory, useParams } from "react-router-dom"
import "./Message.css"

export const MessageEdit = () => {
    const { getMessageById, editMessage } = useContext(MessageContext)
    const [message, setMessage] = useState({})
    const currentUserId = parseInt(sessionStorage.getItem("nutshell_user"))
    const messageId = useParams()
    const history = useHistory()

    
    useEffect(() => {
            if (messageId) {
                getMessageById(messageId)
                .then(message => {
                    setMessage(message)
                })
            }
    }, [])



    const handleEditMessage = () => {
        if (messageId) {
            editMessage({
                userId: currentUserId,
                content: message.content,
                timestamp: Date.now(),
                id: message.id
            })
            .then(() => history.push(`/messages/detail/${message.id}`))
        }
    }
    console.log(messageId)
    console.log(message)


    return (
        <form>
            <h2>Edit Message</h2>
            <fieldset>
                <label htmlFor="editMessage">Content: </label>
                <input type="text" id="content" autoFocus>{message.content}</input>
            </fieldset>
            {currentUserId === message.userId ? <button onClick={handleEditMessage}>
                Submit
            </button> : "" } 
        </form>
    )
}