import { React, useState } from 'react';
import styles from '../users/userdesign.module.css';
import Sidebar from '../sidebar';
import API from '../../../api';


function Newshop() {

    const [shopname, setShopname] = useState();
    const [locationInfo, setLocationInfo] = useState();
    const [phonenumber, setPhonenumber] = useState();
    const [shopimg, setShopimg] = useState();

    var file;

    const onChangeFile = async (e) => {
        e.preventDefault(e);
        file = await e.target.files[0];
        setShopimg(file);

    }

    const adduser = async (e) => {
        e.preventDefault(e);

        try {

            const body = new FormData();

            body.append('shopname', shopname);
            body.append('phonenumber', phonenumber);
            body.append('locationInfo', locationInfo);
            body.append('shopimg', shopimg);
            body.append('shopadder', '614eee3bae058617c4e7c960');
            await API.post(`shops`, body, {
                headers: {
                    'Accept': 'multipart/form-data',
                },
            });

        } catch (e) {
            console.log(e);
        }
    }

    return (

        <div className={styles.adduserwrapper}>

            <Sidebar />

            <form onSubmit={adduser} className={styles.genralform}>


                <label htmlFor="shopname" className={styles.generalabel}>
                    shopname :
                    <input className="inputu" type="text" name="shopname" required onChange={(e) => { setShopname(e.target.value) }} />
                </label>


                <label htmlFor="phonenumber" className={styles.generalabel}>
                    phonenumber :
                    <input className="inputu" type="text" name="phonenumber" required onChange={(e) => { setPhonenumber(e.target.value) }} />
                </label>


                <label htmlFor="location Info" className={styles.generalabel}>
                    Location :
                    <input className="inputu" type="text" name="locationInfo" required onChange={(e) => { setLocationInfo(e.target.value) }} />
                </label>

                <div>
                    <label htmlFor="pic" className={styles.chooseimg}>
                        choose image
                    </label>
                    <input  className={styles.fileinput}  type="file" id="pic" accept="image/*" multiple={false} onChange={onChangeFile} required />
                </div>

                <div>
                    <input className={styles.submitbtn} type="submit" value="Add" />
                </div>

            </form>

        </div>

    )
}

export default Newshop;
