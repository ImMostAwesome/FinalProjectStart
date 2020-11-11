window.addEventListener("DOMContentLoaded", function()
{
    for(let button of document.getElementsByClassName("inter")){
        button.addEventListener("mouseover", highlight);
        button.addEventListener("mouseout", unHighlight);
    }
	
});
function highlight(event){
    event.target.style = "box-shadow: 0 0 10px blue;"
}
function unHighlight(event){
    event.target.style = "box-shadow: none;"
}
let sideBar={
    Home:"Click on the links to see more",
    Projects:"These are my favorite projects I've worked on over the years",
    About_Me:"Now you know everything there is to know",
    HomeTown:"This is the best place on Earth!!"
}
let shown = "Home";
function linkClicked(ev){
    for (let toShow of document.getElementsByClassName(shown)) {
        toShow.style.display = "none";
    } 
    for (let toShow of document.getElementsByClassName(ev.target.innerHTML)) {
        toShow.style.display = "flex";
    }
    document.getElementById("related-content").innerHTML = sideBar[ev.target.innerHTML];
    document.getElementById("title").innerHTML = "<h1 style=\"padding-left:50px;\">"+ ev.target.innerHTML +"</h1>"
    let temp = ev.target.innerHTML;
    ev.target.innerHTML = shown;
    shown = temp;
}
