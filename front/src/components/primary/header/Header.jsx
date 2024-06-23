import Navbar from "../../secondary/navbar/Navbar";
import classes from "./header.module.css";
import logo from "../../../assets/logoManicura.png";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <img src={logo} alt="logo" />
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
