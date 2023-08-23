import { Transformer } from './transformer';

export class DateTransformer implements Transformer<string, Date> {
  transform(dateString: string): Date {
    try {
      const year = parseInt(dateString.slice(0, 4));
      const month = parseInt(dateString.slice(4, 6)) - 1; // JavaScript months are 0-indexed
      const day = parseInt(dateString.slice(6, 8));

      if (isNaN(year) || isNaN(month) || isNaN(day)) {
        throw new Error();
      }

      const transformedDate = new Date(year, month, day);

      // Check if the Date object was created successfully
      if (isNaN(transformedDate.getTime())) {
        throw new Error();
      }

      return transformedDate;
    } catch (error) {
      throw new Error('Invalid date conversion');
    }
  }
}
