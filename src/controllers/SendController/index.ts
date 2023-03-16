import dayjs from "dayjs";
import { SendBusiness } from "../../business/SendBusiness";
import { initial } from "../../models/initial";
import { SendService } from "../../services/SendService";
import { IControllers } from "../../types/controller";

export const ConfirmationController: IControllers = async (req, res) => {
  const date = dayjs().format('MM-DD-YYYY HH:mm:ss')
  const { to, code, name } = req.body

  const { subject, text } = initial?.emailConfirmation({ code, name })

  const { success, error } = await SendService({ subject, text, to })
  
  const { success: registerDBASuccesss, error: registerDBAError } = await SendBusiness({ template: 'confirmation', to, success, date })
  
  if (error) res.status(500).json({ message: 'Não foi possível enviar o e-mail', success: error })
  
  if (error) res.status(500).json({ message: 'Não foi possível registrar o envio do e-mail', success: registerDBAError })

  return res.json({ message: 'E-mail enviado', success: registerDBASuccesss })
}

export const InviteController: IControllers = async (req, res) => {
  const date = dayjs().format('MM-DD-YYYY HH:mm:ss')
  const { to, eventDate, eventHour, eventLocation, eventName } = req.body

  const { subject, text } = initial.invite({ eventDate, eventHour, eventLocation, eventName })

  const { success, error } = await SendService({ subject, text, to })
  
  const { success: registerDBASuccesss, error: registerDBAError } = await SendBusiness({ template: 'invite', to, success, date })
  
  if (error) res.status(500).json({ message: 'Não foi possível enviar o e-mail', success: error })
  
  if (error) res.status(500).json({ message: 'Não foi possível registrar o envio do e-mail', success: registerDBAError })

  return res.json({ message: 'E-mail enviado', success: registerDBASuccesss })
}

export const ForgetPasswordController: IControllers = async (req, res) => {
  const date = dayjs().format('MM-DD-YYYY HH:mm:ss')
  const { to, code, name } = req.body

  const { subject, text } = initial.forgetPassword({ code, name })

  const { success, error } = await SendService({ subject, text, to })
  
  const { success: registerDBASuccesss, error: registerDBAError } = await SendBusiness({ template: 'forgetPassword', to, success, date })
  
  if (error) res.status(500).json({ message: 'Não foi possível enviar o e-mail', success: error })
  
  if (error) res.status(500).json({ message: 'Não foi possível registrar o envio do e-mail', success: registerDBAError })

  return res.json({ message: 'E-mail enviado', success: registerDBASuccesss })
}
