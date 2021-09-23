import React from 'react'

function signup() {
    return (
        <div>
            <label htmlFor="username">
                <input type="text" name="username" placeholder="username" />
            </label>
            <label htmlFor="password">
                <input type="password" name="password" placeholder="password" />
            </label>
            <label htmlFor="email">
                <input type="email" name="email" placeholder="email" />
            </label>
        </div>
    )
}

export default signup
