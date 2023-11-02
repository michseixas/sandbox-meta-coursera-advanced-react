import {useState} from "react"; 
import "./App.css";

function App() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    //preventing requests to server:
    e.preventDefault();
    //clear the input after submission:
    setName("");
    console.log("Form submitted!", console.log);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
        <div> 
          <div className="Field">
          {/* connect the label with the input, by setting the id and htmlFor */}
            <label htmlFor="name">Name:</label>
            <input
            id="name"
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          {/* button disabled if no name provided */}
          <button disabled={!name} type="submit">Submit</button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
