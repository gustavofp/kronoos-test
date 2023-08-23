export interface Transformer<T, K> {
  transform(input: T): K;
}
