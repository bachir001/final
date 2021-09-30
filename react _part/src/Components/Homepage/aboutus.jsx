import React from 'react';
import { Link } from 'react-router-dom';

function Aboutus() {

    document.body.style.textAlign = "center";

    return (
        <div>
            <div>
                <Link className="linksite" > <h3>About US </h3> </Link>

                <p>The Mechanic is a site that offers </p>
                <p>help for any one facing mechanical issues</p>

            </div>
        </div >
    )
}

export default Aboutus;