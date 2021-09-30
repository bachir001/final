import React from 'react'
import API from '../../api';
import { useState } from 'react';
import { ToolsIcon } from '@iconbox/oct';
import { State, City } from 'country-state-city';
import Navbarvv from '../Homepage/navbarvv';
import { Link } from 'react-router-dom';

// shopsp go for shops page //


function Shopsp() {

    const [region, setRegion] = useState('nothing');
    const [cities, setCities] = useState([]);

    const leb = State.getStatesOfCountry('LB');


    const [shops, setShops] = useState([]);

    const getShops = async (location) => {


        try {
            await API.get(`shops/getl/${location}`).then((res) => {
                const result = res.data;
                setShops(result);
                console.log("result", result);
                console.log("res", res);
            });
        } catch (error) {
            console.log(error);
        }

    };



    const dealwithregion = async (code) => {

        setRegion("filled");

        setCities(City.getCitiesOfState('LB', code.toString()));

    }





    return (

        <div>

            <Navbarvv />

            <section className="wrapper">
                <div className="container-fostrap">
                    <div>
                        <ToolsIcon style={{ width: "70px", color: "#0B58CA", marginBottom: "2rem" }} />
                        <h1 className="heading" style={{ color: "#0B58CA", marginLeft: "1rem" }}>
                            find shops
                        </h1>
                    </div>

                    <label htmlFor="regionInfo" >
                        Select Region :
                        <br />
                        <select
                            required
                            name="regionInfo"
                            className="inputu"
                            onChange={e => dealwithregion(e.target.value)}
                        >
                            <option value="">None</option>

                            {leb.map((lb) => {
                                return (
                                    <option
                                        value={lb.isoCode}
                                        key={lb.name}
                                    >{lb.name}
                                    </option>
                                )
                            })}
                        </select>

                    </label>


                    {region !== "nothing" ? (

                        <div>

                            <label htmlFor="regionInfo" >

                                Select City:
                                <br />
                                <select
                                    required
                                    name="locationInfo"
                                    className="inputu"
                                    onChange={e => getShops(e.target.value)}
                                >
                                    <option value="">None</option>

                                    {cities.map((ct) => {
                                        return (
                                            <option
                                                value={ct.name}
                                                key={ct.name}
                                            >{ct.name}
                                            </option>
                                        )
                                    })}

                                </select>

                            </label>

                            <p>

                            </p>

                        </div>
                    ) : (
                        <p> </p>
                    )}




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

                                                    <a href={`https://wa.me/961${sh.phonenumber}`} class="btn btn-link btn-block" target="_blank">
                                                    Contact Shop <i class="fab fa-whatsapp"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    )
}

export default Shopsp
