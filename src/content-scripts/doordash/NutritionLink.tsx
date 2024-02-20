// NutritionDialog.tsx
import React from "react";
import { NuritionDialog } from "../../components/NutritionDialog";

const NutritionLink: React.FC = () => {
  // return <h1 className="text-3xl font-bold underline">Hello Boy!</h1>;
  return <NuritionDialog open={true} setOpen={() => {}} />;
};

export default NutritionLink;
