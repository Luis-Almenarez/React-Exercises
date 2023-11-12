import { useState } from "react";
import { Button } from "./Button";
import { MagicMotion } from "react-magic-motion";

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
      <MagicMotion>
        <form
          className="w-8/12 grid place-items-center border-none outline-none bg-indigo-500 rounded-xl hover:bg-white transition-all"
          onSubmit={onSubmit}>
          <input
            className="w-full bg-transparent text-black rounded-xl border-none text-lg font-bold pl-3 p-1 m-2 focus:outline-none"
            type="text"
            placeholder="Search Gif..."
            value={inputValue}
            onChange={onInputChange}
          />
        </form>

        <div className="flex justify-center gap-3 m-2 p-2">
          <Button text="Search" onClick={onSubmit} />
          <Button text="Clear" onClick={clearCategory} />
        </div>
      </MagicMotion>
    </>
  );
};
