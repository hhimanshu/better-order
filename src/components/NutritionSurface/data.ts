import { Nutrient, OverviewInformation } from "./Overview";

export const nutrients: Nutrient[] = [
  {
    name: "CALORIES",
    amount: "323",
    unit: "kcal",
  },
  {
    name: "CARBS",
    amount: "22",
    unit: "grams",
  },
  {
    name: "FATS",
    amount: "12",
    unit: "grams",
  },
  {
    name: "PROTEIN",
    amount: "7",
    unit: "grams",
  },
  {
    name: "FIBER",
    amount: "<1",
    unit: "grams",
  },
  {
    name: "SODIUM",
    amount: "1200",
    unit: "mg",
  },
];

export const overviewInformation: OverviewInformation[] = [
  {
    name: "Energy Source",
    content:
      "Calories from food serve as the primary energy source for the body, fueling daily activities and metabolic processes.",
  },
  {
    name: "Weight Regulation",
    content:
      "Weight regulation involves balancing calorie intake and expenditure to achieve and maintain a healthy body weight. It's influenced by factors such as diet, exercise, and genetics.",
  },
  {
    name: "Metabolism Support",
    content:
      "Metabolism support is crucial for maintaining a healthy weight and energy levels. Eating a balanced diet and staying active can help optimize metabolic processes.",
  },
];

export const contributors = ["Streaky Bacon", "Eggs", "Ciabatta Bread"];
