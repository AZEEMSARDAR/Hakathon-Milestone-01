var btn = document.querySelector(".btn");
var skillsList = document.querySelector("#skillsList");
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", function () {
    if (skillsList.style.display === "none" || !skillsList.style.display) {
        skillsList.style.display = "block";
    }
    else {
        skillsList.style.display = "none";
    }
});
