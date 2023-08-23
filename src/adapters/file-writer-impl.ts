import { createWriteStream, WriteStream } from 'fs';
import { FileWriter } from './file-writer';

export class FileWriterImpl implements FileWriter {
  createWriteStream(path: string): WriteStream {
    return createWriteStream(path);
  }
}
