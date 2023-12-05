import React from "react";
import './App.css';

function App() {
  const formInputRef = React.useRef(null);

  //For the sake of simplicity, my click handler only accesses the form input ref object, 
  //and then it accesses the focus method on the current property which exist on the form inputRef objects.
  //This object is the return value of invoking the useRef hook (The returned value from the useRef hook invocation is an object. )
  const focusInput = () => {
    formInputRef.current.focus();
  }

  return (
    <>
      <h1>Using useRef to access underlying DOM</h1>
      <input ref={formInputRef} type="text"/>
      <button onClick={focusInput}>
        Focus Input
      </button>
    </>
  );
}

export default App;



// React will create the input elements DOM node and render it on the screen. 
// This DOM node is assigned as the value of the current property of the ref object. 
// This makes it possible to access the input DOM node and all its properties and values using 
// the syntax form inputRef.current. Since I want to access the focus function on the input 
// elements DOM node, I'm using the syntax form inputRef.current.focus. This allows me to
//  move the focus to the input field so that it is ready to be typed 
// into without the user having to click tap or tap into it. This is now triggered on a button click
