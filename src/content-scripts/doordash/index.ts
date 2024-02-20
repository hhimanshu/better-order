console.log(`This is doordash store page!`)

// TypeScript
const observer = new MutationObserver((mutationsList, observer) => {
    // Look through all mutations that just occured
    for(let mutation of mutationsList) {
        // If the addedNodes property has one or more nodes
        if(mutation.addedNodes.length){
            const buttons = document.querySelectorAll('[data-testid="quick-add-button"]');
            buttons.forEach((button) => {
                const newDiv = document.createElement('div');
                if (!button.previousSibling || button.previousSibling.textContent !== 'Nutrition') {
                    const link = document.createElement('a');
                    link.href = 'https://bettermenu.live';
                    link.textContent = 'Nutrition';
                    link.className = 'text-blue-500 underline'; // Add Tailwind CSS classes here
                    if (button.parentNode) {
                        newDiv.appendChild(link);
                        button.parentNode.insertBefore(newDiv, button);
                    }
                }
            });
        }
    }
});

// Start observing the document with the configured parameters
observer.observe(document.body, { childList: true, subtree: true });