function updateNumTabs(tabs) {
    let numTabs = tabs.length;
    document.getElementById("numTabs").innerHTML = numTabs;
    document.getElementById("numTabsMsg").innerHTML = getTabMessage(numTabs);
    document.getElementById("sprite").src = getImage(numTabs);
}

function getTabMessage(numTabs) {
    if (numTabs < 1) {
        return "Perfect!";
    } else if (numTabs < 5) {
        return "Wowzer!";
    } else if (numTabs < 10) {
        return "Doing great!";
    } else if (numTabs < 15) {
        return "Feeling sick...";
    } else if (numTabs < 20) {
        return "hueuegreghheghe.....";
    } else {
        return "You killed me. I hope you're happy."
    }
}

function getImage(numTabs) {
    if (numTabs < 20) {
        return "tab-companion-64x.png"
    } else {
        return "grave-128x.png"
    }
}

async function getNumTabs() {
    let numTabs = 0;
    chrome.tabs.query({}).then(updateNumTabs);
    return numTabs;
}

chrome.tabs.onRemoved.addListener(function(tabid, removed) {
    getNumTabs();
})

chrome.tabs.onCreated.addListener(function(tabid) {
    getNumTabs();
})

chrome.tabs.onUpdated.addListener(function() {
    getNumTabs();
})
