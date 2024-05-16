const calculateData = require("./calculateData.js");

async function getData () {
    const response = await fetch("https://fauxdata.codelayer.io/api/orders");
    if(!response.ok){
        console.error(`An error has occured: ${response.status}`);
    }

    const orderData = await response.json();
    calculateData(orderData);
}

getData();
