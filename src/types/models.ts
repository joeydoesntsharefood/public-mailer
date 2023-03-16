export interface IModels {
  subject: string
  text: string
}

export interface ITemplates {
  emailConfirmation: (data: { code: string, name: string }) => IModels
  forgetPassword: (data: { name: string, code: string }) => IModels
  invite: (data: { eventName: string, eventDate: string, eventHour: string, eventLocation: string }) => IModels
}