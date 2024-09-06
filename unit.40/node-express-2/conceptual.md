### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
JWT stands for json web token, it helps us make tokens for authentication and authoriazation for our web applications

- What is the signature portion of the JWT?  What does it do?
the signature potion is used to verify that the token was not altered

- If a JWT is intercepted, can the attacker see what's inside the payload?
Yes, the attacker can see the payload and decode to view it

- How can you implement authentication with a JWT?  Describe how it works at a high level.
JWT auth involves comparing the saved encrypted token saved on the server side with the one being submitted by the user.

- Compare and contrast unit, integration and end-to-end tests.
unit testing is more specific to making sure each function in an application works by making sure it behaves as expected. Ingeration testing is used to test the interactions between differnet units and models of an application. unit tests are used for individual peices, intergration tests weather they all work together. End to end testing is used to test real user scenarios to validate the entire system,

- What is a mock? What are some things you would mock?
a common testing concept that can be applied to other testing libraries. Som ethings you would mock would be things you dont have to wait for an api response for, or an object under test that may have multiple dpeendencies on other objects, using it to isolate the behavior

- What is continuous integration?
Continuous Integration is the practice of merging in small code changes frequently, rather than merging in a large change at the end of a development cycle.

- What is an environment variable and what are they used for?
An environment variable is a dynamic value that can affect the way running processes behave on a computer. Environment variables are key-value pairs stored in a system’s environment and can be accessed by applications and scripts. They are typically used to configure settings or store information that is specific to the environment in which an application is running. API_KEY, SECRET_KEY, DATABSE_URI

- What is TDD? What are some benefits and drawbacks?
test driven dev is when you make tests before you begin to start writteing code. This is nice as you take it step by step and dont have to make tests later, bad in that you spend a lot of time writing tests before writing code

- What is the value of using JSONSchema for validation?
it can allow you to dsiplay specific validations when running into valdation erros

- What are some ways to decide which code to test?
tsting code that changes frequently, code with complex logic, common user scenerios, security.


- What does `RETURNING` do in SQL? When would you use it?
returning shows you the data your updating, deleteing, or inserting without needing to make another SQL query

- What are some differences between Web Sockets and HTTP?
HTTP and WebSockets serve different purposes and are suited for different types of applications. HTTP is ideal for traditional web applications where data is requested on-demand, while WebSockets are better for applications requiring continuous, real-time communication. 

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
Flask as its easer to read and i enjoyed the units on it more. Being able ot wokr on the front end and the back end in the python and flask section was more my style.