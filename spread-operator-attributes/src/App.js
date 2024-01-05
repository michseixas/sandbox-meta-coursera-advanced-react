
import './App.css';

const Button = ( { type, children, ...buttonProps }) => {
  const className = type === "primary" ? "PrimaryButton" : "SecondaryButton";
  return (
    <button className={`Button ${className}`} {...buttonProps}>
      {children}
    </button>
  );
};

//Login button component that renders the custom button component. This login button 
//does some pre-configuration by fixating some of the props from the button component in this case type and on click 
//while still passing the native button props down with the spread operator:
const LoginButton = ({ type, children, ...buttonProps }) => {
  return (
    <Button
    type="secondary"
    {...buttonProps}
    onClick={() => {
      alert("Loggin in!");
    }}
    >
      {children}
    </Button>
  );
};

// Now, the app component renders the two buttons and uses the button component 
// for the sign up and the login button component for login. The buttons are both 
// configured here to send the user to the sign up page, unless they have an account in
// which case the login button components original on click function will send them to the login page.
// I have also provided both with an on click handler to show an alert about the 
// intended action when the button is pressed. However, observe how I have mistakenly 
// provided the same alert message that is used for sign up on the login button 
// component. Hence, overriding the on click handler that the login button already 
// defines. Now, can you guess what the message of the alert will be when I click on it?
// Even though the onClickprop in the LoginButton component is overridden, its implementation
// prevents that overriding from happening, due to the order of the spread operator.  

function App() {
  return (
    <div className="App">
      <header className="Header">Little Lemon Restaurant 🍋</header>
      <Button type="primary" onClick={() => alert("Signing up!")}>
        Sign up
      </Button>
      <LoginButton type="secondary" onClick={() => alert("Signing up!")}>
        Login
      </LoginButton>
    </div>
  );
}

export default App;
