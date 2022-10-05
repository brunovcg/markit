import { createContext, useContext, useState } from "react";
import {
  ICategoriesObject,
  IData,
  ITimeEntriesObject,
  IMarksObject,
  Props,
} from "./types";

export const DataContext = createContext<IData>({} as IData);

export const DataProvider = ({ children }: Props) => {
  const [data, setData] = useState<ICategoriesObject[]>([
    {
      id: "1",
      name: "teste",
      color: "#fff43f",
      marks: [
        {
          id: "1",
          color: "#fdf",
          name: "my mark",
          entries: [{ id: "1", date: new Date() }],
        },
      ],
    },
    {
      id: "2",
      name: "teste2",
      color: "#fff43f",
      marks: [
        {
          id: "1",
          color: "#fdf",
          name: "my mark",
          entries: [
            { id: "1", date: new Date() },
            { id: "2", date: new Date() },
          ],
        },
        {
          id: "2",
          color: "#ddf",
          name: "my mark2",
          entries: [
            { id: "1", date: new Date() },
            { id: "2", date: new Date() },
          ],
        },
      ],
    },
  ]);

  const createCategory = (payload: ICategoriesObject) => {
    const newData = [payload, ...data];
    setData(newData);
  };

  const deleteCategory = (categoryId: string | number) => {
    const newData = data.filter((category) => category.id !== categoryId);
    setData(newData);
  };

  const createMark = (categoryId: string | number, payload: IMarksObject) => {
    const newData = [...data];
    const categoryIndex = newData.findIndex(
      (category) => category.id === categoryId
    );
    newData[categoryIndex].marks = [payload, ...newData[categoryIndex].marks];
    setData(newData);
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
      ...newData[categoryIndex].marks[markIndex].entries,
    ];

    setData(newData);
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
  };

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
