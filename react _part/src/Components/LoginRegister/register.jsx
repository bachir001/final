import React from 'react';
import API from '../../api';
import swal from 'sweetalert';
import { useState } from 'react';
import styles from './signin.module.css';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import Navbarvv from '../Homepage/navbarvv';
import CookieService from '../../CookieService';


function Register() {

    let history = useHistory();

    const [state, setValue] = useState({
        username: "",
        password: "",
        mail: "",
    });


    const { username, password, mail } = state;

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

        if (username && password && mail) {

            try {

                const body = new FormData();

                body.append('username', username);
                body.append('mail', mail);
                body.append('password', password);
                console.log("username",username);
                console.log("mail",mail);
                console.log("password",password);

                const result = await API.post(`users`, body, {
                    headers: {
                        'Accept': 'multipart/form-data',
                    },
                });

                console.log("result is :", result);

                if (result.data.Token) {
                    const options = { path: '/', };
                    CookieService.set('Token', result.Token, options);
                    CookieService.set('_id', result._id, options);
                    CookieService.set('Role', result.Role, options);

                    if (CookieService.get("Token") && CookieService.get("_id") && CookieService.get("Role")) {
                        history.push('/');
                    }
                } else {
                    swal("Something Went Wrong  ", " ", "warning");
                }
            } catch (e) {
                alert(e);
            }
        }
        else {
            swal("Make Sure To Enter All Fields", " ", "warning");
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

                        <label htmlFor="mail" className={styles.generalabel}>
                            Email
                            <input type="email" placeholder="Email" name="mail" className="inputu" onChange={handleChange} />
                        </label>

                        <label htmlFor="password" className={styles.generalabel}>
                            Password
                            <input type="password" placeholder="password" name="password" className="inputu" onChange={handleChange} />
                        </label>
                        <input className={styles.submitbtn} type="submit" value="signup" />
                        <div className={styles.registerlink}>
                        Already User <Link className='linksite' to={`/signin`}> Signin </Link>
                    </div>
                    </form>
                </div>

            </div>
        )
    }


export default Register;
