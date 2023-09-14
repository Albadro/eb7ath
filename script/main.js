// Get the CSS variables
const root = document.documentElement;
const mainColor = getComputedStyle(root).getPropertyValue("--main-color");
const lightColor = getComputedStyle(root).getPropertyValue("--light-color");

// variables
const icons = document.querySelectorAll(".icon");
let text;
let selectedSites = [];
let urls = [];

//functions
function iconClick(siteName) {
    const sitediv = document.getElementById(siteName);
    if (selectedSites.includes(siteName)) {
        sitediv.style.color = lightColor;
        selectedSites = selectedSites.filter((item) => item !== siteName);
    } else {
        sitediv.style.color = mainColor;
        selectedSites.push(siteName);
    }
}

function btnClick() {
    text = document.getElementById("textarea").value;
    if (text.trim() !== "") {
        selectedSites.forEach((site) => {
            if (site === "linkedin") {
                urls.push(
                    `https://www.linkedin.com/search/results/all/?keywords=${encodeURIComponent(
                        text
                    )}`
                );
            } else {
                urls.push(
                    `https://www.${site}.com/search?q=${encodeURIComponent(
                        text
                    )}`
                );
            }
        });
        urls.forEach((url) => {
            window.open(url, "_blank");
        });
        urls = [];
    }
}
