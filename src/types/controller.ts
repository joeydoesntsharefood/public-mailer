import { NextFunction, Request, Response } from "express"

export type IControllers = (req: Request, res: Response, next: NextFunction) => any