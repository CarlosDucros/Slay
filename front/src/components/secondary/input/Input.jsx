import classes from "./input.module.css";

// eslint-disable-next-line react/prop-types
export default function Input({ label, ...inputProps }) {
  return (
    <div>
      <label className={classes.label}>{label}</label>
      <input {...inputProps} />
    </div>
  );
}
