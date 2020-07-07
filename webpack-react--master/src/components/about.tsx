import React from "react";
import oimg from "../img/1.jpg";
import { hot } from "react-hot-loader";

const About = hot(module)(() => {
  return (
    <div id="div2">
      hello world hush haha
      <img src={oimg}></img>
    </div>
  );
});

export default About;
