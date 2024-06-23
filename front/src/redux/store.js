import { configureStore } from "@reduxjs/toolkit";
import { appointmentReducer, userReducer } from "./reducer";

const rootReducer = {
  user: userReducer,
  userAppointment: appointmentReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
