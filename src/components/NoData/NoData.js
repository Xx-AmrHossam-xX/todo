// Libraries
import { Empty, Button } from "antd";
//Redux
import { useDispatch } from "react-redux";
import toggleDrawer from "../../redux/addDrawer/actions";

function NoData (){
  // DISPATCH
  const dispatch = useDispatch();
  return (
    <Empty
      image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
      imageStyle={{
        height: 60,
      }}
      description={<span>There is nothing in the list</span>}
    >
      <Button type="primary" onClick={() => dispatch(toggleDrawer())}>
        Add
      </Button>
    </Empty>
  );
}
export default NoData;
