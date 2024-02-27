import { useState } from "react";
import milk from "../../../assets/milk.png";
import shell from "../../../assets/shell.png";
import nut from "../../../assets/nut.png";
import { contributors } from "../data";
import useScreenSize from "../../useScreenSize";

const AllergensContent = () => {
  const [activeAllergen, setActiveAllergen] = useState(0);
  const isMobile = useScreenSize();

  const allergens = [
    {
      logo: chrome.runtime.getURL(milk),
      content:
        "Milk is a common allergen, and individuals with a milk allergy experience an immune system response to proteins found in milk, such as casein and whey. Symptoms of a milk allergy can range from mild to severe and may include gastrointestinal issues, skin reactions (such as hives or eczema), respiratory problems, and, in extreme cases, anaphylaxis. These symptoms typically manifest shortly after consuming milk or milk products and can necessitate immediate medical attention. Individuals with a suspected milk allergy should consult with a healthcare professional for proper diagnosis and guidance on managing their condition.",
    },
    {
      logo: chrome.runtime.getURL(shell),
      content:
        "Shellfish allergy is one of the most common food allergies in adults. The symptoms can be severe and even life-threatening, so avoiding shellfish and knowing about the ingredients of the food is crucial for those with this allergy.",
    },
    {
      logo: chrome.runtime.getURL(nut),
      content:
        "Nut allergy is one of the most common food allergies, especially in children. It can cause severe allergic reactions, including anaphylaxis. People with nut allergies need to be careful and avoid foods that contain nuts or might have come into contact with them.",
    },
  ];

  const handleTabClick = (index: number) => {
    setActiveAllergen(index);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", marginTop: "20px" }}>
      <div style={{ width: "100%" }}>
        <div style={{ display: "flex", justifyContent: "center" }}></div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "1rem",
            gap: "10px",
          }}
        >
          {allergens.map((allergen, index) => (
            <div
              key={index}
              style={{
                cursor: "pointer",
                // backgroundColor: activeAllergen === index ? "#edf2f7" : "transparent",
              }}
              onClick={() => handleTabClick(index)}
            >
              <img
                src={allergen.logo}
                alt="Allergen Logo"
                style={{
                  width: isMobile ? "100px" : "128px",
                  height: isMobile ? "100px" : "128px",
                  marginBottom: "1rem",
                }}
              />
            </div>
          ))}
        </div>
      </div>
      <div style={{ width: "100%" }}>
        <p
          style={{
            textAlign: "start",
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "24px",
            marginTop: "25px",
          }}
        >
          {allergens[activeAllergen].content}
        </p>
      </div>
      <div
        style={{
          marginTop: "25px",
          textAlign: "start",
          fontWeight: 500,
          fontSize: "14px",
          lineHeight: "28px",
          paddingBottom: "20px",
        }}
      >
        <h1 style={{ fontSize: "14px", lineHeight: "28px", fontWeight: 500 }}>
          Possible Contributors
        </h1>
        <div style={{ marginTop: "10px", display: "flex", gap: "10px" }}>
          {contributors.map((contributor, index) => (
            <button key={index} style={{ padding: "4px 8px", backgroundColor: "#F1F5F9" }}>
              {contributor}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllergensContent;
