import { useEffect } from "react";

function useConsoleLog(varName) {
  useEffect(() => {
    console.log(varName);
  }, [varName]);
}

export default useConsoleLog;


// My custom hook will:
// Need to use the useEffect hook and 
// Be a separate file that you'll then use in the App component. 

// A custom hook needs to have a name that begins with use.

// First, add the custom hook as a separate file, which you can name useConsoleLog.js, 
// and add it to the root of the src folder, in the same place where the App.js component is located.

// In the App Component, The useConsoleLog hook can be imported as follows:
// import useConsoleLog from "./useConsoleLog";

//LISTO! :)