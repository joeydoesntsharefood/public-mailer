export interface Email {
  to: string;
  subject: string;
  text: string;
}

export type IService<T> = (data: T) => Promise<{ success: boolean, error: boolean }>