import nodemailer, { Transporter } from 'nodemailer';
import { smtpConfig } from '../../config/mailer';
import { Email, IService } from '../../types/services';

export const SendService: IService<Email> = async ({ subject, text, to }) => {
  let transporter: Transporter;
  try {
    transporter = nodemailer.createTransport(smtpConfig);
  
    await transporter.sendMail({
      from: 'no-reply@agriland11971.c42.integrator.host',
      to: to,
      subject: subject,
      html: text,
    });
  
    transporter.close();
    return { success: true, error: false }
  } catch (error) {
    return { success: false, error: true }
  }
}
