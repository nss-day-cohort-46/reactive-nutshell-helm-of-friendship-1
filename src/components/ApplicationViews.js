import React from "react"
import { Route } from "react-router-dom"

// ! Render list first, then detail, then form
import { EventList } from "./events/EventList"
import { EventProvider } from "./events/EventProvider"


export const ApplicationViews = () => {
  return (
    <>

      <Route exact path="/">
        {/* Render the component for news articles */}
      </Route>
      <Route path="/friends">
        {/* Render the component for list of friends */}
      </Route>
      <Route path="/messages">
        {/* Render the component for the messages */}
      </Route>
      <Route path="/tasks">
        {/* Render the component for the user's tasks */}
      </Route>
      
      <EventProvider>
        <Route path="/events">
          <EventList />
        </Route>
      </EventProvider>
    </>
  )
}
