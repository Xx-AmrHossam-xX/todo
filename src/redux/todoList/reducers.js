import { ADD, CHANGE_STATUS, RESET_CHANGED_ID } from "./actionTypes";

const defaultVal = {
  list: [],
  changedId: "",
};

export default function reducer (state = defaultVal, action){
  switch (action.type) {
    case ADD:
      return {
        ...state,
        list: [ ...state.list, action.task ],
      };
    case CHANGE_STATUS:
      const newList = state.list;
      for (let i = 0; i < newList.length; i++) {
        if (action.id === newList[i].id) {
          newList[i].status = action.value;
          break;
        }
      }
      return {
        ...state,
        list: newList,
        changedId: action.id,
      };
    case RESET_CHANGED_ID:
      return {
        ...state,
        changedId: "",
      };
    default:
      return state;
  }
}
