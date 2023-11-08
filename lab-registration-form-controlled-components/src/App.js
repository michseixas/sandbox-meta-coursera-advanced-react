import "./App.css";
import { useState } from "react";
import { validateEmail } from "./utils";

const PasswordErrorMessage = () => {
  console.log("show error message");
  return (
    <p className="FieldError">Password should have at least 8 characters</p>
  );
};

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [role, setRole] = useState("role");

  //------------------

  //COURSERA SOLUTION
  const getIsFormValid = () => {
    return (
      firstName &&
      validateEmail(email) &&
      password.value.length >= 8 &&
      role !== "role"
    );
  };

  //MY SOLUTION
  // const getIsFormValid = () => {
  //   if (!firstName){
  //     return false
  //   } else if (!validateEmail(email)){
  //     return false
  //   } else if (password.length < 8) {
  //     return false
  //   } else if (role === "role") {
  //     return false
  //   } else {
  //     return true;
  //   }
  // };

  //------------------

  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword({
      value: "",
      isTouched: false,
    });
    setRole("role");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created!");
    clearForm();
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Sign Up</h2>

          <div className="Field">
            <label>
              First name <sup>*</sup>
            </label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First name"
            />
          </div>

          <div className="Field">
            <label>Last name</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last name"
            />
          </div>

          <div className="Field">
            <label>
              Email address <sup>*</sup>
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
            />
          </div>

          <div className="Field">
            <label>
              Password <sup>*</sup>
            </label>
            <input
              type="password"
              value={password.value}
              onChange={(e) => {
                setPassword({ ...password, value: e.target.value });
              }}
              onBlur={() => {
                setPassword({ ...password, isTouched: true });
              }}
              placeholder="Password"
            />
            {password.isTouched && password.value.length < 8 ? (
              <PasswordErrorMessage />
            ) : null}
          </div>

          <div className="Field">
            <label>
              Role <sup>*</sup>
            </label>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="role">Role</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>

          <button type="submit" disabled={!getIsFormValid()}>
            Create account
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;


// The first step involves converting all form elements into controlled 
// components. Since the pieces of local state have been already defined 
// at the top of the component, you just have to assign each state piece 
// to the value prop from each input element. To be able to account for 
// state updates, each input should also define the onChange prop and 
// call the state setter with the value property from the event target 
// as parameter.
// The password input is a special case that has an object as state 
// instead of a string. As a result, the state setter should spread the 
// previous values so they don’t get overridden. Finally, to make sure 
// the password characters are obscured, you need to use the type “password” 
// for the input.


// The isTouched property on the password state was defined to determine when 
// the input was touched at least once. In order to listen for interactions, 
// form inputs have two additional events you can subscribe to: onFocus and
//  onBlur. 
// In this scenario, you need to use the onBlur event, which 
// is called whenever the input loses focus, so that guarantees the user has
//  interacted with the password input at least once. In that event, you should
//   set the isTouched property to true with the password state setter.
// Then, the condition to display the error message relies on that value being 
// true and a check on the password length to see if it’s less than 
// 8 characters long. If the condition is true, the component 
// PasswordErrorMessage should be rendered. 