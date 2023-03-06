import styles from "./navbar.module.css";
import CartWidget from "../CartWidget";



const NavBar = (props) => {
    return (
        <nav className={styles.container}>
            <img src="../imagenes/greenGarden1.jpg" className="navBar_imagen_logo" />
            <p onClick={() => props.handleClick("Home")} >Home</p>
            <p onClick={() => props.handleClick("catalogo")} >Catàlogo</p>
            <p onClick={() => props.handleClick("Quiènes Somos")} >Quiènes Somos?</p>
            <p onClick={() => props.handleClick("Contacto")} >Contacto</p>
           <CartWidget />
           <p>8</p>



        </nav >
    );

};
export default NavBar
