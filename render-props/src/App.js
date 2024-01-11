
import './App.css';
import { useEffect, useState } from "react";


//component's only purpose: fetch data based on a U.R.L (we are not fetching real data in this example though)
const DataFetcher = ({ render, url }) => {
  const [data, setData] = useState ([]);

// if else statement that will return either a list of all desserts or drinks available based on the U. R. L.
// This fetching logic is a side effect that should be placed inside use effect.
useEffect (() => {
    if (url.includes("desserts")) {
      setData(["cake", "ice cream", "pie", "brownie"]);
    } else {
      setData(["water", "soda", "juices"]);
    }
  }, []);

  // This is the unusual part. The component is returning the result of calling the render 
  //function and has no other rendering business. This is what makes it very flexible.
  return render(data);
};


//The desserts count component uses a particular endpoint to fetch desserts and uses a paragraph element as the render prop, displaying
// the number of desserts as a single text. The same applies to the drinks count component with the difference being that he utilizes another U. R. L. 
//And instead shows a header element reflecting the number of drinks.
const DessertsCount = () => {
  return (
    <DataFetcher
    url="https://littlelemon/desserts"
    render={(data) => <p>{data.length} desserts</p>}
    />
  );
};

const DrinksCount = () => {
  return (
    <DataFetcher
    url="https://littlelemon/drinks"
    render={(data) => <h3>{data.length} desserts</h3>}
    />
  );
};



function App() {
  return (
    <div className="App">
      <header className="Header">Little Lemon Restaurant 🍋 </header>
        <DessertsCount />
        <DrinksCount />
    </div>
  );
}

export default App;
