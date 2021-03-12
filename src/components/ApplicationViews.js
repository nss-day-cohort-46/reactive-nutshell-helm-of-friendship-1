import React from "react"
import { Route } from "react-router-dom"

import { MessageProvider } from "./messages/MessageProvider"
import { MessageList } from "./messages/MessageList"
import { MessageDetail } from "./messages/MessageDetail"

import { FriendList } from "./friends/FriendList"
import { FriendProvider } from "./friends/FriendProvider"
import { UserProvider } from "./users/UserProvider"
import { ArticleList } from "./articles/ArticleList"
import { ArticleProvider } from "./articles/ArticleProvider"
import { UserList, UserSearch } from "./friends/FriendSearch"
import { ArticleDetail } from "./articles/ArticleDetail"


import { EventList } from "./events/EventList"
import { EventProvider } from "./events/EventProvider"
import { EventForm } from "./events/EventForm"
import { EventDetail } from "./events/EventDetail"
import { ArticleForm } from "./articles/ArticleForm"



export const ApplicationViews = () => {
  return (
    <>
      <FriendProvider>
        <UserProvider>
          <Route exact path="/friends">
            {/* Render the component for list of friends */}
            <FriendList />
          </Route>
          <Route path="/friends/search">
            <UserSearch />
            <UserList />
          </Route>
        </UserProvider>
      </FriendProvider>
      
      <FriendProvider>
        <ArticleProvider>
            <Route exact path="/">
              <ArticleList/>
            </Route>
            <Route path="/articles/edit/:articleId(\d+)">
              <ArticleForm />
            </Route>
            <Route exact path= "/detail/:articleId(\d+)">
              <ArticleDetail/>
            </Route>
            <Route path ="/articles/create">
              <ArticleForm/>
            </Route>
          </ArticleProvider>  
        </FriendProvider>
      <Route path="/friends">
        {/* Render the component for list of friends */}
      </Route>

      <MessageProvider>
        <UserProvider>
          <Route exact path="/messages">
            <MessageList />
          </Route>
          <Route exact path="/messages/detail/:messageId(\d+)">
            <MessageDetail />
          </Route>
        </UserProvider>
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

            <Route path="/events/edit/:eventId(\d+)">
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
