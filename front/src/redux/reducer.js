import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: 0,
  appointments: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.userId = action.payload;
    },
    signOut: (state) => {
      state.userId = 0;
    },
  },
});
export const appointmentSlice = createSlice({
  name: "userAppointment",
  initialState,
  reducers: {
    addAppointments: (state, action) => {
      state.appointments = [...action.payload];
    },
    addAppointment: (state, action) => {
      state.appointments.push(action.payload);
    },
    cancelAppt: (state, action) => {
      state.appointments = state.appointments.map((appointment) => {
        if (appointment.id === action.payload) {
          return { ...appointment, status: "CANCELLED" };
        }
        return appointment;
      });
    },
  },
});

export const { addUser, signOut } = userSlice.actions;
export const { addAppointment, cancelAppt, addAppointments } =
  appointmentSlice.actions;
export const userReducer = userSlice.reducer;
export const appointmentReducer = appointmentSlice.reducer;
