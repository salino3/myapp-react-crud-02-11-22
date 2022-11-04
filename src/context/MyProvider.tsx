import React, { useReducer } from 'react';
import { GlobalContext } from "./GlobalContext";
import {  All } from './Interfaces';
import MyReducer from './MyReducer';

interface Props {
    children: JSX.Element | JSX.Element[]
}


const MyProvider = ({children}: Props) => {

    const initialState: All = {
      clientes: [
       {
         id: 1,
        cliente: "Aldo"
       },
       { 
        id: 2,
        cliente: "Mario"
       } 
         ],
      tasks: [
        {
          id: 1,
          title: "title one",
          description: "some desc",
          done: true,
        },
        {
          id: 2,
          title: "title two",
          description: "some else",
          done: true,
        },
      ],
    };
    
 const [state, dispatch] = useReducer(MyReducer, initialState);

 const addCliente = (cliente: any) =>
   dispatch({
     type: "ADD_CLIENTE",
     payload: { ...cliente, id: state.clientes.length + 1},
   });

 const addTask = (task: any) =>
   dispatch({
     type: "ADD_TASK",
     payload: { ...task, id: state.tasks.length + 1, done: false },
   });

  const deleteAlls = () =>
    dispatch({
      type: "DELETE_ALLS",
      payload: {},
    });

 const deleteTask = (id: number) =>
   dispatch({
     type: "DELETE_TASK",
     payload: id,
   });

    const toggleTask = (id: number) =>
      dispatch({
        type: "TOGGLE_TASK",
        payload: id,
      });


  return (
    <>
      <GlobalContext.Provider
        value={{
          addTask,
          deleteAlls,
          deleteTask,
          addCliente,
          toggleTask,
          state,
        }}
      >
        {children}
      </GlobalContext.Provider>
    </>
  );
}

export default MyProvider