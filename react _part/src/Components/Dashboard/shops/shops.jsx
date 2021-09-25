import { ListGroupItem, ListGroup } from 'react-bootstrap';
import { Col, Card } from 'react-bootstrap';
import { React, useState, useEffect } from 'react';
import Addcard from './addshops';
import styles from './shopsdesign.module.css';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import API from '../../../api';
import Sidebar from '../sidebar';



function Shops() {


    const [shops, setShops] = useState([]);

    const getShops = async () => {
        try {
            await API.get(`shops`).then((res) => {
                const result = res.data;
                setShops(result);
            });
        } catch (error) {
            console.log(error);
        }
    };



    
    const deleteShop = async (id) => {
        const willDelete = await swal({
            title: "Delete",
            text: "Are you sure?",
            icon: "warning",
            dangerMode: true,
        });

        if (willDelete) {
            try {
                let res = await API.delete(`shops/${id}`);

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
        getShops();
    }, []);

    return (

        <>
            <div className={styles.shopswrapper}>

                <div>
                    <Sidebar />
                </div>

                <div className={styles.shopscard}>

                    <Addcard title="Add Shops" route="/shops/add" />
                    {shops.map((sh) => {
                        return (
                            <>
                                <Col style={{ marginBottom: "2rem" }} >
                                    <div className={styles.bordercard} >
                                        <div className={styles.imgwrapper}>
                                            <button
                                                style={{ backgroundColor: '#fff', color: '#333333', padding: '4.5px', paddingLeft: '8.5px', borderTop: '0', position: 'absolute', top: '0', right: '0', borderStyle:"none",borderBottomLeftRadius:"10%" }}
                                                className={styles.link}
                                                onClick={() => { deleteShop(sh._id) }}
                                            >
                                                <i className="far fa-trash-alt"></i>

                                            </button>
                                            <Link className="linksite" to={`shops/edit/${sh._id}`}>
                                                <img
                                                    className={styles.card_shopimg}
                                                    src={`http://localhost:3001/uploads/${sh.shopimg}`}
                                                    alt="logo img"
                                                    height={150}
                                                    width={250}
                                                />
                                            </Link>
                                        </div>
                                        <div classname={styles.cardbody}>

                                            <h6 className={styles.cardt} >
                                                {sh.shopname}
                                            </h6>
                                            <Card.Text>

                                                <ListGroup className="list-group-flush">
                                                    <ListGroupItem>  {sh.locationInfo} </ListGroupItem>
                                                    <ListGroupItem className={styles.phoneshops}>  {sh.phonenumber} </ListGroupItem>
                                                </ListGroup>

                                            </Card.Text>
                                        </div>
                                    </div>
                                </Col>

                            </>
                        )
                    })}

                </div>

            </div>

        </>
    )
}

export default Shops
