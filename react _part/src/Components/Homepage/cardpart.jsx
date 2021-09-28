import { React } from 'react';
import { useState, useEffect } from 'react';
import API from '../../api';
import './cardpart.css';


function Cardpart() {

    const [shops, setShops] = useState([]);

    const getShops = async () => {
        try {
            await API.get(`shops/get/accepted`).then((res) => {
                const result = res.data;
                setShops(result);
            });
        } catch (error) {
            console.log(error);
        }
    };


    //offer.slice(0, 5)
    //offer.slice(0, 5).filter((offer) => offer._id !== detail._id).map((p=>

    useEffect(() => {
        getShops();
    }, []);

    return (
        <div className="content">
            <div className="container">
                <div className="row">
                    {shops.slice(0, 3).map((sh) => {
                        return (
                            <div className="col-xs-12 col-sm-4">
                                <div className="card">
                                    <a className="img-card" href="http://www.fostrap.com/2016/03/bootstrap-3-carousel-fade-effect.html">
                                        <img src={`http://localhost:3001/uploads/${sh.shopimg}`} alt="database img" />
                                    </a>
                                    <div className="card-content">
                                        <h4 className="card-title">
                                            <a href="http://www.fostrap.com/2016/03/bootstrap-3-carousel-fade-effect.html"> {sh.shopname} </a>
                                        </h4>
                                        <p className="">
                                            {sh.phonenumber}
                                        </p>
                                    </div>
                                    <div className="card-read-more">
                                        <a href="http://www.fostrap.com/2016/03/bootstrap-3-carousel-fade-effect.html" class="btn btn-link btn-block">
                                            Contact Shop
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Cardpart

