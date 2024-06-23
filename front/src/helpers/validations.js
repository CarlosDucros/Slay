import { getUsers } from ".";
export async function registerValidations(values) {
  const errors = {};
  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const regexName = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
  const regexUsername = /^[A-Za-z\d]{4,}$/;
  try {
    const users = await getUsers();
    //Name Validations
    if (!values.name) {
      errors.name = "Por favor ingrese el nombre";
    } else if (!regexName.test(values.name)) {
      errors.name = "El nombre solo puede contener letras y espacios";
    }
    //Email Validations
    if (!values.email) {
      errors.email = "Por favor ingrese el email";
    } else if (!regexEmail.test(values.email)) {
      errors.email =
        "El email solo puede contener letras, numeros, puntos, guiones y guion bajo";
    } else if (users.some((user) => user.email == values.email)) {
      errors.email = "El email ya esta en uso";
    }
    //Birthdate Validations
    if (!values.birthdate) {
      errors.birthdate = "Por favor ingrese la fecha de nacimiento";
    } else if (new Date(values.birthdate) > new Date()) {
      errors.birthdate = "La fecha de nacimiento debe ser menor al día actual";
    }
    //DNI Validations
    if (!values.dni_number) {
      errors.dni_number = "Por favor ingrese el documento";
    } else if (users.some((user) => user.dni_number == values.dni_number)) {
      errors.dni_number = "Ya existe un usuario con ese DNI";
    }
    //Username Validations
    if (!values.username) {
      errors.username = "Por favor ingrese el nombre de usuario";
    } else if (
      users.some((user) => user.credentials.username === values.username)
    ) {
      errors.username = "El nombre de usuario ya esta en uso";
    } else if (!regexUsername.test(values.username)) {
      errors.username =
        "El username solo puede contener letras y numeros, y un minimo de 4 caracteres";
    }
    //Password Validations
    if (!values.password) {
      errors.password = "Por favor ingresa la contraseña";
    } else if (values.password.length < 5) {
      errors.password = "La contraseña tiene que ser mayor a 5 digitos";
    }
    return errors;
  } catch (error) {
    console.error(error);
  }
}

export function appointmentsValidations(values) {
  const errors = {};
  const openHour = 9 * 60;
  const closedHour = 21 * 60;

  //Date Validations
  if (!values.date) {
    errors.date = "Por favor ingrese la fecha";
  } else if (new Date(values.date) < new Date()) {
    errors.date = "La fecha tiene que ser minimo un día en el futuro";
  }
  //Time Validations
  if (!values.time) {
    errors.time = "Por favor ingrese la hora";
  }
  if (values.time) {
    const [hours, minutes] = values.time.split(":").map(Number);
    const totalMinutes = hours * 60 + minutes;
    if (totalMinutes > closedHour || totalMinutes < openHour) {
      errors.time = "La hora tiene que estar entre las 09:00 y las 21:00";
    }
  }

  //Description Validations
  if (!values.description) {
    errors.description = "Por favor ingrese la descripción";
  }
  return errors;
}

export const loginValidations = async (values) => {
  try {
    const errors = {};
    if (!values.username) {
      errors.username = "Ingrese el nombre de usuario";
    }
    if (!values.password) {
      errors.password = "Ingrese la contraseña";
    }

    return errors;
  } catch (error) {
    console.error(error.message);
  }
};
