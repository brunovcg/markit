export interface ITimeEntry {
  date: Date;
  editable: boolean;
  entryId: string | number;
  categoryId: string | number;
  markId: string | number;
}

export interface ITimeEntriesStyles {
  showConfirm: boolean;
}
