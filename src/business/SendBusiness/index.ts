import connect from "../../config/database";
import { IBusiness } from "../../types/business";

export const SendBusiness: IBusiness<{ template: string, to: string, success: boolean, date: string }, true> = async ({ success, template, to, date }) => {
  try {
    const conn = await connect()

    if (!conn) return { success: undefined, error: 'Não foi possível se conectar ao banco de dados' }

    const sql = `INSERT INTO Emails (success, template, to, date) VALUES (${success}, '${template}', '${to}', '${date}');`

    await conn.query(sql)

    return { success: true, error: undefined }
  } catch (err: any) {
    return { success: undefined, error: err }
  }
}
