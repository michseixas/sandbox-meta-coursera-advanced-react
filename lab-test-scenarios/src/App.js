import "./App.css";
import FeedbackForm from "./FeedbackForm";

function App() {
  const handleSubmit = () => {
    console.log("Form submitted!");
  };

  return (
    <div className="App">
      <FeedbackForm onSubmit={handleSubmit} />
    </div>
  );
}

export default App;


//Instructions
// Steps
// Step 1

// The first test scenario has the following specification:
// User is able to submit the form if the score is lower than 5 and additional feedback is provided
// The test scenario already contains some initial code that acts as boilerplate before getting to the bulk of the test, in particular:
// Two variables that hold the desired state of the form, a score of 3 and an additional comment.
// A mock function that is called when submitting the form.
// The rendering of the form component.
// The final assertion that should make the test pass.
// If you run as it is, the test will fail stating that the mock function has not been called at all. That is because no interactions have occurred yet and it’s your task to write those.

// The first user interaction that needs to happen is to set the score as 3. The following code achieves that:
// const rangeInput = screen.getByLabelText(/Score:/);
// fireEvent.change(rangeInput, { target: { value: score } });
// The first line grabs a reference to the range input component by using the global screen object from react-testing-library and the query getByLabelText to find a label that contains the exact text Score:
// Then, a change event is simulated on the input, passing as the event an object with the value property set to the variable score: event.target.value = score
// After that, a second user interaction is required to set the additional comment. This is the code that accomplishes that:
// const textArea = screen.getByLabelText(/Comments:/);
// fireEvent.change(textArea, { target: { value: comment } });
// Last but not least, a submission of the form should be simulated by calling the below two lines:
// const submitButton = screen.getByRole("button");
// fireEvent.click(submitButton);
// In this particular instance, the button is referenced by using a different query on the global screen object, getByRole. This query looks for an element whose role attribute is set to “button”, which is inherent in all button HTML tags.
// The form is finally submitted via firing a click event on the button instance.
// If you run the command npm test in your terminal, the test should pass now.
// Let’s now cover the second scenario.
// User is able to submit the form if the score is higher than 5, without additional feedback
// The below represents the code you need to write to make the test pass.
// const rangeInput = screen.getByLabelText(/Score:/);
// fireEvent.change(rangeInput, { target: { value: score } });
// const submitButton = screen.getByRole("button");
// fireEvent.click(submitButton);

// If you run npm test after adding the lines above, both of your tests should pass successfully, with the terminal providing the below output.
