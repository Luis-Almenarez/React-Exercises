import { useState } from "react";
import { Button } from "./Button";

export const AddCategory = ({ onNewCategory, clearCategory }) => {
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
      <form
        className="grid place-items-center border-none outline-none"
        onSubmit={onSubmit}>
        <input
          className="w-3/6 bg-white text-black rounded-lg border-none text-lg font-bold  p-2 m-2"
          type="text"
          placeholder="Search Gif"
          value={inputValue}
          onChange={onInputChange}
        />
      </form>
      <div className="flex justify-center gap-3 m-2 p-2">
        <Button text="Search" onClick={onSubmit} />
        <Button text="Clear" onClick={clearCategory} />
      </div>
    </>
  );
};
