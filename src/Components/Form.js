import React from 'react'

export default function Form({ firstName, lastName, email }) {
    return (
        <div>
            <h1>First Name: {firstName} </h1>
            <h1>Last Name: {lastName} </h1>
            <h1>Email: {email} </h1>
            <hr />
        </div>
    )
}
