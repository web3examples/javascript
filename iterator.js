let myIterable = {};
myIterable[Symbol.iterator] = iter;
function* iter() {
    yield 1;
    yield 2;
    yield 3;    
};

console.log([...myIterable]); // [1, 2, 3]   // spread operator

function display(a,b,c,d) { console.log(a,b,c,d) }
display(...myIterable); // 1 2 3 undefined

let objClone = { ...myIterable };
console.log(objClone); // { [Symbol(Symbol.iterator)]: [GeneratorFunction] }

const i = iter();
console.log(i.next().value,i.next().value,i.next().value,i.next().value); // 1 2 3 undefined

let a,b,c,d
[a,b,c,d]=myIterable
console.log(a,b,c,d); // 1 2 3 undefined

async function test() {
    for (let value of myIterable) 
        console.log(value);  // 1, 2, 3

    for await (const x of myIterable)  // this way the yields can also return promises
        console.log(x); // 1 2 3
}
test(); 