import React from "react";

const Form = ({ input, handleChange, handleSubmit }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="input">Add Todo: </label>
        <input
          onChange={handleChange}
          id="input"
          value={input}
          placeholder="Enter Todo"
        />
      </form>
    </>
  );
};

export default Form;
