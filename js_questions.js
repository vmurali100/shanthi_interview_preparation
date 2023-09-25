var js_questions = [
  {
    "questions_day1": [
      {
        question: "What is JavaScript?",
        answer:
          "JavaScript is a high-level, interpreted programming language used to add interactivity and dynamic behavior to web pages.",
      },
      {
        question: "How do you declare variables in JavaScript?",
        answer:
          "Variables in JavaScript can be declared using the 'var', 'let', or 'const' keyword, followed by the variable name.",
      },
      {
        question: "What are the basic data types in JavaScript?",
        answer:
          "JavaScript has primitive data types like numbers, strings, booleans, undefined, and null, as well as objects and symbols.",
      },
      {
        question: "Explain basic arithmetic operators in JavaScript.",
        answer:
          "JavaScript supports basic arithmetic operators like addition (+), subtraction (-), multiplication (*), division (/), and modulo (%).",
      },
      {
        question: "What is type conversion in JavaScript?",
        answer:
          "Type conversion in JavaScript is the process of converting data from one data type to another, either implicitly or explicitly.",
      },
      {
        question: "What are truthy and falsy values in JavaScript?",
        answer:
          "Truthy values are values that evaluate to true in a boolean context, while falsy values evaluate to false. Examples of falsy values include 0, empty strings, and undefined.",
      },
      {
        question: "How do you display output in JavaScript?",
        answer: "You can use 'console.log()' to display output to the console.",
      },
    ],
  },
  {
    "questions_day2": [
      {
        "question": "What are conditional statements in JavaScript?",
        "answer": "Conditional statements in JavaScript allow you to execute different blocks of code based on specified conditions. Examples include 'if', 'else if', and 'else' statements."
      },
     
      {
        "question": "How do you create loops in JavaScript?",
        "answer": "You can create loops in JavaScript using 'for', 'while', and 'do-while' statements."
      },
      {
        "question": "What is the purpose of 'break' and 'continue' statements in loops?",
        "answer": "'Break' is used to exit a loop prematurely, while 'continue' is used to skip the current iteration and move to the next one."
      },
      {
        "question": "What are arrays in JavaScript?",
        "answer": "Arrays are ordered collections of values that can hold multiple data types. They are used to store and manipulate lists of items."
      },
      {
        "question": "What are functions in JavaScript?",
        "answer": "Functions in JavaScript are reusable blocks of code that can be called with arguments to perform specific tasks."
      }
    ]
  },
  {
    "questions_day3": [
      {
        "question": "What is a function in JavaScript?",
        "answer": "A function in JavaScript is a reusable block of code that can be called with arguments to perform specific tasks."
      },
      {
        "question": "What is the difference between function declarations and function expressions?",
        "answer": "Function declarations are defined using the 'function' keyword and can be called before they are declared (hoisted). Function expressions are defined within an expression and are not hoisted."
      },
      {
        "question": "What is a callback function?",
        "answer": "A callback function is a function that is passed as an argument to another function and is executed after the completion of that function."
      },
      {
        "question": "Explain the concept of hoisting in JavaScript.",
        "answer": "Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their containing scope during compilation. This allows you to use a function or variable before it is declared."
      },
      {
        "question": "What is the 'this' keyword in JavaScript?",
        "answer": "The 'this' keyword refers to the current execution context. In the global scope, 'this' refers to the global object (e.g., 'window' in a browser). Inside a function, 'this' can have different values depending on how the function is called."
      },
      {
        "question": "How do arrow functions differ from regular functions?",
        "answer": "Arrow functions are more concise and have a lexically scoped 'this' value, which means they inherit the 'this' value from their surrounding code."
      },
      {
        "question": "What is function scope and block scope in JavaScript?",
        "answer": "Function scope means that variables are only accessible within the function they are declared in. Block scope, introduced with 'let' and 'const', limits variable accessibility to the block where they are defined."
      }
    ]
  },
  {
    "questions_day4": [
      {
        "question": "What is closure in JavaScript?",
        "answer": "A closure is a function that has access to its own scope, the scope of the outer function it was defined in, and the global scope. It 'closes over' the variables it uses."
      },
      {
        "question": "Explain the scope chain in JavaScript.",
        "answer": "The scope chain is the hierarchy of scopes in which JavaScript looks for variable and function references. It starts with the local scope and goes up to the global scope."
      },
      {
        "question": "How do you create a closure in JavaScript?",
        "answer": "Closures are created by defining a function inside another function and accessing variables from the outer function within the inner function."
      },
      {
        "question": "What is lexical scope?",
        "answer": "Lexical scope means that variable access is determined by the structure of the code at the time of writing, not at runtime. It's based on where functions are declared in the code."
      },
      {
        "question": "How does the 'this' keyword behave in different contexts?",
        "answer": "The behavior of 'this' depends on how a function is called: in the global scope, 'this' refers to the global object; in a method, 'this' refers to the object the method is called on; in a constructor, 'this' refers to the newly created object; and in an event handler, 'this' typically refers to the element that triggered the event."
      },
      {
        "question": "What is variable shadowing in JavaScript?",
        "answer": "Variable shadowing occurs when a variable declared in an inner scope has the same name as a variable in an outer scope. The inner variable 'shadows' the outer one."
      },
      {
        "question": "What is the purpose of the 'let' and 'const' keywords for variable declaration?",
        "answer": "'let' and 'const' introduce block scope, which means variables declared with them are only accessible within the block where they are defined, providing better control over variable scoping."
      }
    ]
  },
  {
    "questions_day5": [
      {
        "question": "What is an array in JavaScript?",
        "answer": "An array is a data structure in JavaScript used to store and manipulate collections of values, which can be of different data types."
      },
      {
        "question": "How do you create an array in JavaScript?",
        "answer": "You can create an array by enclosing a list of values in square brackets, like this: '[1, 2, 3]' or by using the 'Array' constructor."
      },
      {
        "question": "What is the difference between 'push' and 'pop' array methods?",
        "answer": "'push' adds one or more elements to the end of an array, while 'pop' removes and returns the last element from an array."
      },
      {
        "question": "Explain the 'shift' and 'unshift' array methods.",
        "answer": "'shift' removes and returns the first element from an array, and 'unshift' adds one or more elements to the beginning of an array."
      },
      {
        "question": "What is the 'splice' method used for?",
        "answer": "The 'splice' method is used for adding, removing, or replacing elements in an array at a specified index."
      },
      {
        "question": "How do you concatenate arrays in JavaScript?",
        "answer": "You can concatenate arrays using the 'concat' method or the spread operator ('...')."
      },
      {
        "question": "Explain array iteration methods like 'forEach', 'map', and 'filter'.",
        "answer": "'forEach' iterates over each element of an array, 'map' creates a new array by applying a function to each element, and 'filter' creates a new array containing elements that meet a certain condition."
      }
    ]
  },
  {
    "questions_day6": [
      {
        "question": "What is a JavaScript object?",
        "answer": "A JavaScript object is a collection of key-value pairs, where each key is a string (or Symbol) and each value can be of any data type."
      },
      {
        "question": "How do you create an object in JavaScript?",
        "answer": "You can create an object using object literals ('{}'), the 'Object' constructor, or by defining classes (ES6)."
      },
      {
        "question": "What are object properties?",
        "answer": "Object properties are key-value pairs that define the characteristics and attributes of an object. Properties can be accessed using dot notation or bracket notation."
      },
      {
        "question": "How do you add or remove properties from an object?",
        "answer": "You can add properties to an object using dot notation or bracket notation. To remove properties, you can use the 'delete' keyword or set the property value to 'undefined'."
      },
      {
        "question": "What are object methods?",
        "answer": "Object methods are functions that are defined as properties of an object. They can be called to perform specific actions on the object's data."
      },
      {
        "question": "What is object destructuring?",
        "answer": "Object destructuring is a feature in JavaScript that allows you to extract values from objects and assign them to variables using a concise syntax."
      },
      {
        "question": "What is the 'this' keyword in object methods?",
        "answer": "In object methods, 'this' refers to the object on which the method is called. It allows you to access the object's properties and methods from within the method."
      }
    ]
  },
  {
    "questions_day7": [
      {
        "question": "What is the Document Object Model (DOM)?",
        "answer": "The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content."
      },
      {
        "question": "How do you access elements in the DOM using JavaScript?",
        "answer": "You can access DOM elements using methods like 'getElementById', 'getElementsByClassName', 'querySelector', and 'querySelectorAll' in JavaScript."
      },
      {
        "question": "What are DOM events?",
        "answer": "DOM events are interactions that occur when an element is clicked, hovered over, typed into, or otherwise manipulated. JavaScript can be used to handle and respond to these events."
      },
      {
        "question": "Explain how to add event listeners to DOM elements.",
        "answer": "You can add event listeners to DOM elements using the 'addEventListener' method. You specify the event type (e.g., 'click') and provide a callback function to run when the event occurs."
      },
      {
        "question": "What is DOM manipulation?",
        "answer": "DOM manipulation involves changing the structure, content, or style of a web page using JavaScript to interact with and modify the DOM."
      },
      {
        "question": "How do you create new elements in the DOM using JavaScript?",
        "answer": "You can create new DOM elements using the 'createElement' method and then append them to the DOM using methods like 'appendChild'."
      },
      {
        "question": "What is the 'innerHTML' property used for?",
        "answer": "The 'innerHTML' property allows you to get or set the HTML content of an element, effectively changing its content."
      }
    ]
  },
  {
    "questions_day8": [
      {
        "question": "How can you change the text content of an element using JavaScript?",
        "answer": "You can change the text content of an element using the 'textContent' or 'innerText' property in JavaScript."
      },
      {
        "question": "What is event delegation in DOM manipulation?",
        "answer": "Event delegation is a technique where a single event listener is added to a common ancestor of multiple elements. It allows you to handle events on child elements efficiently."
      },
      {
        "question": "Explain how to remove elements from the DOM.",
        "answer": "You can remove elements from the DOM using the 'removeChild' method or by setting the 'innerHTML' of their parent to an empty string."
      },
      {
        "question": "What is the purpose of the 'classList' property?",
        "answer": "The 'classList' property allows you to add, remove, or toggle CSS classes on an element, making it easy to change an element's appearance and behavior."
      },
      {
        "question": "How can you manipulate the attributes of DOM elements?",
        "answer": "You can manipulate attributes of DOM elements using properties like 'getAttribute', 'setAttribute', and 'removeAttribute'."
      },
      {
        "question": "What are data attributes in HTML and how can you access them with JavaScript?",
        "answer": "Data attributes are custom attributes you can add to HTML elements to store extra data. You can access them in JavaScript using the 'dataset' property."
      },
      {
        "question": "What is the purpose of the 'style' property for DOM elements?",
        "answer": "The 'style' property allows you to change the inline CSS styles of an element, including properties like 'color', 'backgroundColor', and 'fontSize'."
      }
    ]
  },
  {
    "questions_day9": [
      {
        "question": "What is asynchronous programming in JavaScript?",
        "answer": "Asynchronous programming in JavaScript allows multiple tasks to be executed concurrently, without blocking the main thread. It is crucial for handling operations like network requests and file I/O."
      },
      {
        "question": "What is a callback function?",
        "answer": "A callback function is a function that is passed as an argument to another function and is executed after the completion of that function. It is a common pattern for handling asynchronous code."
      },
      {
        "question": "Explain the event loop in JavaScript.",
        "answer": "The event loop is a core concept in JavaScript's runtime environment that manages the execution of code. It continuously monitors the call stack, callback queue, and microtask queue to determine which function to execute next."
      },
      {
        "question": "What is the role of the call stack in JavaScript?",
        "answer": "The call stack is a data structure that keeps track of function calls in the code. When a function is called, it is added to the stack, and when it completes, it is removed from the stack."
      },
      {
        "question": "How does JavaScript handle asynchronous operations with callbacks?",
        "answer": "JavaScript uses callback functions to handle asynchronous operations. When an asynchronous task completes, the callback function is added to the callback queue, and the event loop moves it to the call stack for execution."
      },
      {
        "question": "What is the difference between synchronous and asynchronous code execution?",
        "answer": "In synchronous code execution, tasks are executed one after the other in a blocking manner. In asynchronous code execution, tasks can overlap, allowing for non-blocking operations."
      },
      {
        "question": "What are common use cases for using callbacks in JavaScript?",
        "answer": "Callbacks are used for tasks like handling AJAX requests, file I/O, timeouts, and events where the result is not immediately available."
      }
    ]
  },
  {
    "questions_day10": [
      {
        "question": "What is a Promise in JavaScript?",
        "answer": "A Promise is an object that represents the eventual completion or failure of an asynchronous operation. It allows you to work with asynchronous code in a more readable and organized way."
      },
      {
        "question": "How do you create a Promise in JavaScript?",
        "answer": "You can create a Promise using the 'Promise' constructor. It takes a function with 'resolve' and 'reject' parameters. The function is executed immediately and can initiate an asynchronous operation."
      },
      {
        "question": "Explain the states of a Promise.",
        "answer": "A Promise can be in one of three states: pending (initial state, neither fulfilled nor rejected), fulfilled (meaning the operation completed successfully), or rejected (meaning the operation failed)."
      },
      {
        "question": "What is the purpose of the 'then' and 'catch' methods for Promises?",
        "answer": "'then' is used to handle the fulfillment of a Promise, and 'catch' is used to handle any errors or rejections that occur during the Promise chain."
      },
      {
        "question": "What is async/await in JavaScript?",
        "answer": "Async/await is a modern JavaScript feature that allows you to write asynchronous code in a synchronous-looking way. It is built on top of Promises and makes code more readable and easier to reason about."
      },
      {
        "question": "How do you use async/await with Promises?",
        "answer": "You use the 'async' keyword before a function declaration to indicate that it contains asynchronous code. Inside the function, you use 'await' to wait for a Promise to settle before continuing."
      },
      {
        "question": "What are some best practices for handling asynchronous code in JavaScript?",
        "answer": "Some best practices include using Promises and async/await for managing asynchronous flow, handling errors with 'try...catch' blocks, and avoiding callback hell by using named functions and control flow libraries."
      }
    ]
  },
  {
    "questions_day11": [
      {
        "question": "What are arrow functions in ES6?",
        "answer": "Arrow functions are a concise way to write functions in JavaScript. They have a lexically scoped 'this' and are often used for short, anonymous functions."
      },
      {
        "question": "Explain the destructuring feature in ES6.",
        "answer": "Destructuring allows you to extract values from objects and arrays and assign them to variables using a concise syntax. It's useful for working with complex data structures."
      },
      {
        "question": "What are the spread and rest operators in ES6?",
        "answer": "The spread ('...') operator is used to expand an array or object into individual elements, while the rest ('...') operator is used to collect multiple elements into an array or object."
      },
      {
        "question": "How do you use template literals in ES6 for string interpolation?",
        "answer": "Template literals allow you to embed variables and expressions inside strings using backticks (`). They offer a more readable and flexible way to create strings."
      },
      {
        "question": "What is the purpose of default function parameters in ES6?",
        "answer": "Default function parameters allow you to specify default values for function parameters, making it easier to handle missing or undefined arguments."
      },
      {
        "question": "How do 'let' and 'const' differ from 'var' in ES6?",
        "answer": "'let' and 'const' introduce block scope, which means variables declared with them are only accessible within the block where they are defined. 'var' has function scope."
      },
      {
        "question": "What is the benefit of using 'const' for variable declaration?",
        "answer": "'const' is used to declare variables that should not be reassigned after they are initially defined. It ensures immutability, making code safer and easier to reason about."
      }
    ]
  },
  {
    "questions_day12": [
      {
        "question": "What are classes in ES6, and how do they differ from constructor functions?",
        "answer": "Classes are a way to define and create objects in ES6, providing a more structured and syntactic alternative to constructor functions and prototypes."
      },
      {
        "question": "Explain the concept of modules in ES6.",
        "answer": "Modules are a way to organize and encapsulate code in separate files, making it easier to manage dependencies and maintainability. ES6 introduced the 'import' and 'export' keywords for module management."
      },
      {
        "question": "What is the 'export' keyword used for in ES6 modules?",
        "answer": "The 'export' keyword is used to define what parts of a module should be accessible from outside the module. It can be used to export variables, functions, and classes for use in other modules."
      },
      {
        "question": "How do you import modules in ES6?",
        "answer": "You can import modules using the 'import' keyword, followed by the module name and the items you want to import in curly braces. For example, 'import { function1, function2 } from 'module-name';'"
      },
      {
        "question": "What are ES6 Symbols used for?",
        "answer": "Symbols are a new primitive data type in ES6 used to create unique, immutable property keys in objects. They are often used for creating private object properties."
      },
      {
        "question": "What are Maps and Sets in ES6?",
        "answer": "Maps are data structures that store key-value pairs, allowing any data type as keys. Sets are collections of unique values. Both were introduced in ES6 and provide more robust alternatives to objects and arrays for certain use cases."
      },
      {
        "question": "Explain the purpose of the 'async' and 'await' keywords in ES6.",
        "answer": "'async' is used to define asynchronous functions, and 'await' is used within async functions to pause execution until a Promise is resolved. They make asynchronous code more readable and maintainable."
      }
    ]
  },
  {
    "questions_day13": [
      {
        "question": "What are Web APIs (Application Programming Interfaces)?",
        "answer": "Web APIs are sets of rules and protocols that allow different software applications to communicate with each other over the internet. They provide a way for developers to access and interact with external services and data."
      },
      {
        "question": "What is the Fetch API in JavaScript?",
        "answer": "The Fetch API is a modern JavaScript interface for making network requests (e.g., fetching data from a server). It provides a more powerful and flexible way to work with HTTP requests and responses."
      },
      {
        "question": "How do you make a GET request using the Fetch API?",
        "answer": "You can make a GET request using the Fetch API by calling 'fetch(url)' with the URL you want to retrieve data from. It returns a Promise that resolves to the response object, which you can then use to access the data."
      },
      {
        "question": "What is JSON, and how is it related to web APIs?",
        "answer": "JSON (JavaScript Object Notation) is a lightweight data interchange format. Many web APIs use JSON to structure and transmit data between the server and the client, making it a common format for data exchange."
      },
      {
        "question": "What is CORS (Cross-Origin Resource Sharing) in the context of web APIs?",
        "answer": "CORS is a security feature implemented by web browsers to prevent web pages from making requests to a different domain (origin). It is enforced by the browser to protect against unauthorized cross-origin requests."
      },
      {
        "question": "How do you handle asynchronous data fetched using the Fetch API?",
        "answer": "You can use the 'then' method on the Fetch API response object to handle the asynchronous data. You can also use async/await for more concise and readable code."
      },
      {
        "question": "What is the purpose of the 'POST' request method in web APIs?",
        "answer": "The 'POST' request method is used to send data to a server to create or update a resource. It is commonly used for actions that modify data on the server, such as submitting a form."
      }
    ]
  },
  {
    "questions_day14": [
      {
        "question": "What is a JavaScript framework, and how does it differ from a library?",
        "answer": "A JavaScript framework is a pre-built collection of code and tools that provides a structured foundation for building web applications. It often includes features like templating, routing, and state management. In contrast, a library is a collection of reusable functions that can be used to enhance the functionality of an application but doesn't dictate the overall structure of the application."
      },
      {
        "question": "What is React, and what are its core concepts?",
        "answer": "React is a popular JavaScript library for building user interfaces. Its core concepts include components, JSX (a syntax extension for JavaScript), a virtual DOM, and unidirectional data flow."
      },
      {
        "question": "What is Angular, and how does it differ from React?",
        "answer": "Angular is a JavaScript framework for building web applications. It provides a more opinionated structure and includes features like two-way data binding, dependency injection, and a full-featured CLI. React, on the other hand, is a library focused on building user interfaces."
      },
      {
        "question": "What is Vue.js, and how does it compare to React and Angular?",
        "answer": "Vue.js is a progressive JavaScript framework for building user interfaces. It offers a flexible and incremental approach to development and is often seen as a middle ground between the opinionated nature of Angular and the more minimalistic approach of React."
      },
      {
        "question": "What is the virtual DOM in React, and why is it important?",
        "answer": "The virtual DOM is a lightweight in-memory representation of the actual DOM. React uses it to efficiently update the real DOM by calculating the minimal set of changes needed, which leads to better performance in web applications."
      },
      {
        "question": "What are component-based architectures in JavaScript frameworks?",
        "answer": "Component-based architectures involve breaking down a user interface into reusable and self-contained components. Each component has its logic, markup, and styling, making it easier to build and maintain complex applications."
      },
      {
        "question": "What is state management in the context of JavaScript frameworks, and why is it important?",
        "answer": "State management involves managing and sharing data across different parts of an application. It's essential for handling application state, user interactions, and ensuring data consistency in large and complex applications."
      }
    ]
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
];
