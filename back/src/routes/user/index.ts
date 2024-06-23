import { Router } from "express";

import {
  getUserByIdControllerAsync,
  getUsersControllerAsync,
  loginUserControllerAsync,
  registerUserControllerAsync,
} from "../../controllers/user";
import { checkUserLogin } from "../../middlewares/checkUserLogin";
import { checkUserRegister } from "../../middlewares/checkUserRegister";

const userRouter: Router = Router();

// /users/
userRouter.get("/", getUsersControllerAsync);
//users/2
userRouter.get("/:id", getUserByIdControllerAsync);
// /users/register
userRouter.post("/register", checkUserRegister, registerUserControllerAsync);
// /users/login
userRouter.post("/login", checkUserLogin, loginUserControllerAsync);

export default userRouter;
