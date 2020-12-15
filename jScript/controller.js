$(document).ready(function(){
   
    initValidation();   //in validation.js, should set up submit event handler
 
    //initialize any of your button or other event handlers 
 });
 
 function loadVisitors() {
    //called when 'visitors' menu item is clicked 
    //calls view 'showVisitors' 
    showVisitors();
    //calls view 'renderTable'
    renderTable("aTable", visitors); 
    //calls view 'showTable'
    //showTable();
 }
 let CurNum = -1;
 function submitForm() {
     //called on form submit. Gets contents of form, creates visitor object, 
     //calls model 'modelAddVisitor' function
     if(!submitted){
         submitted = true;
         if(CurNum < 0){CurNum = visitors.length;}
        modelAddVisitor(new Visitor(CurNum+1, $("#first-name")[0].value, $("#last-name")[0].value,
        $("#address")[0].value, $("#city")[0].value, $("#state")[0].value, $("#zip")[0].value, $("#phone")[0].value, $("#email")[0].value,
         {google:$("#google")[0].checked, friend:$("#friend")[0].checked, newspaper:$("#newspaper")[0].checked}, $("#comment")[0].value));
        //calls view 'renderTable'
        renderTable("aTable", visitors); 
        //calls view 'showTable'
        showList();
        storeItem();
    }
 }
 function updateForm() {
   //called on form submit. Gets contents of form, creates visitor object, 
   //calls model 'modelAddVisitor' function
   if(!submitted){
       submitted = true;
       if(CurNum < 0){CurNum = visitors.length;}
      modelUpdateVisitor(new Visitor(CurNum, $("#first-name")[0].value, $("#last-name")[0].value,
      $("#address")[0].value, $("#city")[0].value, $("#state")[0].value, $("#zip")[0].value, $("#phone")[0].value, $("#email")[0].value,
      {google:$("#google")[0].checked, friend:$("#friend")[0].checked, newspaper:$("#newspaper")[0].checked}, $("#comment")[0].value));
      //calls view 'renderTable'
      renderTable("aTable", visitors); 
      //calls view 'showTable'
      showList();
      storeItem();
  }
}
 function addVisitor() {
   //called on 'click' of 'New Visitor' button 
   //calls view 'clearForm' to clear form contents
   //calls view 'showForm'
   submitted = false;
   clearForm()
   showForm()
   CurNum = -1;
 }
 function MakeSureDelete(id){
    $("#hiddenForm").show();
    document.getElementById("Confirm").onclick = function(){deleteVisitor(id)};
    document.getElementById("formQuestion").innerHTML = "Are you Sure you want to delete " + visitors[id-1].firstName + " " + visitors[id-1].lastName;
 }
 function cancel() {
   $("#hiddenForm").hide();
 }
 function deleteVisitor(id) {
   $("#hiddenForm").hide();
    //called on 'click' of 'delete' icon in visitor list 
    //calls model.js modelDeleteVisitor
    //calls view 'renderTable' 
    //calls view 'showTable'
    modelDeleteVisitor(id);
    renderTable("aTable",visitors);
    showList();
    storeItem();
 }
 function editVisitor(id) {
   submitted = false;
   showForm();
   popForm(id);
   CurNum = parseInt( id);
 }




 window.addEventListener("load", function(){
   let fromStorage = {  
   } 
   if (localStorage.getItem("allVisitors")) {
      //get from object instead
      visitors=[];
      fromStorage = JSON.parse(localStorage["allVisitors"]);
      $.each(fromStorage, function(key, value){
         visitors.push(new Visitor(value.id, value.firstName, value.lastName, value.address, value.city,
            value.state, value.zip, value.cellPhone, value.email, value.findOptions, value.comments));
      });
   }else{
      storeItem();
   }
});
function storeItem(){
   localStorage.setItem("allVisitors", JSON.stringify(visitors));
}
