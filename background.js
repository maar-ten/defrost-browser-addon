browser.pageAction.onClicked.addListener(tab => {
    const hostname = new URL(tab.url).hostname.toLocaleLowerCase();
    if (hostname.includes('facebook')) {
        unfreezeFacebook();
    } else if (hostname.includes('instagram')) {
        unfreezeInstagram();
    } else if (hostname.includes('pintereset')) {
        unfreezePintereset();
    }
});

function unfreezeFacebook() {
    const NODE_SELECTOR = "#pagelet_growth_expanding_cta";
    const REMOVE_NODE = `document.querySelector("${NODE_SELECTOR}").remove();`;

    browser.tabs.executeScript({
        code: REMOVE_NODE
    });
}

function unfreezeInstagram() {
    const CSS = "body { overflow-y: scroll !important }";
    const NODE_SELECTOR = "div[role='presentation']";
    const REMOVE_NODE = `document.querySelector("${NODE_SELECTOR}").remove();`;

    browser.tabs.insertCSS({ code: CSS });
    browser.tabs.executeScript({
        code: REMOVE_NODE
    });
}

function unfreezePintereset() {
    const NODE_SELECTOR = "div[data-test-id='giftWrap']";
    const REMOVE_NODE = `document.querySelector("${NODE_SELECTOR}").remove();`;

    browser.tabs.executeScript({
        code: REMOVE_NODE
    });
}
