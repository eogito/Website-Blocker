const youtubeRegex = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{11})/;
document.addEventListener("DOMContentLoaded", () => {
    function buttonClickHandler() {
        alert("Button clicked!");
        // Add functionality
    }
    
    document.getElementById("amogus").addEventListener("click", buttonClickHandler);
});
async function getAllTabs() {
    return new Promise((resolve) => {
        chrome.tabs.query({}, (tabs) => {
            resolve(tabs);
        })
    })
}
async function displayAllTabs() {
    const tabs = await getAllTabs();
    const tabNameDiv = document.getElementById("tabName");
    if (tabs && tabs.length > 0) {
        tabs.forEach((tab) => {if (tab.url.includes('youtube.com')) {
            chrome.tabs.remove(tab.id);
          }
            const newListItem = document.createElement("li");
            const responseEndDate = new Date();
            newListItem.textContent = tab.title + responseEndDate;
            tabNameDiv.append(newListItem);
        })
    }
    else {
        tabNameDiv.textContent = "No open tabs";
    }
}


const intervalTime = 1000;
const intervalId = setInterval(displayAllTabs, intervalTime);
