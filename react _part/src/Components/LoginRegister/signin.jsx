import React from 'react';
import Navbarvv from '../Homepage/navbarvv';
// import styles from './signin.module.css'

function signin() {


    return (
        <div>
            <Navbarvv />
            <form action="" >
                <label htmlFor="username">
                    Username
                    <input type="text" placeholder="username" name="username" />
                </label>
                <label htmlFor="password">
                    Password
                    <input type="password" placeholder="password" name="password" />
                </label>
                <input type="submit" value="signin" />
            </form>
        </div>
    )
}

export default signin
