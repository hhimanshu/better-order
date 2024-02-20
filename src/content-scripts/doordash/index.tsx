// index.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import NutritionDialog from './NutritionDialog';

const observer = new MutationObserver((mutationsList, observer) => {
    for(let mutation of mutationsList) {
        if(mutation.addedNodes.length){
            const buttons = document.querySelectorAll('[data-testid="quick-add-button"]');
            buttons.forEach((button) => {
                const newDiv = document.createElement('div');
                if (!button.previousSibling || button.previousSibling.textContent !== 'Nutrition') {
                    const link = document.createElement('a');
                    link.href = '#';
                    link.textContent = 'Nutrition';
                    link.className = 'text-blue-500 underline'; // Add Tailwind CSS classes here
                    link.addEventListener('click', (e) => {
                        e.preventDefault();
                        ReactDOM.render(<NutritionDialog />, document.body);
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