import { useState, useRef } from "react";
// libraries
import {
  Drawer,
  Form,
  Button,
  Input,
  Select,
  DatePicker,
  Space,
  Row,
  Radio,
} from "antd";
import uuid from "react-uuid";
//Redux
import { useDispatch, shallowEqual, useSelector } from "react-redux";
import toggleDrawer from "../../redux/addDrawer/actions";
import { add } from "../../redux/todoList/actions";

const { Option } = Select;
/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
};

function AddDrawer (){
  //Use Selector
  const { status } = useSelector(
    state => ({
      status: state.toggleDrawer.status,
    }),
    shallowEqual
  );
  // DISPATCH
  const dispatch = useDispatch();
  // Ref
  const formRef = useRef();
  // Actions
  const [ startDate, setStartDate ] = useState();
  function startDateChange (date, dateString){
    setStartDate(dateString);
  }
  const [ endDate, setEndDate ] = useState("2090-12-09");
  function endDateChange (date, dateString){
    setEndDate(dateString);
  }
  const onFinish = values => {
    dispatch(add({ ...values, id: uuid() }));
    formRef.current.resetFields();
    dispatch(toggleDrawer());
  };

  return (
    <Drawer
      title="Create a new task"
      onClose={() => dispatch(toggleDrawer())}
      visible={status}
      bodyStyle={{ paddingBottom: 10 }}
    >
      <Form
        labelCol={{
          span: 7,
        }}
        wrapperCol={{
          span: 24,
        }}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
        ref={formRef}
      >
        <Form.Item name="title" label="Title" rules={[ { required: true } ]}>
          <Input placeholder="Please enter title" />
        </Form.Item>
        <Form.Item
          name="assignee"
          label="Assignee"
          rules={[ { required: true } ]}
        >
          <Select placeholder="Please choose the assignee">
            <Option value="jack">Jack Ma</Option>
            <Option value="tom">Tom Liu</Option>
          </Select>
        </Form.Item>
        <Form.Item name="status" label="Status" rules={[ { required: true } ]}>
          <Select placeholder="Please choose a status">
            <Option value={2}>Todo</Option>
            <Option value={1}>InProgress</Option>
            <Option value={0}>Done</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="priority"
          label="Priority"
          rules={[ { required: true } ]}
        >
          <Radio.Group>
            <Radio value={2}>High</Radio>
            <Radio value={1}>Medium</Radio>
            <Radio value={0}>Low</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name="from"
          label="From"
          rules={[ { required: true, message: "Please choose a start date" } ]}
        >
          <DatePicker
            onChange={startDateChange}
            getPopupContainer={trigger => trigger.parentElement}
            disabledDate={d => !d || !d.isSameOrBefore(endDate)}
          />
        </Form.Item>
        <Form.Item
          name="to"
          label="To"
          rules={[ { required: true, message: "Please choose an end date" } ]}
        >
          <DatePicker
            onChange={endDateChange}
            getPopupContainer={trigger => trigger.parentElement}
            disabledDate={d => !d || !d.isSameOrAfter(startDate)}
          />
        </Form.Item>
        <Form.Item
          name="description"
          label="Description"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input.TextArea rows={6} placeholder="please enter description" />
        </Form.Item>
        <Row justify="end">
          <Space>
            <Button onClick={() => dispatch(toggleDrawer())}>Cancel</Button>
            <Button type="primary" htmlType="submit">
              Create
            </Button>
          </Space>
        </Row>
      </Form>
    </Drawer>
  );
}
export default AddDrawer;
