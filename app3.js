let personal = function(){
    return "Hello";
}
let personal2 = ()=> "hello";

let student = function(x,y){
    return x+y;
}
let student =(x,y)=>x+y
console.log(personal());
console.log(personal2());
console.log(student(10,5));
console.log(student2(20,10));