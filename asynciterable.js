const myAsyncIterable = {
    async* [Symbol.asyncIterator]() {
        yield "hello";
        yield "async";
        yield "iteration!";
    }
};

async function* asyncGenerator() {
  let i = 0;
  while (i < 3) {
    yield i++;
  }
}

async function main() {
    for await (const x of myAsyncIterable) 
        console.log(x); //    "hello"  "async" "iteration!"
    
    for await (let num of asyncGenerator()) 
        console.log(num); // 0 1 2    
        
 //   for (let numOrPromise of asyncGenerator()) 
 //       console.log(await numOrPromise);
        
}

main();  
 