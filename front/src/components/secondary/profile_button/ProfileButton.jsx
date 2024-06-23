import { Link } from "react-router-dom";
import classes from "./profileButton.module.css";
import profile from "../../../assets/profile.svg";
import { useSelector } from "react-redux";

export default function ProfileButton() {
  const user = useSelector((state) => state.user.userId);

  return (
    <li className={classes.navbar_profile}>
      {user == 0 ? (
        <>
          <img src={profile} alt="Profile" />
          <ul className={classes.login}>
            <li>
              <Link to="/auth/login">Iniciar sesión</Link>
            </li>
            <li>
              <Link to="/auth/register">Registrarse</Link>
            </li>
          </ul>
        </>
      ) : (
        <>
          <ul>
            <li>
              <Link to="/profile">
                <img src={profile} alt="Profile" />
              </Link>
            </li>
          </ul>
        </>
      )}
    </li>
  );
}
