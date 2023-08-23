import { ReadStream } from 'fs';
import { FileReader } from './file-reader';
import { createReadStream } from 'fs';

export class FileReaderImpl implements FileReader {
  createReadStream(path: string): ReadStream {
    return createReadStream(path);
  }
}
