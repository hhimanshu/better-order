import React, { useEffect } from "react";
import { NuritionDialog } from "../../components/NutritionDialog";

export type NutritionLinkProps = {
  menuItem: string;
  menuDescription: string;
};

const rootElementId = "bettermenu-extension-root";
const NutritionLink: React.FC<NutritionLinkProps> = ({
  menuItem,
  menuDescription,
}) => {
  const [open, setOpen] = React.useState(false);

  const onClose = () => {
    setOpen(false);
    // Get the root element of your extension and hide it
    const rootElement = document.getElementById(rootElementId);
    if (rootElement) {
      rootElement.style.display = "none";
    }
  };

  useEffect(() => {
    setOpen(true);
    const rootElement = document.getElementById(rootElementId);
    if (rootElement) {
      rootElement.style.display = "block";
    }
  }, []);

  return { open } ? (
    <NuritionDialog
      open={open}
      setOpen={onClose}
      menuItem={menuItem}
      menuDescription={menuDescription}
    />
  ) : null;
};

export default NutritionLink;
