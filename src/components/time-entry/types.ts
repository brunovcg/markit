export interface ITimeEntry {
  date: string;
  editable: boolean;
  entryId: string | number;
  categoryId: string | number;
  markId: string | number;
}

export interface ITimeEntriesStyles {
  showConfirm: boolean;
}
