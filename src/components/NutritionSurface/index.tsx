import React, { useState } from "react";
import Header from "./Header";
import Tabs, { Tab } from "./Tabs";
import OverviewContent from "./Overview";
import AllergensContent from "./AllergensContent/AllergensContent";
import DietsFriendlyContent from "./DietsFriendlyContent/DietsFriendlyContent";
import useScreenSize from "../useScreenSize";
import Footer from "./Overview/OverviewFooter";
const tabs: Tab[] = [
  { title: "Overview", content: <OverviewContent /> },
  { title: "Allergens", content: <AllergensContent /> },
  { title: "Diets Friendly", content: <DietsFriendlyContent /> },
];

interface NutritionSurfaceProps {
  handleClose: () => void;
}

const NutritionSurface: React.FC<NutritionSurfaceProps> = ({ handleClose }) => {
  const isMobile = useScreenSize();
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  const handleTabSelect = (index: number) => {
    setSelectedTabIndex(index);
  };

  return (
    <div style={{ width: isMobile ? "100%" : "890px", margin: "auto" }}>
      <Header handleClose={handleClose} />
      <Tabs tabs={tabs} onTabSelect={handleTabSelect} />
      <div className="mt-8">{tabs[selectedTabIndex].content}</div>
      <Footer />
      <div
        style={{
          backgroundColor: "#F1F5F9",
          padding: "2px 10px",
          width: "100%",
          bottom: 0,
          marginTop: "15px",
          right: 0,
          left: 0,
          display: "flex",
          justifyContent: "start",
          flexDirection: "column",
          textAlign: "start",
          position: "fixed",
        }}
      >
        <h1 style={{ fontWeight: 500, fontSize: "12px", lineHeight: "20px" }}>Disclaimer</h1>
        <p style={{ fontSize: "10px", marginTop: "2px", lineHeight: "15px", marginBottom: "5px" }}>
          Nutritional values, allergens, and diet information are estimates based on the ingredients
          listed on this website. For accurate details, contact the restaurant directly.
        </p>
      </div>
    </div>
  );
};

export default NutritionSurface;
