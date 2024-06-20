import * as Yup from "yup";
import { ValidationResult } from "../../types/validation-response";
import { validationMessage } from "../translations";

export const firstNameValidationSchema = Yup.string().required(validationMessage.requiredField);
export const lastNameValidationSchema = Yup.string().required(validationMessage.requiredField);

export async function validateFirstName(first_name: string): Promise<ValidationResult> {
  try {
    await firstNameValidationSchema.validate(first_name);
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

export async function validateLastName(last_name: string): Promise<ValidationResult> {
  try {
    await lastNameValidationSchema.validate(last_name);
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
