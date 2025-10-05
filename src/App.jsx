import { useState } from "react";
import Multi_counter from "./Multi_counter";
import Live_input from "./Live_input";
import User from "./components/User";
import Multi_Condition from "./Multi_Condition";
import Default_props from "./components/Default_props";
import Chilld_Prop from "./components/Child_Prop";
import Dynamic_Props from "./components/Dynamic_Props";
import TextBox from "./components/Text";
import Auth from "./components/Auth";
import Check from "./components/Check";
import Radio from "./components/Radio";
import Dropdown from "./components/Dropdown";
import Table_map from "./components/Table_map";
import Digital from "./components/Digital";
import Counter from "./components/Counter";
import Toggle from "./components/Toggle";
import Live from "./components/Live";


export default function App() {
  const [show, setShow] = useState(true);
  const [display, setDisplay] = useState(true);
  const toggle = () => {
    setDisplay(!display);
  };
  const chup = () => {
    setShow(false);
  };
  const dekha = () => {
    setShow(true);
  };
  return (
    <>
      {/* {show && (
        <h1 className="text-3xl font-bold underline">Function testing </h1>
      )}
      <button onClick={chup}>Hide</button>
      <button onClick={dekha}>Show</button>
      <Multi_counter />
      <Live_input />
      {display ? <User /> : ""}
      <button onClick={toggle}>Toggle</button>
      <Multi_Condition
        users={{
          name: "Vaibhav",
          age: 22,
          city: "Ramnagar",
        }}
      /> */}
      {/* <Default_props name="Vaibhav" />
      <Default_props />
      <Default_props />
      <Chilld_Prop><h1>Chilld_Prop</h1></Chilld_Prop>
      <Dynamic_Props info=" Morning" />
      <TextBox/> */}
      {/* <Auth />
      <Check/> */}
      <div className="main">
        <h1>My Game</h1>

      </div>
      {/* <Radio />
      <Dropdown />
      <Table_map/> */}
      {/* <Digital/> */}
      {/* <Counter/> */}
      {/* <Toggle/> */}
      <Live/>
    </>
  );
}
