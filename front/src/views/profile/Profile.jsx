import { useNavigate } from "react-router-dom";
import classes from "./profile.module.css";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../redux/reducer";
import { useEffect } from "react";
export default function Profile() {
  const user = useSelector((state) => state.user.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signOutHandler = () => {
    dispatch(signOut());
    setTimeout(() => {
      navigate("/");
    }, 500);
  };

  useEffect(() => {}, [user]);
  return (
    <div className={classes.profileContainer}>
      <img src="" alt="" />
      <h1>Mi perfil</h1>
      <button
        onClick={signOutHandler}
        className={classes.signOut}
        type="button">
        Cerrar sesión
      </button>
    </div>
  );
}
