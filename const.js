// const declarations are block scoped
// const cannot be updated or re-declared
// const have to be initialized

const greeter = "hey hi";
console.log(greeter)
{
    const greeter = "new block now";
    console.log(greeter)
}
console.log(greeter)
