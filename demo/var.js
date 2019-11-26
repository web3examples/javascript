// var declarations are globally scoped or function scoped 
// var variables can be re-declared (in the same scope)
// var variables are initialized with undefined

var greeter = "hey hi";
console.log(greeter);
{
    var greeter = "new block now";
    console.log(greeter);
}
console.log(greeter);
