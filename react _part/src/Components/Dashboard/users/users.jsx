import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import swal from 'sweetalert';
import Sidebar from "../sidebar";
import Addcard from '../addcard';
import API from '../../../api';
import styles from './userdesign.module.css'


function Users() {

    const [Users, setUsers] = useState([]);

    const getUsers = async () => {
        try {
            await API.get(`users`).then((res) => {
                const result = res.data;
                setUsers(result);
            });
        } catch (error) {
            console.log(error);
        }
    };



    const deleteUser = async (id) => {
        const willDelete = await swal({
            title: "Delete",
            text: "Are you sure?",
            icon: "warning",
            dangerMode: true,
        });

        if (willDelete) {
            try {
                let res = await API.delete(`users/${id}`);

                if (res.data.deletedCount === 1) {
                    await swal({ text: "deleted", icon: "success" });
                } else {
                    await swal("", res, "error");
                }
                window.location.reload();
            } catch (e) {
                console.log(e);
            }
        }
    };



    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div className={styles.userswrapper}>

            <div >
                <Sidebar />
            </div>


            <div className={styles.flex_cards}  >


                <Addcard title="Add Users" route="/users/add" />

                {Users.map((us) => {
                    return (
                        <div className={styles.card} key={us._id} >

                            <button
                                style={{ backgroundColor: '#333333', color: '#fff', padding: '4.5px', paddingLeft: '8.5px', borderTop: '0', position: 'absolute', top: '0', right: '0', borderTopRightRadius: '40% 28%', cursor: 'pointer' }}
                                className={styles.link}
                                onClick={() => { deleteUser(us._id) }}
                            >
                                <i className="far fa-trash-alt"></i>

                            </button>

                            <div className={styles.card_img}>
                                
                                <Link className="linksite" to={`users/edit/${us._id}`}>
                                    <img
                                        className={styles.card_userimg}
                                        src={`http://localhost:3001/uploads/${us.profilepic}`}
                                        alt="logo img"
                                        height={150}
                                        width={250}
                                    />
                                    {console.log(us.profilepic)}
                                </Link>
                            </div>
                            <h3>{us.username}</h3>
                            <p className={styles.text_card}  >M : {us.mail}</p>

                        </div>
                    );
                })}
            </div>
        </div>

    )
}

export default Users
