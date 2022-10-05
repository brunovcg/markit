import { ICategoriesObject, IMarksObject } from "../../providers/data/types";

export interface ButtonListProps {
  data: ICategoriesObject[] | IMarksObject[] | [];
  onClick: Function;
  selectedId?: number | string;
}
