import React from "react"
import { Route } from "react-router-dom"
import { MessageProvider } from "./messages/MessageProvider"
import { MessageList } from "./messages/MessageList"
import { FriendList } from "./friends/FriendList"
import { FriendProvider } from "./friends/FriendProvider"
import { UserProvider } from "./users/UserProvider"
import { ArticleList } from "./articles/ArticleList"
import { ArticleProvider } from "./articles/ArticleProvider"

// ! Render list first, then detail, then form
import { EventList } from "./events/EventList"
import { EventProvider } from "./events/EventProvider"
import { EventForm } from "./events/EventForm"
import { EventDetail } from "./events/EventDetail"



export const ApplicationViews = () => {
  return (
    <>
      <FriendProvider>
        <UserProvider>
          <Route path="/friends">
            {/* Render the component for list of friends */}
            <FriendList />
          </Route>
        </UserProvider>
      </FriendProvider>
      <ArticleProvider>
          <Route exact path="/">
            <ArticleList/>
          </Route>
        </ArticleProvider>  
      <Route path="/friends">
        {/* Render the component for list of friends */}
      </Route>

      <MessageProvider>
        <Route path="/messages">
          <MessageList />
        </Route>
      </MessageProvider>

      <Route path="/tasks">
        {/* Render the component for the user's tasks */}
      </Route>
      
      <UserProvider>
        <EventProvider>
            <Route exact path="/events">
              <EventList />
            </Route>

            <Route path="/events/create">
              <EventForm />
            </Route>
            
            <Route path="/events/detail/:eventId(\d+)">
              <EventDetail />
            </Route>
        </EventProvider>
      </UserProvider>
    </>
  )
}
