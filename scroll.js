bannerLogo = document.getElementById('bannerLogo');
// bannerLinks = document.getElementById('bannerLinks');

var scroll_func = function()
{
    var y = window.scrollY;
    if (y >= 50) {
        bannerLogo.className = "logo show"
        // bannerLinks.className = "links show"
    } else {
        bannerLogo.className = "logo hide"
        // bannerLinks.className = "links hide"
    }
};

window.addEventListener("scroll", scroll_func);
