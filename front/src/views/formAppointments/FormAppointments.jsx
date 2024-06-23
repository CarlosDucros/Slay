import Appointments from "../../components/primary/appointments/Appointments";
import classes from "./formAppointments.module.css";
export default function FormAppointments() {
  return (
    <div className={classes.appointmentContainer}>
      <div>
        <h1>Ingrese su turno!</h1>
        <Appointments />
      </div>
    </div>
  );
}
