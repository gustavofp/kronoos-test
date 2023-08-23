export abstract class BaseUseCase<TUseCaseInput, TUseCaseOutput> {
  abstract execute(input: TUseCaseInput): TUseCaseOutput
}
