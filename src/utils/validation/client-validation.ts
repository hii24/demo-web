import * as Yup from "yup";
import { ValidationResult } from "../../types/validation-response";
import { validationMessage } from "../translations";




const nameValidationSchema = Yup.object({
  password: Yup.string().required(validationMessage.requiredField),
});

export async function validateClientName(
  password: string
): Promise<ValidationResult> {
  try {
    await nameValidationSchema.validate({ password });
    return {
      success: true,
      error: "",
    };
  } catch (e: any) {
    return {
      success: false,
      error: e.message,
    };
  }
}

export function containsSpecialChars(password: string): boolean {
  const specialCharsPattern: RegExp = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  return specialCharsPattern.test(password);
}
