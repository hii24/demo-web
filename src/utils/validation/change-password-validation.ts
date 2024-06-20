import * as Yup from 'yup';
import { ValidationResult } from '../../types/validation-response';
import { validationMessage } from '../translations';

export const passwordValidationSchema = Yup.string()
    .min(8, validationMessage.passwordTooShort)
    .matches(/[a-zA-Z]/, validationMessage.passwordMustContainLetters)
    .matches(/[@$!%*#?&]/, validationMessage.passwordMustContainSpecial)
    .required(validationMessage.requiredField);

export const newPasswordValidationSchema = Yup.string()
    .min(8, validationMessage.passwordTooShort)
    .matches(/[a-zA-Z]/, validationMessage.passwordMustContainLetters)
    .matches(/[@$!%*#?&]/, validationMessage.passwordMustContainSpecial)
    .required(validationMessage.requiredField);

export const confirmPasswordValidationSchema = Yup.string()
    .min(8, validationMessage.passwordTooShort)
    .matches(/[a-zA-Z]/, validationMessage.passwordMustContainLetters)
    .matches(/[@$!%*#?&]/, validationMessage.passwordMustContainSpecial)
    .required(validationMessage.requiredField);

export async function validatePassword(password: string): Promise<ValidationResult> {
  try {
    await passwordValidationSchema.validate(password);
    return {
      success: true,
      error: '',
    };
  } catch (e: any) {
    return {
      success: false,
      error: e.message,
    };
  }
}

export async function validateNewPassword(newPassword: string): Promise<ValidationResult> {
  try {
    await newPasswordValidationSchema.validate(newPassword);
    return {
      success: true,
      error: '',
    };
  } catch (e: any) {
    return {
      success: false,
      error: e.message,
    };
  }
}

export async function validateConfirmPassword(confirmPassword: string, newPassword: string): Promise<ValidationResult> {
  try {
    await confirmPasswordValidationSchema.validate(confirmPassword);
    return {
      success: true,
      error: '',
    };
  } catch (e: any) {
    return {
      success: false,
      error: e.message,
    };
  }
}
