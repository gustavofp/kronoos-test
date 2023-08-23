import readAndValidateDocumentUseCase from './factories/read-and-validate-document';

const main = () => {
  readAndValidateDocumentUseCase.execute({
    inputPath: 'data.csv',
    outputPath: 'output.csv',
  });
};

main();
