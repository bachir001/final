import { React, useState } from 'react';
import styles from './userdesign.module.css';
import Sidebar from '../sidebar';
import API from '../../../api';




function Newuser() {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [email, setEmail] = useState();
    const [profilepic, setProfilepic] = useState();

    var file;

    const onChangeFile = async (e) => {
        e.preventDefault(e);
        file = await e.target.files[0];
        setProfilepic(file);

    }

    const adduser = async (e) => {
        e.preventDefault(e);

        try {

            const body = new FormData();

            body.append('username', username);
            body.append('mail', email);
            body.append('password', password);
            body.append('profilepic', profilepic);

            await API.post(`users`, body, {
                headers: {
                    'Accept': 'multipart/form-data',
                },
            });
            // console.log('hi', res);

        } catch (e) {
            console.log(e);
        }
    }

    return (

        <div className={styles.adduserwrapper}>

            <Sidebar />

            <form onSubmit={adduser} className={styles.genralform}>


                <label htmlFor="username" className={styles.generalabel}>
                    Username :
                    <input className="inputu" type="text" name="username" required onChange={(e) => { setUsername(e.target.value) }} />
                </label>


                <label htmlFor="email" className={styles.generalabel}>
                    Email :
                    <input className="inputu" type="email" name="email" required onChange={(e) => { setEmail(e.target.value) }} />
                </label>


                <label htmlFor="password" className={styles.generalabel}>
                    Password :
                    <input className="inputu" type="password" name="password" required onChange={(e) => { setPassword(e.target.value) }} />
                </label>

                <div>
                    <label htmlFor="pic" className={styles.chooseimg}>
                        choose image
                    </label>
                    <input className={styles.fileinput} type="file" id="pic" accept="image/*" multiple={false} onChange={onChangeFile} />
                </div>

                <div>
                    <input className={styles.submitbtn} type="submit" value="Add" />
                </div>

            </form>

        </div>

    )
}

export default Newuser;
