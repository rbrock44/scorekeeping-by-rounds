export class VizMockData {

  /**
   * @description Returns random number between 0 and value provided.
   * @param upperBound - Sets the highest desired number. Defaults to 1000.
   */
  nextNumber(upperBound: number = 10000): number {
    return Math.floor(Math.random() * upperBound);
  }

  /**
   * @description Returns random string with a length equal to provided value.
   * @param length - Sets desired string length. Defaults to 6.
   */
  nextString(length: number = 6): string {
    const chars: number[] = [];

    for (let i = 0; i < length; i++) {
      let val = this.nextNumber(74) + 48;
      if (val > 57 && val < 65) {
        val = this.nextNumber(9) + 48;
      }
      if (val > 90 && val < 97) {
        val = this.nextNumber(26) + 65;
      }
      // ASCII characters we want are between 35 and 126
      chars.push(val);
    }

    return String.fromCharCode(...chars);
  }

  /**
   * @description Returns a random boolean value.
   */
  nextBit(): boolean {
    return this.nextNumber() % 2 === 0;
  }

  /**
   * @description Returns random nullable boolean value.
   */
  nextNullableBoolean(): boolean {
    const tempNumber = this.nextNumber() % 3;
    return tempNumber === 0 ? false : tempNumber === 1 ? true : null;
  }

  /**
   * @description Returns new file with provided name and optional content.
   * @param fileName - Sets the name of the file.
   * @param content - Optional file content.
   */
  mockFile(fileName: string, content?: string): File {
    const blob = new Blob([content ? content : ''], {type: 'text/html'});
    return new File([blob], fileName);
  }

  /**
   * @description Returns random date between 2000/01/01T00:00:00 and 2020/12/12T23:59:59.
   * @param withTime - Set whether to include time with created date. Defaults to true.
   */
  nextDate(withTime: boolean = true): string {
    const year: string = '' + (2000 + this.nextNumber(20)).toString();
    const month: string = this.appendLeadingZeroIfNeeded('' + (1 + this.nextNumber(11)).toString());
    const day: string = this.appendLeadingZeroIfNeeded('' + (1 + this.nextNumber(27)).toString());
    const hour: string = withTime ? this.appendLeadingZeroIfNeeded('' + this.nextNumber(23).toString()) : '00';
    const minute: string = withTime ? this.appendLeadingZeroIfNeeded(this.nextNumber(59).toString()) : '00';
    const second: string = withTime ? this.appendLeadingZeroIfNeeded(this.nextNumber(59).toString()) : '00';

    return year + '-' + month + '-' + day + 'T' + hour + ':' + minute + ':' + second;
  }

  /**
   * @description Returns random date between 01/01/2000 and 12/12/2020.
   */
  nextDateForDatePicker(): string {
    const year: string = '' + (2000 + this.nextNumber(20)).toString();
    const month: string = '' + (1 + this.nextNumber(11)).toString();
    const day: string = '' + (1 + this.nextNumber(27)).toString();

    return month + '/' + day + '/' + year;
  }

  private appendLeadingZeroIfNeeded(str: string): string {
    if (str.length === 1) {
      return '0' + str;
    }
    return str;
  }
}
