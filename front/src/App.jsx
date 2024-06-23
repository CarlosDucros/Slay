import "./reset.css";
import "./App.css";
import MyAppointments from "./views/MyAppointments/MyAppointments";
import Register from "./views/Register/Register";
import Layout from "./components/primary/layout/Layout";
import Home from "./views/home/Home";
import Login from "./views/login/Login";
import About from "./views/about/About";
import { Routes, Route } from "react-router-dom";
import Profile from "./views/profile/Profile";
import { useSelector } from "react-redux";
import FormAppointments from "./views/formAppointments/FormAppointments";
function App() {
  const user = useSelector((state) => state.user.userId);
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route
            path="/appointments"
            element={user > 0 ? <MyAppointments /> : <div>Page not found</div>}
          />
          <Route
            path="/formAppointments"
            element={
              user > 0 ? <FormAppointments /> : <div>Page not found</div>
            }
          />
          <Route path="/*" element={<div>Page not found</div>} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
