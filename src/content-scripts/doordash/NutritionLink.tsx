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
  const storeName = window.location.pathname.split("/")[2];
  console.log(`storeName: ${storeName}`);

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

  useEffect(() => {
    if(!(menuItem || menuDescription)) {
      console.log("No menu item or menu description. Cannot find nutrition information.");
      // we may also show a banner or something to indicate that we couldn't find nutrition information
      return;
    }
  }, [menuItem, menuDescription]);

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
