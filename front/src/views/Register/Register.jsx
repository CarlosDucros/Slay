import RegisterForm from "../../components/primary/register_form/RegisterForm";
import classes from "./register.module.css";
const Register = () => {
  return (
    <div className={classes.registerView}>
      <h1>Registrarse</h1>
      <RegisterForm />
    </div>
  );
};

export default Register;
