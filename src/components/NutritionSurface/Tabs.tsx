import React, { useState } from "react";

export interface Tab {
  title: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  onTabSelect: (index: number) => void;
}

const Tabs: React.FC<TabsProps> = ({ tabs, onTabSelect }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const tabContainerStyles = {
    marginTop: "8px",
  };

  const tabStyles = {
    fontFamily: "inherit",
    fontWeight: 500,
    cursor: "pointer",
    fontSize: "14px",
    lineHeight: "20px",
    padding: "8px",
    borderRadius: "4px",
    marginRight: "4px",
    backgroundColor: "transparent",
  };

  const activeTabStyles = {
    ...tabStyles,
    backgroundColor: "#F1F5F9",
  };

  const handleTabClick = (index: number) => {
    setActiveTabIndex(index);
    onTabSelect(index);
  };

  return (
    <div style={tabContainerStyles}>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        {tabs.map((tab, index) => (
          <div
            key={index}
            style={activeTabIndex === index ? activeTabStyles : tabStyles}
            onClick={() => handleTabClick(index)}
          >
            {tab.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
