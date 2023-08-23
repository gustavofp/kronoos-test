import { InputCsvData } from '../interfaces/input-csv-data';
import { OutputCvsData } from '../interfaces/output-csv-data';
import { Transformer } from '../transformers/transformer';
import { TransformFunction } from './transform-function';

export class TransformFunctionImp
  implements TransformFunction<InputCsvData, OutputCvsData>
{
  constructor(
    private readonly dateTransformer: Transformer<string, Date>,
    private readonly monetaryTransformer: Transformer<number, string>,
  ) {}

  transform(input: InputCsvData): OutputCvsData {
    console.log(input, this.dateTransformer, this.monetaryTransformer);

    return {} as OutputCvsData;
  }
}
