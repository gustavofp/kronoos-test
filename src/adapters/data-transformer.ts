import { Transform } from 'stream';
import { TransformFunction } from './transform-function';

export interface DataTransformer<TInput, TOutput> {
  createDataTransformer(
    transformFunction: TransformFunction<TInput, TOutput>,
  ): Transform;
}
