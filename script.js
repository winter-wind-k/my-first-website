console.log("connected")

document.addEventListener("DOMContentLoaded", () => {
const steps = document.querySelectorAll(".story-step");
const visuals = document.querySelectorAll(".visual");
//const is stating a variable, steps is the variable, then after that is the actual code requesting the story steps (i.e. the text Shay wrote about glimmerblob or whatever)

function setActiveVisual(visualNumber) {
    visuals.forEach(v => v.classList.remove("active"));
//taking away the part of OG class name that said active so we can switch around what says "active" and not have to change styling every time

    const target = document.getElementById("visual-" + visualNumber);
    if (target) target.classList.add("active");
}
//saying: show the image number X if it's marked as active in the class list

function onScroll() {
    const marker = window.scrollY + window.innerHeight * 0.5;
//window.scrollY is the height I scrolled, window.innerHeight is how tall the window (i.e. viewport) is, multiplying both by 0.5

    steps.forEach(step => {
        const top = step.offsetTop;
        const bottom = top + step.offsetHeight;
        //no clue about this part. I think it's just compensating for scroll?

        if (marker >= top && marker < bottom) {
            const visualNumber = step.getAttribute("data-visual");
            setActiveVisual(visualNumber);
        }
        //I think... it's saying that once you get to a certain scroll height for each, you gotta switch the picture
    });
}

window.addEventListener("scroll", onScroll);
onScroll(); // run once at the start
});