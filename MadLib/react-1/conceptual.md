### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
React is a frontend framework developed by facebook

- What is Babel?
babel is a compiler that allows devs to write code using modern javascript features

- What is JSX?
jsx allows us to write html in our javscript files and comes with react

- How is a Component created in React?
a component is a function that tells react how to render html

- What are some difference between state and props?
props are varibles that we can pass into our components and can be set in oarent componnets 
state is a peice of data that can perisit or be changed based on user input without needing an inteire page reload

- What does "downward data flow" refer to in React?
it reffers to the data flow from child cmoponents and there props to children componenets. The data can only flow down

- What is a controlled component?
a controlled component is where the form input is handled by the react state

- What is an uncontrolled component?
a form element that has its data handled by the DOM itself, not by react

- What is the purpose of the `key` prop when rendering a list of components?
key is how React keeps track and identifies data within our application

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
it is poor because the key associated wth specific data entries in the list will change depending on how th e list is changed voa adding or subtrticing values ofmr the list. Shiftin the key index pairs to be inacirate

- Describe useEffect.  What use cases is it used for in React components?
useEffect is a funciton that runs everytime the page is rerendered unlesss specifide not to, we use. We use it in cases of data fetching, starting a timer, or changing the DOM

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
The useRef hook in React provides a way to create a mutable object that persists across component renders without causing a re-render when its value changes. It is commonly used to reference DOM elements or store mutable values that don't need to trigger a component update. Unlike state, updating the current property of a ref does not cause a component to re-render. This makes useRef ideal for storing values that you want to persist but don't need to trigger updates in the UI, such as tracking focus or previous values.

- When would you use a ref? When wouldn't you use one?
you would use ref in react when you want to directly interact with a DOM element or store mutable vales that perist between renders without causing re-renders
you woulnd tuse one to manage component state or when you can manage logic with reacts state
Essentially, refs are for non-UI-related updates or direct DOM manipulation, while state and props are used for reactive UI logic.

- What is a custom hook in React? When would you want to write one?
A custom hook in react is where we want to make a reusable function that allows you to encapsualte and share staeful logic across multilple componentes. We would write one for a shuffle feature in a app that has multiple decks, in general where we are repeating code that involves state.
