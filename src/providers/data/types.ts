import { ReactNode } from "react";
export interface Props {
  children: ReactNode;
}

export interface IEntries {
  id: number;
  date: Date;
}

export interface MarksObject {
  id: number;
  color: string;
  name: string;
  entries: IEntries[] | [];
}

export interface CategoriesObjectType {
  id: number;
  color: string;
  name: string;
  marks: MarksObject[] | [];
}

export interface Data {
  data: CategoriesObjectType[];
}
