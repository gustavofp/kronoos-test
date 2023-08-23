import { Transformer } from './transformer';

export class MonetaryTransformer implements Transformer<number, string> {
  transform(amount: number): string {
    const options = {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    };

    const formatter = new Intl.NumberFormat('pt-BR', options);

    const formattedCurrency = formatter.format(amount);

    return formattedCurrency;
  }
}
