# HOW TO CREATE REACT APP:
 - npm create vite/latest .
 - In latest we can use the version of the vite application.

# State In React:
 - In react, state is a built in machanism where we store the component's data that change over the time 

# React Hooks
 - React Hooks are special functions that are a new addition to React (Special Type of function only it is build in function)
 - They allow us to use state and other react features in the function components
## Types of State:
 - useState() - Add State to function components
 - useEffect() - Execute logic after the component render
 - useContext() - Access the context value

### useState():
 - useState(Initial value)
 - const [currentState, Setterfun] = useState(initialValue); 
 - It will create Object it contain (currentState and it's value- It will create Object)
 - useState() function return an array it contain two values. One is current state and setter funtion to update it current value
 - InitialValue - undefined, Null, String, Number, Boolean, Object this all are we can store inside the state.

### Importing the state:
 - import {useState} from "react";
 - const [count, setCount] = useState(0);

### Setter function:
 - setterFun(nextValue) - setCount(50);
 - setterFun(prevState => nextState) - setCount(prevState => prevState + 1 or -1);

# Debugging:
 - Debugging is the process of finding & fixing the bugs in the code.
 - Browser Developer Tool
 - React Developer Tool

 # UUID:
 - npm i uuid
 - importing - import {v4 as uuidv4} from 'uuid'
 - Use it like this uuidv4() by call this method it will create a unique id for you.

 # Use Effect:
  - React provide a bulid in hook call useEffect() that allows executing logic after the component render.
  - useEffect(effect) - useEffect accept the effect as an argument (effect means callback function)
  - React will keep track of effect
  - In general Effect are know as side effect. Because they execute after UI is rendered and can affect other components.
  - ## Rules of Hooks
   - Only call at the top level 
   - Hooks should be called from React function Components and custom Hooks
   - ### If we didn't follow the rule eslint -plugin-react-hooks package throws error.

# Local Storage:
 - Persisting the data means storing the data permantenly in local storage.
 - It allows web applications to store data locally within the User's Browser.
 - Data can only store in key - value pairs and <mark> values must be a string.</mark>
 ## Local Storage Method:
    setItem();
    getItem();

    - ### JSON (javascript object notation)
     - JSON is a data representation format 
      - used for:
      - storing Data (client/server)   
      - Ex-changing Data between client and server.
      - ### JSON Method: To convert data into json format 
       - JSON.stringify() - It convert the given value into JSON format
       - JSON.parse() - it parse a JSON String and return a JS object

# Dependency Array in UseEffect:
    useEffect(effect, [var1, var2])
    - useEffect accept another argument called Dependency Array, using which we can control the execution of effect
    - State, props use can use in dependency array

# child Props
   <Components> LIKE </Components>
   props.children to access the like content inside the Components
 
# Routing In React
   