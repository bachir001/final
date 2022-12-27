import { Link } from 'react-router-dom';
import { React, useState } from 'react';
import { useHistory } from 'react-router';
import CookieService from '../../CookieService';
import Navbarvv from '../Homepage/navbarvv';
import styles from './signin.module.css';
import swal from 'sweetalert';

// import styles from './signin.module.css'



function Signin() {


    let history = useHistory();


    const [state, setValue] = useState({
        username: "",
        password: "",
    });

    const { username, password } = state;

    function setState(nextState) {
        setValue((prevState) => ({
            ...prevState,
            ...nextState,
        }));
    }

    function handleChange(e) {
        let { name, value } = e.target;
        setState({ [name]: value });
    }

    async function handleSubmit(e) {

        e.nativeEvent.preventDefault();

        if (username && password) {
            try {

                let res = await fetch("https://mechanical-delivery.onrender.com/users/login", {
                    method: "post",
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify({ username, password })

                });
                let result = await res.json();
                console.log("result is :", result);
                if (result.Token) {
                    const options = { path: '/', };
                    CookieService.set('Token', result.Token, options);
                    CookieService.set('_id', result._id, options);
                    CookieService.set('Role', result.Role, options);

                    if (CookieService.get("Token") && CookieService.get("_id") && CookieService.get("Role")) {
                        history.push('/');
                    }
                } else {
                    swal("username or password is not correct ", " ", "warning");
                }

            } catch (e) {
                alert(e);
            }


        }
        else {

        }
    }

    return (
        <div>

            <div>
                <Navbarvv />
                <form action="" onSubmit={handleSubmit} className={styles.genralform}  >
                    <label htmlFor="username" className={styles.generalabel}>
                        Username
                        <input type="text" placeholder="username" name="username" onChange={handleChange} className="inputu" />
                    </label>

                    <label htmlFor="password" className={styles.generalabel}>
                        Password
                        <input type="password" placeholder="password" name="password" className="inputu" onChange={handleChange} />
                    </label>
                    <input className={styles.submitbtn} type="submit" value="signin" />
                    <div className={styles.registerlink}>
                        Not a User <Link className='linksite' to={`/register`}> Be One</Link>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Signin;


