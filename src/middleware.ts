import dayjs from "dayjs"
import { NextFunction, Request, Response } from "express"

const middleware = (req: Request, res: Response, next: NextFunction) => {
  const date = dayjs().format('HH:MM:ss')

  console.log(`[ADMIN - ${req.method}] ${date} ${req.url}`)
  if (req.method === 'POST') console.log(req.body)

  return next()
}

export default middleware