// npm install node-fetch
const fetch = require('node-fetch');

function StepTwo(Response) {
    return Response.json(); 
}

function StepThree(content) {
    console.log(content[0].name);
}    

fetch('https://chainid.network/chains.json').then(StepTwo).then(StepThree);

