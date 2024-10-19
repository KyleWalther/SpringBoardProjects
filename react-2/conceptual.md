### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
react router gives us the power to use client side routing in our apps when treversing from page to page

- What is a single page application?
a single page applicaiton is a site where each request we make does not load an entire new page but simply updates the page with the new contentn the user may request via button click or link click

- What are some differences between client side and server side routing?
client side routing happens on the client and everything is handled throught the browser wiht javascript not preventing the page to fully reload while server side takes requests from the front end and parses it to the server, then the server responds with data thats then sent back to the front end

- What are two ways of handling redirects with React Router? When would you use each?
Programmatic redirects are useful for handling redirects in response to dynamic events in your application, while declarative redirects are better for static, predictable routing behavior.

- What are two different ways to handle page-not-found user experiences using React Router? 
one is by presenting a page that is pecifically desgined to show a 404 as in page not found or to redirect the user to a home page so they may attempt another option

- How do you grab URL parameters from within a component using React Router?
In React Router, you can grab URL parameters within a component using the useParams hook. This hook allows you to access dynamic parameters in the URL. 

- What is context in React? When would you use it?
context is universal data across an application that allows all componets to use. You would use it to avoid prop drilling, less repetion in your code, and for global themes across the app.

- Describe some differences between class-based components and function
  components in React.
class based componets are lengthy and require more methods to work properly and manage state while functional componets return jsx and have the ability to use react hooks 

- What are some of the problems that hooks were designed to solve?
hooks were desinged to simplify code and redability. They provide a way to reuse stateful logic acorss component without the complexity of higher order components.