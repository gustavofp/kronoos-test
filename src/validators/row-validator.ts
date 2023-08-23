import { InputCsvData } from '../interfaces/input-csv-data';
import { ValidationResult, Validator } from './validator';

export class RowValidator implements Validator<InputCsvData> {
  validate(row: InputCsvData): ValidationResult {
    console.log(row.cdClient);
    return {
      isValid: true,
      errors: [],
    };
  }
}
