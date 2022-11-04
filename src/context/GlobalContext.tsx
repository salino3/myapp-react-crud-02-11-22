import { createContext } from "react";
import {  All } from "./Interfaces";



 interface myContextProps {
   state: All;
   addCliente: (cliente: any) => void;
   //
   addTask: (task: any) => void;
   toggleTask: (id: number) => void;
   deleteAlls: () => void;
   deleteTask: (id: number) => void;
 }
    

export const GlobalContext = createContext<myContextProps>({} as myContextProps);




