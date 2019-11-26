// let is block scoped

let greeter = "hey hi";
greeter = "say Hello instead";
console.log(greeter)
{
    const greeter = "new block now";
    console.log(greeter)
}
 console.log(greeter)