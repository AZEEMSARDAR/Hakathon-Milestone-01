<<<<<<< HEAD
const toggleSkillsButton = document.getElementById('toggle-skills-btn') as HTMLButtonElement;
const skillsList = document.getElementById('skills-list') as HTMLUListElement;

toggleSkillsButton.addEventListener('click', () => {
    if(skillsList.style.display === 'none' || !skillsList.style.display){
        skillsList.style.display = 'block';
    } else {
        skillsList.style.display = 'none';
    }
});
=======
// const toggleSkillsButton = document.getElementById('toggle-skills-btn') as HTMLButtonElement;
// const skillsList = document.getElementById('skills-list') as HTMLUListElement;

// toggleSkillsButton.addEventListener('click', () => {
//     if(skillsList.style.display === 'none' || !skillsList.style.display){
//         skillsList.style.display = 'block';
//     } else {
//         skillsList.style.display = 'none';
//     }
// });




let btn = document.querySelector(".btn") as HTMLButtonElement;
let skillsList = document.querySelector(".skills") as HTMLElement;

btn?.addEventListener("click", () =>{
    if(skillsList.style.display === "none" || !skillsList.style.display){
        skillsList.style.display = "block";
    }
    else{
        skillsList.style.display = "none";
    }
});
>>>>>>> 530cbe0 (resume updated)
