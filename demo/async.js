// npm install node-fetch
const fetch = require('node-fetch');

async function asyncFunction() {  
    const Response = await fetch('https://chainid.network/chains.json');
    const content = await Response.json();
    console.log(content[0].name);
}
asyncFunction();
