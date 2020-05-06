const Facebook = {
    hostname: 'facebook',
    unfreeze: () => {
        const NODE_SELECTOR = "#pagelet_growth_expanding_cta";
        const REMOVE_NODE = `document.querySelector("${NODE_SELECTOR}").remove();`;

        browser.tabs.executeScript({
            code: REMOVE_NODE
        });
    }
};

const Instagram = {
    hostname: 'instagram',
    unfreeze: () => {
        const CSS = "body { overflow-y: scroll !important }";
        const NODE_SELECTOR = "div[role='presentation']";
        const REMOVE_NODE = `document.querySelector("${NODE_SELECTOR}").remove();`;

        browser.tabs.insertCSS({ code: CSS });
        browser.tabs.executeScript({
            code: REMOVE_NODE
        });
    }
};

const Pinterest = {
    hostname: 'pinterest',
    unfreeze: () => {
        const NODE_SELECTOR = "div[data-test-id='giftWrap']";
        const REMOVE_NODE = `document.querySelector("${NODE_SELECTOR}").remove();`;

        browser.tabs.executeScript({
            code: REMOVE_NODE
        });
    }
};

const Ftm = {
    hostname: 'ftm',
    unfreeze: () => {
        const CSS = "body { overflow-y: scroll !important }";
        const NODE_SELECTOR = ".blockingOverlay";
        const REMOVE_NODE = `document.querySelector("${NODE_SELECTOR}").remove();`;

        browser.tabs.insertCSS({ code: CSS });
        browser.tabs.executeScript({
            code: REMOVE_NODE
        });
    }
};

const websites = [Facebook, Instagram, Pinterest, Ftm];
