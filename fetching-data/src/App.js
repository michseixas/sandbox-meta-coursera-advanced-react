import React from "react";

function App() {
  const [user, setUser] = React.useState([]);

  //The fetchData function is initially fetching data from the randomuser.me API, 
  //next it retrieves a response from the API in JSON format, and finally updates the state variable with the returned data.  
  const fetchData = () => {
    fetch("https://randomuser.me/api/?results=1")
      .then((response) => response.json())
      .then((data) => setUser(data));
  };
// from inside they use effect hook, I'm calling the fetch data function which I've defined previously
  React.useEffect(() => {
    fetchData();
  }, []);


  //Use the the object.keys code snippet to put all the keys of the user object into an array. 
  //Since object.keys returns an array, I can access the length property on this array and 
  //check if the length of this array is greater than zero.
  return Object.keys(user).length > 0 ? (
    <div>
      <h1>Data returned</h1>
      <h2>First Name: {user.results[0].name.first}</h2>
      <h2>Last Name: {user.results[0].name.last}</h2>
    </div>
  ) : (
    <h1>Data pending...</h1>
  );
}

export default App;
