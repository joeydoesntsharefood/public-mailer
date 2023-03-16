import { Connection } from "mysql2/promise";


export {}

declare global {
  namespace NodeJS {
    interface Global {
      connection: Connection;
    }
  }
}