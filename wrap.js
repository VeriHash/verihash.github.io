// Reference: https://codepen.io/tropix126/pen/poEwpVd

const changeme = document.getElementById("header_container");
const trigger = document.getElementById("navigation");

function detect_wrap(changeme, trigger) {
    if (trigger.offsetTop > changeme.offsetTop) {
        changeme.classList.add("wrapped");
    } else {
        changeme.classList.remove("wrapped");
    }
}

window.addEventListener("DOMContentLoaded", e => {
    detect_wrap(changeme, trigger);
});

window.addEventListener("resize", e => {
    detect_wrap(changeme, trigger);
});

window.addEventListener("load", e => {
    detect_wrap(changeme, trigger);
});
