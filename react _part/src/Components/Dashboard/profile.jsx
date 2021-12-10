import { React, useState, useEffect } from 'react';
import Sidebar from './sidebar';
import API from '../../api';
import styles from './users/userdesign.module.css';
import CookieService from '../../CookieService';

const id = CookieService.get("_id");

function Profile() {


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [profilepic, setProfilepic] = useState('');

    const onChangeFile = (e) => {

        e.preventDefault(e);
        let file = e.target.files[0];
        setProfilepic(file);

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


        } catch (e) {
            console.log(e);
        }
    }



    const getUser = async () => {
        try {
            await API.get(`users/${id}`).then((res) => {
                const result = res.data;
                setUsername(result.username);
                setEmail(result.mail);
                setProfilepic(result.profilepic);
                setPassword(result.password);
            });
        } catch (e) {
            console.log(e);
        }
    }


    useEffect(() => {
        getUser();
    }, []);



    return (
        <>


            <div className={styles.adduserwrapper}>

                <Sidebar />


                <form className={styles.genralform} onSubmit={edituser} >


                    <div>
                        <img
                            className={styles.card_userimg}
                            src={`http://localhost:3001/uploads/${profilepic}`}
                            alt="logo img"
                            height={150}
                            width={250}
                            style={{marginBottom:"20px"}}
                        />
                    </div>

                    <div>

                        <label className={styles.generalabel} htmlFor="">
                            username:
                            <input className="inputu" type="text" name="username" value={username} onChange={(e) => { setUsername(e.target.value) }} />
                        </label>


                        <label className={styles.generalabel} htmlFor="">
                            Email:
                            <input className="inputu" type="email" name="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                        </label>


                        <label className={styles.generalabel} htmlFor="">
                            password:
                            <input className="inputu" type="password" name="password" required onChange={(e) => { setPassword(e.target.value) }} />
                        </label>


                        <div>
                            <label htmlFor="pic" className={styles.chooseimg}>
                                choose image
                            </label>
                            <input className={styles.fileinput} type="file" id="pic" accept="image/*" multiple={false} onChange={onChangeFile} />
                        </div>

                        <input type="submit" className={styles.submitbtn} />

                    </div>

                </form>


            </div>
        </>

    )
}

export default Profile
