//===== Local Variable Scope========

/*function myname(){
    var name='Rifat';
    console.log(name);
}
myname();*/


//===== Global  Variable Scope========

var name='Rifat';
function myname(){
    //console.log(name);//in function
}
 console.log(name);//out of function
 
myname();