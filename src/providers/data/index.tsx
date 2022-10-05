import { createContext, useContext, useEffect, useState } from "react";
import {
  ICategoriesObject,
  IData,
  ITimeEntriesObject,
  IMarksObject,
  Props,
} from "./types";

import useFirebase from "../../firebase";

import { toast } from "react-toastify";

export const DataContext = createContext<IData>({} as IData);
export const DataProvider = ({ children }: Props) => {
  const [data, setData] = useState<ICategoriesObject[]>([]);

  const { writeFirebase, getFirebase } = useFirebase(setData);

  const createCategory = (payload: ICategoriesObject) => {
    const newData = [payload, ...data];
    setData(newData);
    writeFirebase(newData);
    toast.success("Categoria criada");
  };

  const deleteCategory = (categoryId: string | number) => {
    const newData = data.filter((category) => category.id !== categoryId);
    setData(newData);
    writeFirebase(newData);
    toast.success("Categoria deletada");
  };

  const createMark = (categoryId: string | number, payload: IMarksObject) => {
    const newData = [...data];
    const categoryIndex = newData.findIndex(
      (category) => category.id === categoryId
    );
    newData[categoryIndex].marks = [payload, ...newData[categoryIndex].marks];
    setData(newData);
    writeFirebase(newData);
    toast.success("Mark criado");
  };

  const deleteMark = (categoryId: string | number, markId: string | number) => {
    const newData = [...data];

    const categoryIndex = newData.findIndex(
      (category) => category.id === categoryId
    );

    newData[categoryIndex].marks = newData[categoryIndex].marks.filter(
      (mark) => mark.id !== markId
    );

    setData(newData);
    writeFirebase(newData);
    toast.success("Mark deletado");
  };

  const createTimeEntry = (
    categoryId: string | number,
    markId: string | number,
    payload: ITimeEntriesObject
  ) => {
    const newData = [...data];
    const categoryIndex = newData.findIndex(
      (category) => category.id === categoryId
    );

    const markIndex = newData[categoryIndex].marks.findIndex(
      (mark) => mark.id === markId
    );

    newData[categoryIndex].marks[markIndex].entries = [
      payload,
      ...(newData[categoryIndex].marks[markIndex]?.entries || []),
    ];

    setData(newData);
    writeFirebase(newData);
    toast.success("Tempo criado");
  };

  const deleteTimeEntry = (
    categoryId: string | number,
    markId: string | number,
    entryId: string | number
  ) => {
    const newData = [...data];
    const categoryIndex = newData.findIndex(
      (category) => category.id === categoryId
    );
    const markIndex = newData[categoryIndex].marks.findIndex(
      (mark) => mark.id === markId
    );

    newData[categoryIndex].marks[markIndex].entries = newData[
      categoryIndex
    ].marks[markIndex].entries.filter((entry) => entry.id !== entryId);

    setData(newData);
    writeFirebase(newData);
    toast.success("Tempo deletado");
  };

  useEffect(() => {
    getFirebase();
  }, []);

  return (
    <DataContext.Provider
      value={{
        data,
        createCategory,
        deleteCategory,
        createMark,
        deleteMark,
        createTimeEntry,
        deleteTimeEntry,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
