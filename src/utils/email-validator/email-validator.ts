import { validate } from "email-validator";

export class EmailValidator {
  static validate = (emailAddress: string): boolean => validate(emailAddress);
}
