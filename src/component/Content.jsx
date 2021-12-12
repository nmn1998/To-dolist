import React, { useState } from "react";
import Task from "./Task";
import Sidebar from "./Sidebar";

const Content = () => {
  const [selectedTab, nextSelected] = useState("Inbox");

  return (
    <section className="content">
      <Sidebar selectedTab={selectedTab} nextSelected={nextSelected} />
      <Task selectedTab={selectedTab} />
    </section>
  );
};

export default Content;
