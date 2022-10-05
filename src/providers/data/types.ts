import { ReactNode } from "react";
export interface Props {
  children: ReactNode;
}

export interface ITimeEntriesObject {
  id: string | number;
  date: string;
}

export interface IMarksObject {
  id: string | number;
  color: string;
  name: string;
  entries: ITimeEntriesObject[] | [];
}

export interface ICategoriesObject {
  id: string | number;
  color: string;
  name: string;
  marks: IMarksObject[] | [];
}

export interface IData {
  data: ICategoriesObject[];
  createCategory: (payload: ICategoriesObject) => void;
  deleteCategory: (categoryId: string | number) => void;
  createMark: (categoryId: string | number, payload: IMarksObject) => void;
  deleteMark: (categoryId: string | number, markId: string) => void;
  createTimeEntry: (
    categoryId: string | number,
    markId: string | number,
    payload: ITimeEntriesObject
  ) => void;
  deleteTimeEntry: (
    categoryId: string | number,
    markId: string | number,
    entryId: string | number
  ) => void;
  getEntries: (
    categoryId: string | number,
    markId: string | number
  ) => ITimeEntriesObject[] | [];
}

export type IdType = string | number;
