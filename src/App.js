// Components
import NoData from "./components/NoData/NoData";
import AddDrawer from "./components/AddDrawer/AddDrawer";
import TodoList from "./components/TodoList/TodoList";
//Redux
import { shallowEqual, useSelector } from "react-redux";
// Css
import "antd/dist/antd.css";
import "./App.css";

function App (){
  //Use Selector
  const { todoList } = useSelector(
    state => ({
      todoList: state.todoList.list,
    }),
    shallowEqual
  );

  return (
    <div className="todo-wrapper">
      <h1>Todo</h1>
      {todoList.length === 0 ? <NoData /> : <TodoList />}
      <AddDrawer />
    </div>
  );
}

export default App;
