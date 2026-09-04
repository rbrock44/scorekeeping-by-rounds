import {Injectable} from '@angular/core';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

// One spreadsheet row: a flat map of column header (e.g. "Round 3") to cell
// value. Round columns are numbered dynamically per game, so this can't be a
// fixed set of named fields.
export type ExcelRow = Record<string, string | number>;

@Injectable()
export class ExcelService {
  constructor() {
  }

  public exportAsExcelFile(json: ExcelRow[], excelFileName: string): void {
    const data: string = 'data';
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    const workbook: XLSX.WorkBook = {Sheets: {data: worksheet}, SheetNames: [data]};
    // XLSX.write's own types declare this as `any`; it's really a BlobPart
    // (a Uint8Array, for type: 'array'), which is what Blob below needs.
    const excelBuffer: BlobPart = XLSX.write(workbook, {bookType: 'xlsx', type: 'array'});

    this.saveAsExcelFile(excelBuffer, excelFileName);
  }

  private saveAsExcelFile(buffer: BlobPart, fileName: string): void {
    const data: Blob = new Blob([buffer], {type: EXCEL_TYPE});

    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  }
}
