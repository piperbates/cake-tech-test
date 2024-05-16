async function calculateData () {
    const response = await fetch("https://fauxdata.codelayer.io/api/orders");
    if(!response.ok){
        console.error(`An error has occured: ${response.status}`);
    }

    const orderData = await response.json();

    const orders = orderData.orders;
    let orderTotals = []; // The total of all items in one specific order
    let dataTotal = 0; // The grand total of all orders in one api call

    orders.map((order)=>{
        // This will calculate the total of all items in each individual order and add them to the orderTotals array
        let orderTotal = 0;
        order.items.forEach((item)=>{
            orderTotal += parseInt(item.price)
        });
        console.log("orderTotal:", orderTotal);

        orderTotals.push(orderTotal)
    });

    orderTotals.forEach((total)=>{
        dataTotal +=total
    });

console.log("dataTotal: ", dataTotal);

const orderAverage = dataTotal / orders.length
console.log("orderAverage: ", orderAverage);

return orderAverage;
};

calculateData();