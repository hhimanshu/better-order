import React from "react";
import ReactDOM from "react-dom";
import NutritionLink from "./NutritionLink";

const observer = new MutationObserver((mutationsList) => {
  for (const mutation of mutationsList) {
    if (mutation.addedNodes.length) {
      const buttons = document.querySelectorAll('[data-testid="quick-add-button"]');
      buttons.forEach((button) => {
        const menuItemElement = button
          .closest('[data-anchor-id="MenuItem"]')
          ?.querySelector('[data-telemetry-id="storeMenuItem.title"]');
        const menuItem = menuItemElement?.textContent || "";

        const menuDescriptionElement = button
          .closest('[data-anchor-id="MenuItem"]')
          ?.querySelector('[data-telemetry-id="storeMenuItem.subtitle"]');
        const menuDescription = menuDescriptionElement?.textContent || "";

        const newDiv = document.createElement("div");
        if (!button.previousSibling || button.previousSibling.textContent !== "Nutrition") {
          const link = document.createElement("a");
          link.href = "#";
          link.textContent = "Nutrition";
          link.className = "text-blue-500 underline"; // Add Tailwind CSS classes here
          link.addEventListener("click", (e) => {
            e.preventDefault();
            const root = document.createElement("div");
            root.id = "root";

            ReactDOM.render(
              <NutritionLink menuItem={menuItem} menuDescription={menuDescription} />,
              root
            );
          });
          if (button.parentNode) {
            newDiv.appendChild(link);
            button.parentNode.insertBefore(newDiv, button);
          }
        }
      });
    }
  }
});

observer.observe(document.body, { childList: true, subtree: true });
