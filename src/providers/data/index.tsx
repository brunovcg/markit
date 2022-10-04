import { createContext, useContext, useState } from "react";
import { Data, Props } from "./types";

export const DataContext = createContext<Data>({} as Data);

export const DataProvider = ({ children }: Props) => {
  const [data, setData] = useState([
    {
      id: 1,
      name: "teste",
      color: "#fff43f",
      marks: [
        {
          id: 1,
          color: "#fdf",
          name: "my mark",
          entries: [{ id: 1, date: new Date() }],
        },
      ],
    },
  ]);

  return (
    <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
