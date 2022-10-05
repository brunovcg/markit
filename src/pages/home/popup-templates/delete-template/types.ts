import {
  ICategoriesObject,
  IMarksObject,
} from "../../../../providers/data/types";

export interface IDeleteTemplateProps {
  setShow: Function;
  options: ICategoriesObject[] | IMarksObject[];
  title: string;
  onClick: Function;
}
