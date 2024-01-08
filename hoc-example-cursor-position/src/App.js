import './App.css';
import {useState, useEffect} from 'react';

//HOC that returns a component that will render the wrapped component provided to 
//the function without forgetting to spread the props it receives, so that they will pass-through

const withMousePosition = (WrappedComponent) => {
  return (props) => {

    //to track the position of the cursor, I would need to define a new piece of local state, 
    //which I'll call mouse position for the data and set mouse position for the state setter. 
    //The initial state will be an object with two properties, x and y to define the two-dimensional coordinates on the screen and I will set both to zero. 
    //X equals 0 and y equals 0, represents the top-left corner of the screen.
    const [mousePosition, setMousePosition] = useState ({
      x: 0,
      y: 0,
    });

    useEffect (()=> {
      const handleMousePositionChange = (e) => {
        setMousePosition ({
          x: e.clientX,
          y: e.clientY,
        });
      };
      
      window.addEventListener("mousemove", handleMousePositionChange);

      return () => {
        window.removeEventListener("mousemove", handleMousePositionChange);
      };
    }, []);
    
    //set a new prop called mouse position in the wrapped component to pass that information down to all 
    //components that are interested in that data
    return <WrappedComponent {...props} mousePosition={mousePosition} />;
  };
};

const PanelMouseLogger = ({ mousePosition }) => {
  if (!mousePosition) {
    return null;
  }
  return (
    <div className="BasicTracker">
      <p>Mouse Position</p>
      <div className="Row">
        <span>x: {mousePosition.x}</span>
        <span>y: {mousePosition.y}</span>
      </div>
    </div>
  );
};

const PointMouseLogger = ({ mousePosition }) => {
  if (!mousePosition) {
    return null;
  }
  return (
    <p>
      ({ mousePosition.x}, {mousePosition.y})
    </p>
  );
};

const PanelMouseTracker = withMousePosition(PanelMouseLogger);
const PointMouseTracker = withMousePosition(PointMouseLogger);

function App() {
  return (
    <div className="App">
      <header className="Header"> Little Lemon Restaurant 🍋 </header>
      <PanelMouseTracker />
      <PointMouseTracker />
    </div>
  );
}

export default App;
