import {
  TOGGLE_TASK,
  ADD_CLIENTE,
  DELETE_TASK,
  DELETE_ALLS,
  ADD_TASK,
} from "./Types";

export default function Action(state: any, action: any) {
  const { payload, type } = action;

  switch (type) {

    case ADD_TASK:
      return {
        tasks: [...state.tasks, action.payload],
      };

    case DELETE_ALLS:
      return {
        ...state,
        tasks: "",
      };

    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task: any) => task.id !== action.payload),
      };

    case ADD_CLIENTE:
      return {
        ...state,
        clientes: [...state.clientes, action.payload],
      };
    case TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task: any) =>
          task.id === action.payload ? { ...task, done: !task.done } : task
        ),
      };
    default:
      return state;
  }
}

