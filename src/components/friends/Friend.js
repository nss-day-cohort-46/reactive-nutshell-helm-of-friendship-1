import React from "react"

export const FriendCard = ({friend, userObject, currentUser}) => (
    <section className="friend">
        <h3 className="friend__name">
          {/* { currentUser? userObject.name : "" } */}
          { currentUser && currentUser.id === userObject.id? currentUser.name: ""}
        </h3>
        <div className="friend__status">
          {/* {currentUser? "You are friends!": ""} */}
          {currentUser && currentUser.id === userObject.id? "You are friends!" : ""}
          </div>
    </section>
)