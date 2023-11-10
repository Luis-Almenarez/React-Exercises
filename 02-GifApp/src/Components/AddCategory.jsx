import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const textUser = inputValue.trim();
    if (textUser.length <= 2) return;
    onNewCategory(textUser.toLocaleLowerCase());
    // setCategories((categories) => [inputValue, ...categories]);
    setInputValue("");
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Search Gif"
          value={inputValue}
          onChange={onInputChange}
        />
      </form>
    </>
  );
};
