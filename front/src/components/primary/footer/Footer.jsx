import classes from "./footer.module.css";
import github from "../../../assets/github.svg";
import linkedin from "../../../assets/linkedin.svg";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className={classes.footer}>
      <h3>Redes sociales:</h3>
      <div>
        <Link to="https://github.com/CarlosDucros">
          <img className={classes.github} src={github} alt="github" />
        </Link>
        <Link to="https://www.linkedin.com/in/carlosducros/">
          <img className={classes.linkedin} src={linkedin} alt="linkedin" />
        </Link>
      </div>
      <p>&copy;2024 - Proyecto M3 Henry</p>
    </footer>
  );
}
