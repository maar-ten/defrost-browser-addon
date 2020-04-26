// import data from domains.js 
const WEBSITES = websites;

browser.pageAction.onClicked.addListener(tab => {
    // hostname of the current web page
    const hostname = new URL(tab.url).hostname.toLocaleLowerCase();

    // find first website that matches the hostname
    const predicate = (website) => hostname.includes(website.hostname);
    const activeWebsite = websites.find(website => predicate(website));

    // unfreeze the domain
    activeWebsite.unfreeze();
});
