import { useState } from "react"; 
 
export default function App() { 
  const [greeting, setGreeting] = useState({ greet: "Hello, World" }); 
  console.log(greeting, setGreeting); 
 
  function updateGreeting() { 
    const newGreeting = {...greeting}; 
    newGreeting.greet = "Hello, World-Wide Web"; 
    setGreeting(newGreeting); 
  } 
 
  return ( 
    <div> 
      <h1>{greeting.greet}</h1> 
      <button onClick={updateGreeting}>Update greeting</button> 
    </div> 
  ); 
} 






//---- How NOT to update the state object, example 1
// import { useState } from "react"; 
 
// export default function App() { 
//   const [greeting, setGreeting] = useState({ greet: "Hello, World" }); 
//   console.log(greeting, setGreeting); 
 
//   function updateGreeting() { 
//     greeting = {greet: "Hello, World-Wide Web}; 
//     setGreeting(greeting); 
//   } 
 
//   return ( 
//     <div> 
//       <h1>{greeting.greet}</h1> 
//       <button onClick={updateGreeting}>Update greeting</button> 
//     </div> 
//   ); 
// } 

// The above code does not work because it has a TypeError hiding inside of it.
// Specifically, the TypeError is: "Assignment to constant variable".
// In other words, you cannot reassign a variable declared using const, such as in the case of the useState hook's array destructuring:
// const [greeting, setGreeting] = useState({ greet: "Hello, World" }); 






//---- How NOT to update the state object, example 2
// export default function App() { 
//   const [greeting, setGreeting] = useState({ greet: "Hello, World" }); 
//   console.log(greeting, setGreeting); 
 
//   function updateGreeting() { 
//     greeting.greet = "Hello, World-Wide Web; 
//     setGreeting(greeting); 
//   } 
 
//   return ( 
//     <div> 
//       <h1>{greeting.greet}</h1> 
//       <button onClick={updateGreeting}>Update greeting</button> 
//     </div> 
//   ); 
// } 

// The above code is problematic because it doesn't throw any errors; however, it also doesn't update the heading, so it is not working correctly. This means that, regardless of how many times you click the "Update greeting" button, it will still be "Hello, World".
// To reiterate, the proper way of working with state when it's saved as an object is to:
// Copy the old state object using the spread (...) operator and save it into a new variable and 
// Pass the new variable to the state-updating function 
