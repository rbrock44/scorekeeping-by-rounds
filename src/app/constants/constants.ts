export const RESET_EVERYTHING_MESSAGE: string = 'This will reset everything to the default settings.';
export const RESET_SCORES_MESSAGE: string = 'This will reset the scores only.';
export const APPLY_SETTING_MESSAGE: string = 'Applying settings changes will reset scores.';
export const RESET_SCORES_SUCCESS_MESSAGE: string = 'Scores reset successfully.';
export const RESET_EVERYTHING_SUCCESS_MESSAGE: string = 'Settings and scores reset successfully.';
export const APPLY_SETTING_SUCCESS_MESSAGE: string = 'Settings applied successfully.';
export const ACTION_CANCELLED_MESSAGE: string = 'Action Cancelled.';

export const PERFORM_THIS_ACTION: string = 'Are you sure you want to perform this action?';

export const COLOR_OPTIONS = [
  {
    name: 'Black',
    value: '--black-color-'
  },
  {
    name: 'Blue',
    value: '--blue-color-'
  },
  {
    name: 'Gray',
    value: '--gray-color-'
  },
  {
    name: 'Gray Dark',
    value: '--gray-dark-color-'
  },
  {
    name: 'Green',
    value: '--green-color-'
  },
  {
    name: 'Orange',
    value: '--orange-color-'
  },
  {
    name: 'Pink',
    value: '--pink-color-'
  },
  {
    name: 'Purple',
    value: '--purple-color-'
  },
  {
    name: 'Red',
    value: '--red-color-'
  },
  {
    name: 'Yellow',
    value: '--yellow-color-'
  },
  {
    name: 'White',
    value: '--white-color-'
  }
];

export const TRUE_DEFAULT = 'true';
export const FALSE_DEFAULT = 'false';

export const TITLE_DEFAULT = 'Trivia';
export const COLOR_DEFAULT = '--blue-color-';
export const TEN = 10;
export const ZERO = 0;

export const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
export const EXCEL_EXTENSION = '.xlsx';

export function addedSuccessfully(value: string): string {
  return `${value} added successfully`;
}

export function setAll(array, value) {
  var i, n = array.length;
  for (i = 0; i < n; ++i) {
      array[i] = value;
  }
}