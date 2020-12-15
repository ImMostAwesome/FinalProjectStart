class Visitor{
    constructor(id, firstName, lastName, address, city, state, zip, cellPhone, email, foundOptions, comments){
        this.id = id;
        this.firstName = firstName; 
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.cellPhone = cellPhone;
        this.email = email;
        this.findOptions = foundOptions//JSON.stringify(foundOptions);// checkbox values
        this.comments = comments;
    }
    get fullName(){
        return this.firstName + " " + this.lastName;
    }
    get fullAddress(){
        return this.address + " " + this.city + ", " + this.state + " " + this.zip;
    }
    combiner(point) {
        if(point == 6){
            var txt = this.id;
            txt = `<a href='#' onClick='editVisitor("${txt}")'><i class="fas fa-hammer"></i></a>&nbsp&nbsp<a href='#' onClick='MakeSureDelete("${txt}")'><i class="fa fa-trash" aria-hidden="true"></i></a>`;
            return txt;
        }if(point == 0){
            return this.fullName;
        }if(point == 1){
            return this.fullAddress;
        }if(point == 2){
            return this.cellPhone;
        }if(point == 3){
            return this.email;
        }if(point == 4){
            txt = "";
                $.each(this.findOptions, function(kay, vel){
                    if(vel)
                        {txt += kay + ", ";}
                });
            return txt;
        }return this.comments;
    }
}

let visitors = [ 
    new Visitor(1,"Ken","Jenson","1234 W. Main St.","Mapleton","Utah","84664","801-444-5555","ken@gmail.com",{google:true,yahoo:false,friend:true}, "notes"),
    new Visitor(2,"Ben","Jenson","1234 W. Main St.","Mapleton","Utah","84664","801-444-5555","ben@gmail.com",{google:true,yahoo:false,friend:false}, "notes")
   ];


function modelAddVisitor(visitor) {
    visitors.push(visitor)
}
function modelDeleteVisitor(id) {
    //removes visitor object with given 'id' from array
    if(id == visitors.length){
        visitors.pop();
        return ;
    }
    if(id > visitors.length){
        return ;
    }
    let temp = visitors.pop();
    temp.id = visitors.length;
    modelDeleteVisitor(id)
    visitors.push(temp);
    return
}
function findVisitor(id) {
    //returns visitor object with given 'id' from array
    return visitors[id];
}
function findVisitorIndex(id) {
    //returns index in the array of the visitor object with given 'id'.  Handy when trying to delete an object
    return id;
}
function modelUpdateVisitor(visitor) {
    //finds and updates a visitor object a your array
    $.each(visitors[visitor.id-1], function (key, val){
        visitors[visitor.id-1][key] = visitor[key]; 
    });
}   //Only for extra credit 'edit' function
function popForm(id){
    $("#first-name")[0].value = visitors[id-1].firstName;
    $("#last-name")[0].value = visitors[id-1].lastName;
    $("#address")[0].value = visitors[id-1].address;
    $("#city")[0].value = visitors[id-1].city;
    $("#state")[0].value = visitors[id-1].state;
    $("#zip")[0].value = visitors[id-1].zip;
    $("#email")[0].value = visitors[id-1].email;
    $("#phone")[0].value = visitors[id-1].cellPhone;
    $("#google")[0].checked = visitors[id-1].findOptions.google;
    $("#friend")[0].checked = visitors[id-1].findOptions.friend;
    $("#newspaper")[0].checked = visitors[id-1].findOptions.newspaper;
    $("#comment")[0].value = visitors[id-1].comments;
}