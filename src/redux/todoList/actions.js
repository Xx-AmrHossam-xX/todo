import { ADD, CHANGE_STATUS, RESET_CHANGED_ID } from "./actionTypes";

export function add (task){
  return {
    type: ADD,
    task,
  };
}

export function changeStatus (id, value){
  return {
    type: CHANGE_STATUS,
    id,
    value,
  };
}
export function ResetChangedId (){
  return {
    type: RESET_CHANGED_ID,
  };
}
