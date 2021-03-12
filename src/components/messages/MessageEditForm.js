import React, { useContext, useEffect, useState } from "react"
import { MessageContext } from "./MessageProvider"
import { useHistory, useParams } from "react-router-dom"
import "./Message.css"

export const MessageEdit = () => {
    const { getMessageById, editMessage } = useContext(MessageContext)
    const [message, setMessage] = useState({})
    const currentUserId = parseInt(sessionStorage.getItem("nutshell_user"))
    const { messageId } = useParams()
    const history = useHistory()


    useEffect(() => {
        if (messageId) {
            getMessageById(messageId)
                .then(message => {
                    setMessage(message)
                })
        }
    }, [])

    const handleControlledInputChange = (event) => {
        const newMessage = { ...message }
        newMessage[event.target.id] = event.target.value
        setMessage(newMessage)
    }

    const handleEditMessage = () => {
        if (messageId) {
            editMessage({
                userId: currentUserId,
                content: message.content,
                timestamp: Date.now(),
                id: message.id
            })
                .then(() => history.push(`/messages/detail/${messageId}`))
        }
    }
    console.log(messageId)
    console.log(message)


    return (
        <form>
            <h2>Edit Message</h2>
            <fieldset>
                <label htmlFor="content"></label>
                <textarea type="text" id="content" onChange={handleControlledInputChange} autoFocus value={message.content}></textarea>
            </fieldset>
            <button onClick={handleEditMessage}>
                Submit
            </button>
        </form>
    )
}