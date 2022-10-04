import { CategoriesObjectType, MarksObject } from "../../providers/data/types";

export interface ButtonListProps {
  data: CategoriesObjectType[] | MarksObject[] | [];
  onClick: Function;
}
