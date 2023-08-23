export interface Validator<T> {
  validate(row: T);
}

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}
