import TOGGLE_DRAWER from "./actionTypes";

const defaultVal = {
  status: false,
};

function toggleDrawer (state = defaultVal, action){
  switch (action.type) {
    case TOGGLE_DRAWER:
      return {
        status: !state.status,
      };
    default:
      return state;
  }
}
export default toggleDrawer;
