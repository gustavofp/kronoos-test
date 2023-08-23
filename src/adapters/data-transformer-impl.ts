/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Transform } from 'stream';
import { InputCsvData } from '../interfaces/input-csv-data';
import { OutputCvsData } from '../interfaces/output-csv-data';
import { DataTransformer } from './data-transformer';
import { TransformFunction } from './transform-function';

export class DataTransformerImp
  implements DataTransformer<InputCsvData, OutputCvsData>
{
  createDataTransformer(
    transformFunction: TransformFunction<InputCsvData, OutputCvsData>,
  ): Transform {
    const validateAndTransformStream = new Transform({
      objectMode: true,
      transform(chunk: Buffer, _encoding, callback) {
        const data = chunk.toString();
        
        const transformedData = transformFunction.transform(data)
        callback();
      },
    });

    return validateAndTransformStream;
  }
}
