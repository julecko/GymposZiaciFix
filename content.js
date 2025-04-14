chrome.storage.sync.get(['redirectEnabled'], (data) => {
    const redirectEnabled = data.redirectEnabled !== false;
    if (redirectEnabled) {
        document.addEventListener('DOMContentLoaded', () => {
            const links = document.querySelectorAll('a[href*="/ziaci"]');
            links.forEach(link => {
                const url = new URL(link.href);
                if (url.pathname.startsWith("/ziaci")) {
                    url.pathname = url.pathname.replace(/^\/ziaci/, "/studenti");
                    link.href = url.toString();
                }
            });
        });
    }
});