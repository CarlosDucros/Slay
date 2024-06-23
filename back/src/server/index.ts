import { PORT, PROTO, HOST } from "../config";
import server from "./server";

export const serverInitializer = async () => {
  server.listen(PORT, () => {
    console.log(`Server listening on port ${PROTO}://${HOST}:${PORT}`);
  });
};
