// const toggleSkillsButton = document.getElementById('toggle-skills-btn') as HTMLButtonElement;
// const skillsList = document.getElementById('skills-list') as HTMLUListElement;
// toggleSkillsButton.addEventListener('click', () => {
//     if(skillsList.style.display === 'none' || !skillsList.style.display){
//         skillsList.style.display = 'block';
//     } else {
//         skillsList.style.display = 'none';
//     }
// });
var btn = document.querySelector(".btn");
var skillsList = document.querySelector(".skills");
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", function () {
    if (skillsList.style.display === "none" || !skillsList.style.display) {
        skillsList.style.display = "block";
    }
    else {
        skillsList.style.display = "none";
    }
});
