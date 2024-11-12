const btn = document.querySelector(".btn") as HTMLButtonElement;
const skillsList = document.querySelector("#skillsList") as HTMLElement;

btn?.addEventListener("click", () => {
    if(skillsList.style.display === "none" || !skillsList.style.display){
        skillsList.style.display = "block";
    }
    else{
        skillsList.style.display = "none";
    }
});





