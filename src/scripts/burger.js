let burger = document.getElementById("burger");

burger.addEventListener("keydown", (event) => {
    let key = event.code;
    if (key == "Escape") {
        burger.removeAttribute("open");
    }
});