import { NextFunction, Request, Response } from "express";
import { AsyncController } from "../types/user";

const catchAsync = (controller: AsyncController) => {
  return (req: Request, res: Response, next: NextFunction) => {
    controller(req, res).catch((err: any) => next(err));
  };
};

export default catchAsync;
