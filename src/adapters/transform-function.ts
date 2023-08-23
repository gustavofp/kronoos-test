export interface TransformFunction<TInput, TOutput> {
  transform(input: TInput): TOutput;
}
