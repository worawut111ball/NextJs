function sayHello(name){
    console.log("----------");
    console.log("Hello World"+name);
    console.log("-----------");
}
//Arrow function
const sayHi =(name,age)=>{
    console.log("----------");
    console.log("Hello World"+name+" ,"+age);
    console.log("-----------");
}
function sayHello(x,y){
    return x+y;
}


sayHello(555); // function calling
sayHi("ball",20);

const result = sayHello(10,20);
console.log(result);