import { useState } from "react";
import PropTypes from "prop-types";

export const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);

  const handledAdd = () => {
    setCounter(counter + 1);
  };

  const handleSubtract = () => {
    if (counter >= 1) {
      setCounter(counter - 1);
    }
  };

  const handleReset = () => {
    setCounter(value);
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2> {counter} </h2>
      <button onClick={handledAdd}>Increase</button>
      <button onClick={handleSubtract}>Decrease</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};
