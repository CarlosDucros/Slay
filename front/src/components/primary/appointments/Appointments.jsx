import classes from "./appointments.module.css";
import { postAppointment } from "../../../helpers";
import { useFormik } from "formik";
import Input from "../../secondary/input/Input";
import { appointmentsValidations } from "../../../helpers/validations";
import { useDispatch, useSelector } from "react-redux";
import { addAppointment } from "../../../redux/reducer";
export default function Appointments() {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user.userId);
  //form -> addAppointment -> appointments
  //view -> addAppointments
  const submitAppt = async (appt) => {
    try {
      const newAppt = await postAppointment(appt, userId);
      dispatch(addAppointment(newAppt));
      formik.resetForm();
    } catch (err) {
      console.error(err.message);
    }
  };
  const formik = useFormik({
    initialValues: {
      time: "",
      date: "",
      description: "",
    },
    onSubmit: submitAppt,
    validate: appointmentsValidations,
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
      <form onSubmit={formik.handleSubmit} className={classes.apptForm}>
        <Input label="Fecha" type="date" {...getProps("date")} />
        {formik.touched.date && formik.errors.date && (
          <div className={classes.error}>{formik.errors.date}</div>
        )}
        <Input label="Hora" type="time" {...getProps("time")} />
        {formik.touched.time && formik.errors.time && (
          <div className={classes.error}>{formik.errors.time}</div>
        )}
        <Input
          label="Descripción"
          type="textarea"
          placeholder="Uñas"
          {...getProps("description")}
        />
        {formik.touched.description && formik.errors.description && (
          <div className={classes.error}>{formik.errors.description}</div>
        )}
        <button type="submit">Agendar turno</button>
      </form>
    </div>
  );
}
