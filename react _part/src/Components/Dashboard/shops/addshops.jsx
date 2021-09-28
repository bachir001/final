import { Link } from "react-router-dom";
import styles from "./shopsdesign.module.css";



function Shopadd(props) {
  return (
    <>
      <div className={styles.bordercard} style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "325px", margin: "0 15px", marginBottom: "2rem" }} >

        <Link to={`${props.route}`} style={{ color: '#212121', fontWeight: 'bold', textDecoration: "none" }} >
          <i className="fa fa-plus-circle fa-3x"></i>
          <p>{props.title}</p>
        </Link>

      </div>
      
      </>
  );
}

export default Shopadd;
