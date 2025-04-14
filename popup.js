document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('toggleRedirect');
    const status = document.getElementById('status');

    chrome.storage.sync.get(['redirectEnabled'], (data) => {
        const isEnabled = data.redirectEnabled !== false;
        toggle.checked = isEnabled;
        status.textContent = isEnabled ? 'Enabled' : 'Disabled';
        status.style.color = isEnabled ? '#4CAF50' : '#e53935';
    });
  
    toggle.addEventListener('change', () => {
        const isEnabled = toggle.checked;
        chrome.storage.sync.set({ redirectEnabled: isEnabled }, () => {
            status.textContent = isEnabled ? 'Enabled' : 'Disabled';
            status.style.color = isEnabled ? '#4CAF50' : '#e53935';
        });
    });
});