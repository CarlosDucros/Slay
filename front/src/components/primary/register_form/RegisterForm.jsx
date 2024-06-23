import { useFormik } from "formik";
import classes from "./registerForm.module.css";
import Input from "../../secondary/input/Input";
import { postUserRegister } from "../../../helpers";
import { registerValidations } from "../../../helpers/validations";
import { useNavigate } from "react-router-dom";

export default function RegisterForm() {
  const navigate = useNavigate();
  const signUp = (user) => {
    postUserRegister(user);
    formik.resetForm();
    alert("Usuario registrado");
    setTimeout(() => {
      navigate("/auth/login");
    }, 500);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      birthdate: "",
      dni_number: "",
      username: "",
      password: "",
    },
    onSubmit: signUp,
    validate: registerValidations,
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
      <form onSubmit={formik.handleSubmit} className={classes.registerForm}>
        <Input
          label="Nombre"
          type="text"
          placeholder="Juan Perez"
          {...getProps("name")}
        />
        {formik.touched.name && formik.errors.name && (
          <p className={classes.error}>{formik.errors.name}</p>
        )}
        <Input
          label="Email"
          type="email"
          placeholder="juanperez@mail.com"
          {...getProps("email")}
        />
        {formik.touched.email && formik.errors.email && (
          <p className={classes.error}>{formik.errors.email}</p>
        )}
        <Input
          label="Fecha de nacimiento"
          type="date"
          max={new Date().toISOString().split("T")[0]}
          {...getProps("birthdate")}
        />
        {formik.touched.birthdate && formik.errors.birthdate && (
          <p className={classes.error}>{formik.errors.birthdate}</p>
        )}
        <Input
          label="Documento(DNI)"
          type="text"
          placeholder="44444444"
          {...getProps("dni_number")}
        />
        {formik.touched.dni_number && formik.errors.dni_number && (
          <p className={classes.error}>{formik.errors.dni_number}</p>
        )}
        <Input
          label="Nombre de usuario"
          type="text"
          placeholder="JuanP"
          {...getProps("username")}
        />
        {formik.touched.username && formik.errors.username && (
          <p className={classes.error}>{formik.errors.username}</p>
        )}
        <Input
          label="Contraseña"
          type="password"
          placeholder="*******"
          {...getProps("password")}
        />
        {formik.touched.password && formik.errors.password && (
          <p className={classes.error}>{formik.errors.password}</p>
        )}
        {formik.isValid ? (
          <button type="submit">Registrarse</button>
        ) : (
          <button className={classes.disabled} disabled="true">
            Disabled
          </button>
        )}
      </form>
    </div>
  );
}
