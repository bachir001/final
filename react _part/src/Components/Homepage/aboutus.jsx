import React from 'react';
import { Link } from 'react-router-dom';

function Aboutus() {

    document.body.style.textAlign = "center";

    return (
        <div>
            <div>
                <Link className="linksite"> <h3>About US </h3> </Link>
                <p>
                    The Mechanic Site is a site that offer 
                    help for any one faced a mechanical<br />
                    problem while he is driving in a foreing place .
                </p>
            </div>
        </div>
    )
}

export default Aboutus;