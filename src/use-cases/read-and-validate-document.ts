/* eslint-disable @typescript-eslint/no-unused-vars */
import { FileWriter } from '../adapters/file-writer';
import { FileReader } from '../adapters/file-reader';
import { BaseUseCase } from './base-use-case';
import { ReadStream, WriteStream } from 'fs';
import { DataTransformer } from '../adapters/data-transformer';
import { InputCsvData } from '../interfaces/input-csv-data';
import { OutputCvsData } from '../interfaces/output-csv-data';
import { TransformFunction } from '../adapters/transform-function';

export interface ReadAndValidadeDocumentInput {
  inputPath: string;
  outputPath: string;
}

export class ReadAndValidadeDocument extends BaseUseCase<
  ReadAndValidadeDocumentInput,
  void
> {
  constructor(
    private readonly fileReader: FileReader,
    private readonly fileWriter: FileWriter,
    private readonly dataTransformer: DataTransformer<
      InputCsvData,
      OutputCvsData
    >,
    private readonly transformFunction: TransformFunction<
      InputCsvData,
      OutputCvsData
    >,
  ) {
    super();
  }

  execute(input: ReadAndValidadeDocumentInput): void {
    const { inputPath, outputPath } = input;
    console.log(this.fileWriter);
    const readStream: ReadStream = this.fileReader.createReadStream(inputPath);
    const writeStream: WriteStream =
      this.fileWriter.createWriteStream(outputPath);

    const transformStream = this.dataTransformer.createDataTransformer(
      this.transformFunction,
    );

    writeStream.on('finish', () => {
      console.log('finished');
    });

    readStream.pipe(transformStream).pipe(writeStream);
  }
}
