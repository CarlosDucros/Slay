function formatDate(dateData) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "America/Argentina/Buenos_Aires",
  };
  return new Date(dateData).toLocaleDateString("es-AR", options);
}

function formatTime(timeData) {
  const options = {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "America/Argentina/Buenos_Aires",
  };
  return new Date(`2000-01-01T${timeData}`).toLocaleTimeString(
    "es-AR",
    options
  );
}

export { formatDate, formatTime };
