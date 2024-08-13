function handleTabHover(id) {
    const element = document.getElementById(id);
    if (element) {
        element.style.animation = 'pulse 0.5s';
        element.addEventListener('animationend', () => {
            element.style.animation = '';
        });
    }
}

function setActiveTab(tabId) {
    alert('Active tab set to: ' + tabId);
}

document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('mouseenter', () => handleTabHover(tab.id));
});
