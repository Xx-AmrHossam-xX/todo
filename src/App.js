import logo from "./logo.svg";
import "antd/dist/antd.css";
import "./App.css";
import { Button } from "antd";
//Redux
import { useDispatch, shallowEqual, useSelector } from "react-redux";
import { changeAmount } from "./redux/actions/counterAmountActions";

function App (){
  //Use Selector
  const { amount } = useSelector(
    state => ({
      amount: state.countAmount,
    }),
    shallowEqual
  );
  // DISPATCH
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button type="primary" onClick={() => dispatch(changeAmount(10))}>
          Primary Button
        </Button>
        <div>{amount}</div>
      </header>
    </div>
  );
}

export default App;
