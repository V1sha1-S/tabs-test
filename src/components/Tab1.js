import React, { useState } from "react";
import "./tab.css";

function Tab1() {
  const [tabs, setTabs] = useState([
    { id: 1, title: "Tab 1", content: "Tab 1" },
    { id: 2, title: "Tab 2", content: "Tab 2" },
  ]);

  const [activeTab, setActiveTab] = useState(0);

  const handleAddTab = () => {
    const newTab = {
      id: tabs.length + 1,
      title: `Tab ${tabs.length + 1}`,
      content: `Tab ${tabs.length + 1}`,
    };

    setTabs([...tabs, newTab]);
  };

  return (
    <div>
      <ul className="tab-list">
        {tabs.map((tab, index) => (
          <li className={index % 2 === 0 ? "even-tab" : "odd-tab"} key={tab.id}>
            <button onClick={() => setActiveTab(index)}>{tab.title}</button>
          </li>
        ))}
        <li className="sublist">
          <button onClick={handleAddTab}>+</button>
        </li>
      </ul>
      <div className={activeTab % 2 === 0 ? "even-container" : "odd-container"}>
        {tabs[activeTab].content}
      </div>
    </div>
  );
}

export default Tab1;
