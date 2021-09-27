import { React, useState, useEffect  } from 'react';
import { useHistory } from 'react-router';
import styles from '../users/userdesign.module.css';
import { State, City } from 'country-state-city';
import Sidebar from '../sidebar';
import API from '../../../api';





function Editshop({ match }) {

    const id = match.params.id;
    const [shopname, setShopname] = useState();
    const [locationInfo, setLocationInfo] = useState();
    const [phonenumber, setPhonenumber] = useState();
    const [shopimg, setShopimg] = useState();
    const [accept, setAccept] = useState();
    const [region, setRegion] = useState('nothing');
    const [cities, setCities] = useState([]);
    let history=useHistory();


    var file;

    const onChangeFile = async (e) => {
        e.preventDefault(e);
        file = await e.target.files[0];
        setShopimg(file);

    }


    const leb = State.getStatesOfCountry('LB');




    const dealwithregion = async (code) => {

        setRegion("filled");

        setCities(City.getCitiesOfState('LB', code.toString()));

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
            body.append('accept', accept);
            body.append('shopadder', '614eee3bae058617c4e7c960');
            await API.put(`shops/${id}`, body, {
                headers: {
                    'Accept': 'multipart/form-data',
                },
            });

            history.push('/shops');

        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getShop();
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


                <label htmlFor="regionInfo" >
                    Select Region :
                    <br />
                    <select
                        
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

                <div>

                </div>


                {region !== "nothing" ? (

                    <div>

                        <label htmlFor="regionInfo" >

                            Select City:
                            <br />
                            <select
                                required
                                name="locationInfo"
                                className="inputu"
                                onChange={e => setLocationInfo(e.target.value)}
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

                <div >
                    <p style={{ fontSize: "18px" }}>  shop approvement : </p>
                    <input
                        type="radio"
                        name="paid"
                        value={"yes"}
                        onChange={(e) => setAccept(e.target.value)}
                        required
                    />
                    yes

                    <input
                        type="radio"
                        className={styles.noradio}
                        name="paid"
                        value={"no"}
                        onChange={(e) => setAccept(e.target.value)}
                        required
                    />
                    no
                </div>

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

export default Editshop;
