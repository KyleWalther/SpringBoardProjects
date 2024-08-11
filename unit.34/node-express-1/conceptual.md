### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
callbacks, promises, async and await

- What is a Promise?
a promisie is a task that produces a value thath is avialble now, in the future, or never. it allows for the rest of thecode to run witout interuption

- What are the differences between an async function and a regular function?
Regular functions in JavaScript execute synchronously, meaning they run sequentially from start to finish without interruption, and do not inherently handle asynchronous operations. This can lead to issues when dealing with tasks that take time to complete. In contrast, async functions are designed to manage asynchronous operations more effectively. They use the await keyword, allowing the function to pause execution until a promise is resolved, making the code appear synchronous while enabling other tasks to continue running in the background. This non-blocking behavior is beneficial for tasks like data fetching, as it allows the JavaScript runtime to remain responsive and handle other events while waiting for an asynchronous operation to complete. Async functions thus provide a more readable and manageable way to work with asynchronous code compared to using callbacks or promises alone.

- What is the difference between Node.js and Express.js?
node is a runtime envirmoent that allows javascript code to run on the server side outsde of the web browser. Express is a fraamework built on top of nod that provides a simpler more streamlined version to create server side applications, especially servers and API's. It also adds middleware, erquest handeling, and other applications.

- What is the error-first callback pattern?
The error-first callback pattern is an essential part of asynchronous programming in Node, providing a standardized way to manage errors and handle results in non-blocking code.

- What is middleware?
middleware are functions that can be called on every or specific routes within express/node with the next keyword. they have access ot he req and res objects and can call the next function

- What does the `next` function do?
pass control to the Next Middlewar, prevent stalling, and error handeling

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
some issues would ne the await keyword making each request execute sequtially, mkaing one statr and end before going ot the next. The hardcoded usernames not allowing for dynamic searches of other usernames. making usernames a paramater would be better. There is no error handeling either.   10101 