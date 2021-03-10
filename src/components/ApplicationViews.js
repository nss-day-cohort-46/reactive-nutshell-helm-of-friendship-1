import React from "react"
import { Route } from "react-router-dom"
import { FriendList } from "./friends/FriendList"
import { FriendProvider } from "./friends/FriendProvider"
import { UserProvider } from "./users/UserProvider"
import { ArticleList } from "./articles/ArticleList"
import { ArticleProvider } from "./articles/ArticleProvider"

// ! Render list first, then detail, then form
import { EventList } from "./events/EventList"
import { EventProvider } from "./events/EventProvider"
import { EventForm } from "./events/EventForm"
//import { EventDetail } from "./events/EventDetail"



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
      <Route path="/messages">
        {/* Render the component for the messages */}
      </Route>
      <Route path="/tasks">
        {/* Render the component for the user's tasks */}
      </Route>
      
      <EventProvider>
        <Route exact path="/events">
          <EventList />
        </Route>

        <Route path="/events/create">
          <EventForm />
        </Route>

        {/* REINSTATE AFTER MERGE WITH USER PROVIDER COMPONENT */
        
        /*<Route path="/events/detail/:eventId(\d+)">
          <EventDetail />
  </Route>*/}
      </EventProvider>
    </>
  )
}
