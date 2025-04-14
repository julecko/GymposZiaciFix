chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ redirectEnabled: true });
});
  
chrome.storage.onChanged.addListener((changes, namespace) => {
    if (changes.redirectEnabled) {
        const isEnabled = changes.redirectEnabled.newValue;
        chrome.declarativeNetRequest.updateEnabledRulesets({
            enableRulesetIds: isEnabled ? ['redirect-ziaci'] : [],
            disableRulesetIds: isEnabled ? [] : ['redirect-ziaci']
        });
    }
});