import { useState } from "react";
import { nutrients } from "../data";
// import { isMobile } from "react-device-detect";
import useScreenSize from "../../useScreenSize";
const OverviewNutrients = () => {
  const isMobile = useScreenSize();
  const [selectedNutrientIndex, setSelectedNutrientIndex] = useState(0);

  const handleNutrientClick = (index: number) => {
    setSelectedNutrientIndex(index);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          gap: "27px",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
          flexWrap: isMobile ? "wrap" : "nowrap",
        }}
      >
        {nutrients.map((nutrient, index) => (
          <div
            key={index}
            onClick={() => handleNutrientClick(index)}
            style={{
              maxWidth: "100%",
              padding: "10px",
              width: "131px",
              textAlign: "center",
              borderRadius: "4px",
              backgroundColor: selectedNutrientIndex === index ? "#334155" : "transparent",
              color: selectedNutrientIndex === index ? "white" : "initial",
              border: selectedNutrientIndex !== index ? "1px solid #606c77" : "none",
              cursor: "pointer",
            }}
          >
            <h1 style={{ fontSize: "20px", fontWeight: 600, lineHeight: "28px", marginTop: "2px" }}>
              {nutrient.name}
            </h1>
            <h3
              style={{ fontSize: "48px", fontWeight: 600, lineHeight: "48px", marginTop: "10px" }}
            >
              {nutrient.amount}
            </h3>
            <h6
              style={{
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "48px",
                marginTop: "-2px",
                color: "#64748B",
              }}
            >
              {nutrient.unit}
            </h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OverviewNutrients;
