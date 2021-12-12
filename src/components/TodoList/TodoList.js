import { useEffect, useState } from "react";
// Libraries
import { Button, Select, Form, Row, Col } from "antd";
//Redux
import { useDispatch, shallowEqual, useSelector } from "react-redux";
import { changeStatus, ResetChangedId } from "../../redux/todoList/actions";
import toggleDrawer from "../../redux/addDrawer/actions";
// Css
import "./TodoList.css";

const { Option } = Select;

function TodoList (){
  // Use Selector
  const { todoList, changedTaskId } = useSelector(
    state => ({
      todoList: state.todoList.list,
      changedTaskId: state.todoList.changedId,
    }),
    shallowEqual
  );
  // DISPATCH
  const dispatch = useDispatch();
  // Constants
  const status = [ "Done", "InProgress", "Todo" ];
  const priority = [ "Low", "Medium", "High" ];
  // Local variables
  const [ list, setList ] = useState([]);
  const [ sortValue, setSortValue ] = useState();
  // Actions
  function changeStatusHandler (id, value){
    dispatch(ResetChangedId());
    dispatch(changeStatus(id, value));
  }
  useEffect(
    () => {
      const newList = [ ...todoList ];
      switch (sortValue) {
        case "priority":
          newList.sort((a, b) => b.priority - a.priority);
          setList(newList);
          break;
        case "status":
          newList.sort((a, b) => b.status - a.status);
          setList(newList);
          break;
        case "date":
          newList.sort((a, b) => a.from.toDate() - b.from.toDate());
          setList(newList);
          break;
        default:
          setList(todoList);
          break;
      }
    },
    [ todoList, sortValue, changedTaskId ]
  );
  return (
    <div>
      <header className="list-header">
        <Form className="sort-form">
          <Form.Item name="sort" label="Sort by ">
            <Select
              allowClear
              placeholder="criteria"
              style={{ width: 120 }}
              value={sortValue}
              onChange={value => setSortValue(value)}
            >
              <Option value={"priority"}>priority</Option>
              <Option value={"status"}>status</Option>
              <Option value={"date"}>date</Option>
            </Select>
          </Form.Item>
        </Form>
        <Button type="primary" onClick={() => dispatch(toggleDrawer())}>
          Add
        </Button>
      </header>
      <ul className="todo-list">
        {list.map(task => (
          <li key={task.id} className="todo-list-item">
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <Row>
              <Col xs={{ span: 12 }} sm={{ span: 8 }}>
                <div> Assignee : {task.assignee}</div>
                <div> Priority : {priority[task.priority]}</div>
                <div> Status : {status[task.status]}</div>
              </Col>
              <Col xs={{ span: 12 }} sm={{ span: 8 }}>
                <div>
                  from :{" "}
                  {task.from.toDate().toLocaleDateString("en-GB", {
                    year: "numeric",
                    month: "numeric",
                    day: "numeric",
                  })}
                </div>
                <div>
                  to :{" "}
                  {task.to.toDate().toLocaleDateString("en-GB", {
                    year: "numeric",
                    month: "numeric",
                    day: "numeric",
                  })}
                </div>
              </Col>
              <Col xs={{ span: 12, offset: 12 }} sm={{ span: 8, offset: 0 }}>
                <Select
                  defaultValue={task.status}
                  style={{ width: 120 }}
                  onChange={value => changeStatusHandler(task.id, value)}
                >
                  <Option value={2}>Todo</Option>
                  <Option value={1}>InProgress</Option>
                  <Option value={0}>Done</Option>
                </Select>
              </Col>
            </Row>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default TodoList;
