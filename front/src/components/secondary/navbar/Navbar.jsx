import { useSelector } from "react-redux";
import ProfileButton from "../profile_button/ProfileButton";
import classes from "./navbar.module.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  const user = useSelector((state) => state.user.userId);

  return (
    <div className={classes.navbar}>
      <ul className={classes.navbar_buttons}>
        <li className={classes.navbar_button}>
          <Link to="/">Inicio</Link>
        </li>
        <li className={classes.navbar_button}>
          <Link to="/about">Sobre nosotros</Link>
        </li>
        {user > 0 && (
          <li className={classes.navbar_button}>
            <Link to="/appointments">Mis Turnos</Link>
          </li>
        )}
        {user > 0 && (
          <li className={classes.navbar_button}>
            <Link to="/formAppointments">Asignar Turno</Link>
          </li>
        )}
        <ProfileButton />
      </ul>
    </div>
  );
};

export default Navbar;
