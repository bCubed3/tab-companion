console.log("This is a popup !");
async function getNumTabs() {
    let numTabs = 0;
    chrome.tabs.query({}).then((tabs) => alert(tabs.length));
    return numTabs;
}

//getNumTabs().then((tabs) => alert(tabs.length))
getNumTabs();
//console.log(numTabs);