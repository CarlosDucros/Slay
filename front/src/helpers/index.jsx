import axios from "axios";

export const getAppointments = async () => {
  try {
    const response = await axios("http://localhost:3000/appointments");
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getAppointment = async (id) => {
  try {
    const response = await axios(`http://localhost:3000/appointments/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const postAppointment = async (appointment, userId) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/appointments/schedule",
      { ...appointment, user: Number(userId) }
    );
    return response.data.newAppointment;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const cancelAppointment = async (id) => {
  try {
    await axios.put(`http://localhost:3000/appointments/cancel/${id}`);
    return true;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const postUserRegister = async (user) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/users/register",
      user
    );
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const postUserLogin = async (user) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/users/login",
      user
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    alert(error.response.data.message);
    throw new Error(error.message);
  }
};

export const getUsers = async () => {
  try {
    const response = await axios("http://localhost:3000/users");
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getUser = async (id) => {
  try {
    const response = await axios(`http://localhost:3000/users/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
