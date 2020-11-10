window.addEventListener("DOMContentLoaded", function()
{
    for(let button of document.getElementsByClassName("inter")){
        button.addEventListener("mouseover", highlight);
        button.addEventListener("mouseout", unHighlight);
    }
	
});
function highlight(event){
    event.target.style = "box-shadow: 0 0 10px blue;";
}
function unHighlight(event){
    event.target.style = "box-shadow: none";
}
let shown = "Home";
function linkClicked(ev){
    //document.getElementById(shown).style.display="none";
    //document.getElementById(ev.target.innerHTML).style.display = "flex";
    for (let toShow of document.getElementsByClassName(shown)) {
        toShow.style.display = "none";
    } 
    for (let toShow of document.getElementsByClassName(ev.target.innerHTML)) {
        toShow.style.display = "flex";
    }
    document.getElementById("title").innerHTML = "<h1 style=\"padding-left:50px;\">"+ ev.target.innerHTML +"</h1>"
    let temp = ev.target.innerHTML;
    ev.target.innerHTML = shown;
    shown = temp;
}
