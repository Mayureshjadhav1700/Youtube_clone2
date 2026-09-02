import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import MainBox from "../Components/MainBox";
import Style from "../CSS/App.module.css";

const Home = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <div className={Style.layout}>
      <Navbar toggle={toggle} setToggle={setToggle} />

      <div className={Style.mainLayout}>
        <Sidebar toggle={toggle} />
        <MainBox />
      </div>
    </div>
  );
};

export default Home;