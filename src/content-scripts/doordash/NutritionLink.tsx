import React, { useEffect } from "react";
import { NuritionDialog } from "../../components/NutritionDialog";

const rootElementId = 'bettermenu-extension-root';
const NutritionLink: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const onClose = () => {
    setOpen(false);
    // Get the root element of your extension and hide it
    const rootElement = document.getElementById(rootElementId);
    if (rootElement) {
      rootElement.style.display = 'none';
    }
  };

  useEffect(() => {
    setOpen(true);
    const rootElement = document.getElementById(rootElementId);
    if (rootElement) {
      rootElement.style.display = 'block';
    }
  }, []);

  return { open } ? <NuritionDialog open={open} setOpen={onClose} /> : null;
};

export default NutritionLink;