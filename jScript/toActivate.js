window.addEventListener("DOMContentLoaded", function () {
    for (let button of document.getElementsByClassName("inter")) {
        button.addEventListener("mouseover", highlight);
        button.addEventListener("mouseout", unHighlight);
    }

});
function highlight(event) {
    event.target.style = "box-shadow: 0 0 10px blue;"
}
function unHighlight(event) {
    event.target.style = "box-shadow: none;"
}
let sideBar = {
    Home: "Click on the links to see more",
    Projects: "These are my favorite projects I've worked on over the years",
    About_Me: "Now you know everything there is to know",
    HomeTown: "This is the best place on Earth!!"
}
let shown = "Home";
function linkClicked(ev) {
    let changing = ev.target;
    if (changing.className != "inter") {
        changing = changing.parentNode;

    }
    for (let toShow of document.getElementsByClassName(shown)) {
        toShow.style.display = "none";
    }
    for (let toShow of document.getElementsByClassName(changing.innerHTML.split(" ")[0])) {
        toShow.style.display = "flex";
    }
    document.getElementById("related-content").innerHTML = sideBar[changing.innerHTML.split(" ")[0]];
    document.getElementById("title").innerHTML = "<h1 style=\"padding-left:50px;\">" + changing.innerHTML + "</h1>"
    let temp = changing.innerHTML.split(" ")[0];
    if (shown == "Home") {
        changing.innerHTML = shown + " <i class='fas fa-home'></i>";
    }
    else if (shown == "HomeTown") {
        changing.innerHTML = shown + " <i class='fas fa-shapes'></i>";
    }
    else if (shown == "About_Me") {
        changing.innerHTML = shown + " <i class='fas fa-snowman'></i>";
    }
    else {
        changing.innerHTML = shown + " <i class='fas fa-robot'></i>";
    }
    shown = temp;

}
