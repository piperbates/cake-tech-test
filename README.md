# Cake Tech Test

Tech test for cake agency. 

Cake tech test plan

## How would I approach the task:

* First steps are to break down the task:
Take each order and calculate the order total
Once I have the order total for all the orders in the array, divide this by the total number of orders (ie: order.length) to get the average.

IE: If the api returns 2 orders, one totalling 10.50, the other totalling 7.50. The total value of both orders is 18. Divide this by the number of orders (2) = 9, so the function should return 9.

Account for the 500 error.

* Make a github repository for the task:
https://github.com/piperbates/cake-tech-test

* Code it!

Write a function that calls the api (https://fauxdata.codelayer.io/api/orders).

Take the array of values and calculates the total value all items in each order.

That can then calculate the total value of all orders together, and divide that by the original array length.

Return that value.

## Some things to add
* I have kept the logs in so that when you run the code it easily shows the results in the console.