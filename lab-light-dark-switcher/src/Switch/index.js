import "./Styles.css";
import { useTheme } from "../ThemeContext";

const Switch = () => {
  const { theme, toggleTheme } = useTheme(); 

  const handleChange = () => {
    toggleTheme(); // Call the toggleTheme function to change the theme
  };

  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={theme === "light"}
        onChange={handleChange} // Add the onChange prop and pass the handleChange function
      />
      <span className="slider round" />
    </label>
  );
};

export default Switch;


// COURSERA SOLUTION-------:

// import "./Styles.css";
// import { useTheme } from "../ThemeContext";

// const Switch = () => {
//  const { theme, toggleTheme } = useTheme();
//  return (
//    <label className="switch">
//      <input
//        type="checkbox"
//        checked={theme === "light"}
//        onChange={toggleTheme}
//      />
//      <span className="slider round" />
//    </label>
//  );
// };

// export default Switch;