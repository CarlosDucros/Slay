import classes from "./appointment.module.css";
import { formatDate, formatTime } from "../../../helpers/formatDateTime";
import { cancelAppointment } from "../../../helpers";
import { useDispatch } from "react-redux";
import { cancelAppt } from "../../../redux/reducer";
export default function Appointment(appointment) {
  const dispatch = useDispatch();

  const cancelHandler = async () => {
    try {
      const success = await cancelAppointment(appointment.id);
      if (success) {
        dispatch(cancelAppt(appointment.id));
      }
    } catch (error) {
      console.error("Error al cancelar el appointment:", error);
    }
  };

  return (
    <div
      key={appointment.id}
      className={`${classes.appointment} 
        ${
          appointment.status === "CANCELLED"
            ? classes.cancelled
            : classes.accepted
        }`}>
      <h3> {appointment.description} </h3>
      <h4>{formatDate(appointment.date)}</h4>
      <p>{formatTime(appointment.time)}</p>
      {appointment.status === "ACTIVE" && (
        <button onClick={cancelHandler}>Cancelar</button>
      )}
    </div>
  );
}
