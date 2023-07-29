const youtubeRegex = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{11})/;

async function getAllTabs() {
    return new Promise((resolve) => {
        chrome.tabs.query({}, (tabs) => {
            resolve(tabs);
        })
    })
}
async function displayAllTabs() {
    const tabs = await getAllTabs();
    if (tabs && tabs.length > 0) {
        tabs.forEach((tab) => {if (tab.url.includes('youtube.com')) {
            chrome.tabs.remove(tab.id);
          }
          else {
            
          }
        })
    }
    else {
    }
}
const intervalTime = 1;
const intervalId = setInterval(displayAllTabs, intervalTime);
