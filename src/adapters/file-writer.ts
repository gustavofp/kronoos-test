import { WriteStream } from 'fs';

export interface FileWriter {
  createWriteStream(path: string): WriteStream;
}
