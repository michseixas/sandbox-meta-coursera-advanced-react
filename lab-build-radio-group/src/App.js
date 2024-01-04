import "./App.css";
import { RadioGroup, RadioOption } from "./Radio";
import { useState } from "react";

function App() {
  const [selected, setSelected] = useState("");
  return (
    <div className="App">
      <h2>How did you hear about Little Lemon?</h2>
      <RadioGroup onChange={setSelected} selected={selected}>
        <RadioOption value="social_media">Social Media</RadioOption>
        <RadioOption value="friends">Friends</RadioOption>
        <RadioOption value="advertising">Advertising</RadioOption>
        <RadioOption value="other">Other</RadioOption>
      </RadioGroup>
      <button disabled={!selected}>Submit</button>
    </div>
  );
}

export default App;


// Instructions
// Open the App.js file. In there you will already see the desired API for the RadioGroup and RadioOption components. 
//At the moment, they don't render anything on the screen. You don't have to change anything in this file, but just understand the 
//set of props involved in the component design.

// Step 2
// Open the Radio/index.js file. Implement the remaining bits for the RadioGroup component. The RadioOptions variable is initially set to null. 
//Instead, use React.Children.map to iterate over the children and clone each child using React.cloneElement. 
//The result should be assigned to the RadioOptions variable.

// Each cloned child should receive two additional props, checked and onChange.

// Step 3
// Open the Radio/index.js file. The RadioOption component is incomplete. In particular, it's missing some props in the input element that it renders:  
// value, checked and onChange.

// The RadioOption component already receives all those props. Your goal is to connect them to the input element.

// When adding the onChange prop to the radio input, which represents the event that gets triggered whenever you interact with it, 
// you can access the value property of the event target to get the value of the newly selected radio option, as per the code below.
// const handleChange = (e) => {
//   const newValueSelected = e.target.value

//   Step 4
// Verify that the app works as expected. You should be able to select a radio option and see how the submit button gets enabled as soon as 
// a selection is made.

// Tips
// The RadioGroup component receives the selected prop, a string that represents the value of the currently selected radio option. 
// However, an individual RadioOption component only cares about whether it is selected or not, via the boolean checked prop. 
// You would have to perform some small business logic inside the 
// RadioGroup component to translate the selected prop to the checked prop that each RadioOption child receives.
// }

