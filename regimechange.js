var redirectCountry = "RU";
var otherSite = "https://outdatedregime.github.io/change/index.html";
fetch("https://ipapi.co/country/")
    .then((response) => {
        if (response.ok) {
            return response.text();
        } else {
            throw new Error("HTTP Error " + response.status);
        }
    })
    .then((country) => {
        if (country == redirectCountry) {
            // Action needed - redirecting visitor to warning about outdated regime.
            console.log("Redirecting");
            window.location = otherSite;
        }
    })
    .catch(function (error) {
        // Network error
        // Script blocked by browser extension
        // 429 error (too many requests)
        console.log(error);
});