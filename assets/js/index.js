// Toggle the menu bar when it's clicked

function openNav() {
    document.querySelector("#overlay").style.height = "auto";
}

function closeNav() {
    document.querySelector("#overlay").style.height = "0%";
}

// Close the menu when the menu links are clicked

//document.querySelector(".homeMenu").addEventListener("click", function () {
//	document.querySelector("#overlay").style.height = "0%";
//});

document.querySelector(".aboutMenu").addEventListener("click", function () {
    document.querySelector("#overlay").style.height = "0%";
});

document.querySelector(".studyMenu").addEventListener("click", function () {
    document.querySelector("#overlay").style.height = "0%";
});

document.querySelector(".workMenu").addEventListener("click", function () {
    document.querySelector("#overlay").style.height = "0%";
});

document.querySelector(".skillsMenu").addEventListener("click", function () {
    document.querySelector("#overlay").style.height = "0%";
});

document.querySelector(".portfolioMenu").addEventListener("click", function () {
    document.querySelector("#overlay").style.height = "0%";
});

document.querySelector(".contactMenu").addEventListener("click", function () {
    document.querySelector("#overlay").style.height = "0%";
});