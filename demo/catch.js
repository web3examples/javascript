// npm install node-fetch
const fetch = require('node-fetch');

fetch('https://chainid.network/chains.json2')
    .then( Response => Response.json())
    .catch(err => console.error('Catch 1: fetch failed', err.message))
    .then( content => console.log(content[0].name))
    .catch(err => console.error('Catch 2: fetch failed', err.message))
