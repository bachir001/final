import React from 'react';
import API from '../../../api';
import Sidebar from '../sidebar';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import styles from './userdesign.module.css';

function Edituser({ match }) {

    const id = match.params.id;
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [profilepic, setProfilepic] = useState([]);
    let history=useHistory();

 

    const onChangeFile =  (e) => {

        e.preventDefault(e);
       let file =  e.target.files[0];
        setProfilepic(file);

    }
    const getUser = async () => {
        try {
            await API.get(`users/${id}`).then((res) => {
                const result = res.data;
                setUsername(result.username);
                setEmail(result.mail);
                setProfilepic(result.profilepic);
            });
        } catch (e) {
            console.log(e);
        }
    }

    const edituser = async (e) => {
        e.preventDefault(e);

        try {

            const body = new FormData();

            body.append('username', username);
            body.append('mail', email);
            body.append('password', password);
            body.append('profilepic', profilepic);



             await API.put(`users/${id}`, body, {
                headers: {
                    'Accept': 'multipart/form-data',
                },
            });
            history.push('/users');

        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getUser();
    }, []);

    return (

        <div className={styles.adduserwrapper}>

            <Sidebar />

            <form onSubmit={edituser} className={styles.genralform}>


                <label htmlFor="username" className={styles.generalabel}>
                    Username :
                    <input className="inputu" type="text" name="username" value={username} required onChange={(e) => { setUsername(e.target.value) }} />
                </label>


                <label htmlFor="email" className={styles.generalabel}>
                    Email :
                    <input className="inputu" type="email" name="email" value={email} required onChange={(e) => { setEmail(e.target.value) }} />
                </label>


                <label htmlFor="password" className={styles.generalabel}>
                    Password :
                    <input
                        className="inputu"
                        type="password"
                        name="password"
                        
                        onChange={(e) => { setPassword(e.target.value) }} />
                </label>

                <div>
                    <label htmlFor="pic" className={styles.chooseimg}>
                        choose image
                    </label>
                    <input className={styles.fileinput} type="file" id="pic" accept="image/*" multiple={false} onChange={onChangeFile} />
                </div>
                         
                <div>
                    <input className={styles.submitbtn} type="submit" value="Update" />
                </div>

            </form>



        </div>

    )



}

export default Edituser;
