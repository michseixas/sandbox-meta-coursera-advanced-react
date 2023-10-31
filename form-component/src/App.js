import {useState} from "react"; 
import "./App.css";

function App() {
  const [name, setName] = useState("");

  const handleSubmit = () => {
    console.log("Form submitted!");
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div className="Field">
            <label>Name:</label>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
