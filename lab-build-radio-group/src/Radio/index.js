import * as React from "react";
import "./styles.css";

export const RadioGroup = ({ onChange, selected, children }) => {
  const RadioOptions = React.Children.map(children, (child) => {
    return React.cloneElement(child, {
      checked: child.props.value === selected,
      onChange: onChange,
    });
  });

  return <div className="RadioGroup">{RadioOptions}</div>;
};

export const RadioOption = ({ value, checked, onChange, children }) => {
   const handleChange = (e) => {
    const newValueSelected = e.target.value;
    onChange(newValueSelected);
   };
  
  return (
    <div className="RadioOption">
      <input value={value} type="radio" name={value}  checked={checked} onChange={handleChange} />
      <label htmlFor={value}>{children}</label>
    </div>
  );
};
