import React, { useState } from "react";
import "./index.less";
import { Button } from "antd";
import About from "./about";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div id="div1">
      <p>You clicked {count} times hush</p>
      <Button type="primary" onClick={() => setCount(count + 1)}>
        Click me
      </Button>
      <About />
    </div>
  );
};

export default App;
