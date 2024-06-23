import LoginForm from "../../components/primary/loginForm/LoginForm";
import classes from "./login.module.css";
export default function Login() {
  return (
    <div className={classes.loginContainer}>
      <h1>Iniciar sesión</h1>
      <LoginForm />
    </div>
  );
}
