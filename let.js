// let is block scoped
// let variables are initialized with undefined

let greeter
console.log(greeter)
greeter = "hey hi";
console.log(greeter)
{
    let greeter = "new block now";
    console.log(greeter)
}
console.log(greeter)
