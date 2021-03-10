import React from "react"


export const UserCard = ({user, userObject}) => (
    <section className="user">
        <h3 className="user__name">
          {userObject? userObject.name + " " + "add friend": ""}
        </h3>
    </section>
)