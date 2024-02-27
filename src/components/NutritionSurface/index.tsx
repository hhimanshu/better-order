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
    </div>
  );
};

export default NutritionSurface;
