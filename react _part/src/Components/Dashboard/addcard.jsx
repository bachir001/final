import { Link } from "react-router-dom";
import styles from "./users/userdesign.module.css";



function Cardadd(props) {
  return (
    <>
      <div className={styles.card} style={{display:"flex",flexDirection:"column",justifyContent:"center"}} >
      
        <Link   to={`${props.route}`} style={{color:'#212121',fontWeight:'bold' ,textDecoration:"none"}} >
        <i className="fa fa-plus-circle fa-3x"></i>
          <p>{props.title}</p>
        </Link>
        
      </div>
    </>
  );
}

export default Cardadd;
