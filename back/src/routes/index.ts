import { Request, Response, Router } from "express";
import userRouter from "./user";
import appointmentRouter from "./appointment";

const router: Router = Router();

router.get("/", (req: Request, res: Response) => {
  res.status(200).send("Hola mundo");
});
router.use("/users", userRouter);
router.use("/appointments", appointmentRouter);

export default router;
