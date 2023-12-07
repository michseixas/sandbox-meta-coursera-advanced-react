import React from "react";
import './App.css';

function App() {
  const [toggle, setToggle] = React.useState(false);

  const clickHandler = () => {
    setToggle(!toggle);
  }
//example of side effect: to update the text in the Browser tab. Fot this, we need a useEffect:
  React.useEffect(() => {
    document.title = toggle ? "Welcome to Little Lemon" : "Using the useEffect hook"
  }, [toggle]);

  return (
    <div>
    <h1>Using the useEffect hook</h1>
    {/* OnClick triggers the clickHandler funtion. */}
    <button onClick={clickHandler}>
      Toggle message
    </button>
    {toggle && <h2>Welcome to Little Lemon!</h2>} 
    {/* & operator that conditionaly render the h2  */}
    </div>
  );
}

export default App;

//THE CHANGES REFERED HERE ARE HAPPENING IN THE TAB DESCRIPTION OF THE BROWSER!
//If we want the title on the document to be set on the initial component render only (after that, it doesn't want it updated) 
//For this to run we need dependency array. The dependency array determines when the useEffect will be invoked.
// To do this: update the code with an empty dependency array ([],  line 13), meaning I'm not tracking the state of any state variables: 
// In other words, regardless of what is happening in my app, I don't want the useEffect hook to be invoked. This means that it'll be invoked only once. 
//After that, no matter what happens in my app, the useEffect hook will no longer be run.
//The dependency array is there to watch for changes to a specific variable. Based on that, execute the function that's passed 
//in as the first argument of the useEffect function call. This means that if I want to run the useEffect hook whenever there's
//an update to the value stored in the toggle variable, I need to add the toggle variable to the dependencies array. 
//After this change, back in the browser, the useEffect hook will be run every time the Toggle message button is clicked. 
//Because the clickHandler updates the value of the toggle state variable by invoking the setToggle function. 
//This in turn, triggers the useEffect invocation. Since the dependencies array is set to watch for changes to the toggle variables value.




// ------------//----------///


// # Use-effect Hook

// // useEffect(() => { 
// //   document.title = `Little Lemon, v${version}`;
// // }, [version]); 
// // Only re-run the effect if version changes 

// //If version is 2 and the component re-renders and version still equals 2, React will compare [2] from the previous render and [2] from the next render. 
// //Since all items inside the array are the same, React would skip running the effect.

// //---------

// // function MenuPage(props) { 
// //   const [data, setData] = useState([]); ----> initializes a state variable named data using the useState hook. It sets the initial state as an empty array [] and provides a function setData to update this state.

// //   useEffect(() => { ----> This useEffect hook runs once when the component mounts ([] as the dependency array). It sets the document title to 'Little Lemon' when the component is first rendered.
// //     document.title = 'Little Lemon'; 
// //   }, []); 

// //   useEffect(() => {   
// //     fetch(`https://littlelemon/menu/${id}`) 
// //       .then(response => response.json()) 
// //       .then(json => setData(json)); 
// //   }, [props.id]); 

// //   // ... 
// // } 

// // This last part: This useEffect hook fetches data from an API endpoint (https://littlelemon/menu/${props.id}) when the props.id changes.
// // Whenever the props.id changes, this effect will trigger a network request using fetch to get data from the specified API endpoint.
// // Once the data is fetched successfully (response.json()), it updates the data state using setData(json).

// // The useState hook is used to create and manage state variables.
// // The useEffect hook is used for handling side effects in functional components.
// //  It runs after every render by default, but you can control its behavior using 
// //  the dependency array. If the dependency array is empty ([]), it will only run once 
// //  (on mount) like lifecycle methods (componentDidMount in class components). 
// //  If there are dependencies listed in the array, it will run whenever any of 
// // those dependencies change (similar to componentDidUpdate in class components).


// //----------------------- Effects with cleanup:

// function LittleLemonChat(props) { 
//   const [status, chatStatus] = useState('offline'); 

//   useEffect(() => { 
//     LemonChat.subscribeToMessages(props.chatId, () => setStatus('online')) 

//     return () => { 
//       setStatus('offline'); 
//       LemonChat.unsubscribeFromMessages(props.chatId); 
//     }; 
//   }, []); 

//   // ... 
// } 

// // Explanation:

// // 1- Initialization:
// // The component LittleLemonChat uses the useState hook to create a state 
// // variable status initialized with the value 'offline'. 
// // It also provides a function setStatus to update this state.


// // 2- useEffect with an Empty Dependency Array:
// // The useEffect hook is used with an empty dependency array ([]), 
// // which means it will only run once when the component mounts.

// // 3- Inside useEffect:
// // Within the useEffect, there's a call to LemonChat.subscribeToMessages() that subscribes to messages related to the provided chatId. Upon successful subscription, it sets the status state to 'online' using setStatus('online').


// //4- Cleanup Function:
// // The useEffect hook returns a cleanup function. This function will be executed when the component is unmounted or before re-running the effect.
// // Inside the cleanup function, it resets the status state to 'offline' using setStatus('offline'). This ensures that when the component is unmounted, it updates the status back to its initial state.
// // Additionally, it calls LemonChat.unsubscribeFromMessages(props.chatId) to unsubscribe from the messages related to the provided chatId.
// // The cleanup function serves to perform necessary cleanup tasks, ensuring proper handling of resources or states associated with the effect. In this case, it ensures that the status is set to 'offline' and that the component unsubscribes from the messages before it is unmounted or before running the effect again.