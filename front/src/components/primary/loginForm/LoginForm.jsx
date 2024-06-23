import { useFormik } from "formik";
import classes from "./loginForm.module.css";
import Input from "../../secondary/input/Input";
import { postUserLogin } from "../../../helpers";
import { loginValidations } from "../../../helpers/validations";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../../../redux/reducer";

export default function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signIn = (user) => {
    console.log(user);
    postUserLogin(user)
      .then((res) => {
        dispatch(addUser(res.loged));
        alert("Inicio de sesión exitoso!");
        navigate("/appointments");
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: signIn,
    validate: loginValidations,
  });

  const getProps = (name) => {
    return {
      name: name,
      onChange: formik.handleChange,
      onBlur: formik.handleBlur,
      value: formik.values[name],
    };
  };
  return (
    <div>
      <form onSubmit={formik.handleSubmit} className={classes.loginForm}>
        <Input
          label="Nombre de usuario"
          type="text"
          placeholder="JuanP"
          {...getProps("username")}
        />
        {formik.touched.username && formik.errors.username && (
          <div className={classes.error}>{formik.errors.username}</div>
        )}
        <Input
          label="Contraseña"
          type="password"
          placeholder="*******"
          {...getProps("password")}
        />
        {formik.touched.password && formik.errors.password && (
          <div className={classes.error}>{formik.errors.password}</div>
        )}

        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
}
