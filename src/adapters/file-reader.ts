import { ReadStream } from 'fs';

export interface FileReader {
  createReadStream(path: string): ReadStream;
}
