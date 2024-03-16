let name = "Mithun";
let email = "vikash@gmail.com";
let age = "21";

if (typeof name !== "string"){
    console.log("Warning: Name should be a string!");
}else if(typeof email !== "string"){
    console.log(" Warning: Email should be a string!");
}else if ( typeof age !== "number"){
    console.log("Warning: Age should be a number!");
}else{
    console.log("all Right");
}