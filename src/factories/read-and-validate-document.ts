import { DataTransformerImp } from '../adapters/data-transformer-impl';
import { FileReaderImpl } from '../adapters/file-reader-impl';
import { FileWriterImpl } from '../adapters/file-writer-impl';
import { TransformFunctionImp } from '../adapters/transform-function-impl';
import { DateTransformer } from '../transformers/date-transformer';
import { MonetaryTransformer } from '../transformers/monetary-transformer';
import { ReadAndValidadeDocument } from '../use-cases/read-and-validate-document';

const fileReader = new FileReaderImpl();
const fileWriter = new FileWriterImpl();
const dataTransformer = new DataTransformerImp();

const dateTransformer = new DateTransformer();
const monetaryTransformer = new MonetaryTransformer();
const transformFunction = new TransformFunctionImp(
  dateTransformer,
  monetaryTransformer,
);

const readAndValidateDocumentUseCase = new ReadAndValidadeDocument(
  fileReader,
  fileWriter,
  dataTransformer,
  transformFunction,
);

export default readAndValidateDocumentUseCase;
