import {React,useState} from 'react';
import Sidebar from './sidebar';
import API from '../../api';
import styles from './users/userdesign.module.css';

const id=1;

function Profile() {


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [profilepic, setProfilepic] = useState('');

    const onChangeFile =  (e) => {

        e.preventDefault(e);
       let file =  e.target.files[0];
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



    return (
        <>


            <div className={styles.adduserwrapper}>

                <Sidebar />

                <form className={styles.genralform} onSubmit={edituser} >




                    <div>

                        <label className={styles.generalabel} htmlFor="">
                            username:
                        <input className="inputu" type="text" name="username" value={username} required onChange={(e) => { setUsername(e.target.value) }} />
                        </label>


                        <label className={styles.generalabel} htmlFor="">
                            Email:
                        <input className="inputu" type="email" name="email" value={email} required onChange={(e) => { setEmail(e.target.value) }} />
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
