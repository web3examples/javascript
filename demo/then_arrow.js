// npm install node-fetch
const fetch = require('node-fetch');

fetch('https://chainid.network/chains.json')
    .then( Response => Response.json())
    .then( content => console.log(content[0].name))




