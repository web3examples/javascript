// npm install node-fetch
const fetch = require('node-fetch');

    function StepThree(content) {
       console.log(content[0].name);
    }
    
    function StepTwo(Response) {
       Response.json().then(StepThree); 
    }
    
    fetch('https://chainid.network/chains.json').then(StepTwo);

