import { component } from './app';

function renderContent(content) {
    const contentElement = document.querySelector('.content');
    contentElement.innerHTML = '';
    contentElement.appendChild(content);
}


function loadTabContent(tabId) {
    // Use simple routing to load content based on tabId
    console.log('Loading tab content for:', tabId);
    let content;

    switch (tabId) {
        case 'home':
            content = component();
            break;
        case 'contact':
            // Fetch and load the contact page
            content = fetch('contact.html')
                .then(response => response.text())
                .then(html => {
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(html, 'text/html');
                    return doc.querySelector('.content');
                });
            break;
        case 'menu':
            // Fetch and load the menu page
            content = fetch('menu.html')
                .then(response => response.text())
                .then(html => {
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(html, 'text/html');
                    return doc.querySelector('.content');
                });
            break;
        default:
            content = component();
    }

    return Promise.resolve(content);
}


document.addEventListener('DOMContentLoaded', function () {
    loadTabContent('home').then((initialContent) => {
        renderContent(initialContent);

        // Add event listeners for tab navigation
        const tabs = document.querySelectorAll('.tab');
        tabs.forEach((tab) => {
            tab.addEventListener('click', function () {
                const tabId = this.dataset.tabId;
                loadTabContent(tabId).then((loadedContent) => {
                    console.log('Loaded content:', loadedContent);
                    renderContent(loadedContent);
                });
            });
        });
    });
});
