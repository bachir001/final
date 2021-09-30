import React from 'react';
import Banner from './banner';
import Navbarvv from './navbarvv';
import Aboutus from './aboutus';
import Cardpart from './cardpart';
import Footer from './footer';

function homepage() {
    return (
        <div>
            <Navbarvv />
            <Banner />
            <br />
            <div style={{marginTop:"20px"}}> <Aboutus /> </div>

            <br />
             <Cardpart /> 
            <br/>
            <br/>
            <div  style={{marginTop:"20px"}}> <Footer /> </div>

        </div>
    )
}

export default homepage
