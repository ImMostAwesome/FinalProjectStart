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
    if(shown == "VisitorForm"){
        document.getElementById("myTable").display = "block";
        loadVisitors();
    }
}





function renderTable(containerId, visitors) {
    
    if(document.getElementById(containerId)){
        document.getElementById(containerId).remove();}
    //renders table from global 'visitors' object array
    var table = $("<table/>").addClass('table');
    table.attr("id",containerId);
    var tbody = $("<tbody/>");
    let header =`
    <tr>
        <th>Name
        <th>Address
        <th>Phone
        <th>Email
        <th>Found
        <th>Notes
        
    `
    tbody.append(header);
    $.each(visitors, function(rowIndex, visitor){
        var row=$("<tr/>");
        for(let pos = 0;pos<7;pos++){
            row.append($("<td/>").html(visitor.combiner(pos)));
        }
        tbody.append(row);
    });
    table.append(tbody);
    return $(".myTable").append(table);
}

function showVisitors()  {
    //shows visitor container and hides all other site content containers
    $(".StartPoint").show();
    $(".container").hide();
    $(".myTable").show();
}
function showList() {
    //shows visitor list and hides form 
    $("#myform").hide();
    $(".StartPoint").show();
    $(".myTable").show();
    $(".container").hide();
    
}
function showForm() {
    //shows visitor form and hides list 
    $(".StartPoint").hide();
    $(".myTable").hide();
    $(".container").show();
    $("#myform").show();
    
}

function clearForm() {
    //clears values on inputs so next time form is loaded they don't have old contents
    document.getElementById('myform').reset();
}