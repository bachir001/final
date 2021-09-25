import { React, useState, useEffect } from 'react';
import styles from '../users/userdesign.module.css';
import Sidebar from '../sidebar';
import API from '../../../api';


import { Country, State, City }  from 'country-state-city';
// console.log(Country.getAllCountries())
// console.log(State.getAllStates())

 console.log(); Country.getCountryByCode('lb')

function Editshop({ match }) {

    const id = match.params.id;
    const [shopname, setShopname] = useState();
    const [locationInfo, setLocationInfo] = useState();
    const [phonenumber, setPhonenumber] = useState();
    const [shopimg, setShopimg] = useState();
    const [regions, setRegions] = useState([]);


    var file;

    const onChangeFile = async (e) => {
        e.preventDefault(e);
        file = await e.target.files[0];
        setShopimg(file);

    }


    const getRegion = async () => {

        try {


            let res = await fetch('https://battuta.medunes.net/api/region/lb/all/?key=8520f2581dd790b528e9773194f5e3ff', {
                method: 'get',
                  
            });

            console.log("hiiii",res);
            setRegions(res);


            // await axios.get(`https://battuta.medunes.net/api/region/lb/all/?key=8520f2581dd790b528e9773194f5e3ff`).then((res) => {
            //     const result = res;
            //     console.log('hiiii',result);
            // });
        } catch (e) {
            console.log(e);
        }


    }

    const getShop = async () => {
        try {
            await API.get(`shops/${id}`).then((res) => {
                const result = res.data;
                setShopname(result.shopname);
                setLocationInfo(result.locationInfo);
                setPhonenumber(result.phonenumber);
                setShopimg(result.shopimg)
            });
        } catch (e) {
            console.log(e);
        }
    }

    const edituser = async (e) => {

        e.preventDefault(e);

        try {

            const body = new FormData();

            body.append('shopname', shopname);
            body.append('phonenumber', phonenumber);
            body.append('locationInfo', locationInfo);
            body.append('shopimg', shopimg);
            body.append('shopadder', '614eee3bae058617c4e7c960');
            const res = await API.put(`shops/${id}`, body, {
                headers: {
                    'Accept': 'multipart/form-data',
                },
            });
            console.log('hi', res);

        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getShop();
        getRegion();
    }, []);

    return (

        <div className={styles.adduserwrapper}>

            <Sidebar />

            <form onSubmit={edituser} className={styles.genralform}>


                <label htmlFor="shopname" className={styles.generalabel}>
                    shopname :
                    <input className="inputu" type="text" name="shopname" value={shopname} onChange={(e) => { setShopname(e.target.value) }} required />
                </label>


                <label htmlFor="phonenumber" className={styles.generalabel}>
                    phonenumber :
                    <input className="inputu" type="text" name="phonenumber" value={phonenumber} onChange={(e) => { setPhonenumber(e.target.value) }} required />
                </label>


                    <label htmlFor="locationInfo" >
                        Select Region
                        <br />
                        <br />
                        <select
                            required
                            name="locationInfo"
                            className="inputu"
                            onChange={e => setLocationInfo(e.target.value)}
                        >
                            <option value="">None</option>

                            {regions.map((region_data) => {
                                return (
                                    <option
                                        value={region_data.region}
                                    >{region_data.region}
                                    </option>
                                )
                            })}
                        </select>

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

export default Editshop;
