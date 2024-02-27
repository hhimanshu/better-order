/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import useScreenSize from "../../useScreenSize";

interface Tab {
  name: string;
  content: string;
}

const OverviewInfo: React.FC<{ overviewInformation: Tab[] }> = ({ overviewInformation }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const isMobile = useScreenSize();

  const handleTabClick = (index: number) => {
    setActiveTabIndex(index);
  };

  const tabButtonStyles: any = (isActive: boolean) => ({
    padding: "8px 16px",
    fontFamily: "inherit",
    fontWeight: 500,
    fontSize: "14px",
    lineHeight: "24px",
    textAlign: "center",
    cursor: "pointer",
    backgroundColor: isActive ? "#94A3B8" : "#F8FAFC",
    color: isActive ? "white" : "initial",
  });

  return (
    <div
      style={{
        marginTop: "4px",
        backgroundColor: "white",
        display: "flex",
        gap: "5px",
        flexDirection: isMobile ? "column" : "row",
      }}
    >
      <div
        style={{
          width: isMobile ? "100%" : "25%",
          display: "flex",
          flexDirection: "column",
          gap: "1px",
        }}
      >
        {overviewInformation.map((tab, index) => (
          <div
            key={index}
            style={tabButtonStyles(activeTabIndex === index)}
            onClick={() => handleTabClick(index)}
          >
            {tab.name}
          </div>
        ))}
      </div>
      <div
        style={{
          width: isMobile ? "100%" : "75%",
          backgroundColor: "#F8FAFC",
          padding: "16px",
          fontFamily: "inherit",
          fontWeight: 400,
          fontSize: "12px",
          lineHeight: "24px",
          textAlign: "start",
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
        }}
      >
        <p>{overviewInformation[activeTabIndex].content}</p>
      </div>
    </div>
  );
};

export default OverviewInfo;
