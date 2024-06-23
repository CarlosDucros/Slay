import { useEffect } from "react";
import Appointment from "../../components/secondary/appointment/Appointment";
import { getAppointments } from "../../helpers";
import classes from "./myAppointments.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addAppointments } from "../../redux/reducer";
export default function MyAppointments() {
  const dispatch = useDispatch();
  const appointments = useSelector(
    (state) => state.userAppointment.appointments
  );
  const userId = useSelector((state) => state.user.userId);

  useEffect(() => {
    getAppointments()
      .then((res) => {
        dispatch(
          addAppointments(
            res.filter((appointment) => appointment.user.id === userId)
          )
        );
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className={classes.appointments}>
      <h1>Mis turnos</h1>
      <section className={classes.appointmentSelect}>
        <h1>Activos</h1>
        <div className={classes.appointmentsGroup}>
          {appointments
            .filter((appt) => appt.status === "ACTIVE")
            .map((appointment) => (
              <Appointment
                key={appointment.id}
                date={appointment.date}
                time={appointment.time}
                description={appointment.description}
                status={appointment.status}
                id={appointment.id}
              />
            ))}
          {appointments.filter((appt) => appt.status === "ACTIVE").length ===
            0 && <p>No hay turnos activos</p>}
        </div>
        <div>
          <h2>Cancelados</h2>
          <div className={classes.appointmentsGroup}>
            {appointments
              .filter((appt) => appt.status === "CANCELLED")
              .map((appointment) => (
                <Appointment
                  key={appointment.id}
                  date={appointment.date}
                  time={appointment.time}
                  description={appointment.description}
                  status={appointment.status}
                />
              ))}
            {appointments.filter((appt) => appt.status === "CANCELLED")
              .length === 0 && <p>No hay turnos cancelados</p>}
          </div>
        </div>
      </section>
    </div>
  );
}
