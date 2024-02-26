import OverviewInfo from "./OverviewInfo";
import { overviewInformation } from "../data";
import Contributors from "./OverviewContributors";
import Nutrients from "./OverviewNutrients";

export interface Nutrient {
  name: string;
  amount: string;
  unit: string;
}

export interface OverviewInformation {
  name: string;
  content: string;
}

const OverviewContent = () => {
  return (
    <div style={{ position: "relative" }}>
      <Nutrients />
      <div style={{ marginTop: "16px", lineHeight: "28px", fontWeight: 400, fontSize: "12px" }}>
        <h1>
          Calories are a unit of measurement representing the energy content in food. The body
          utilizes calories for various physiological functions and daily activities.
        </h1>
      </div>
      <OverviewInfo overviewInformation={overviewInformation} />
      <Contributors />
    </div>
  );
};

export default OverviewContent;
