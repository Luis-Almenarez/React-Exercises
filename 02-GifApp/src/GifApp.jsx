import { useState } from "react";
import { AddCategory } from "./Components/AddCategory";

export const GifApp = () => {
  const [categories, setCategories] = useState(["Naruto", "Dragón Ball"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };
  return (
    <>
      <h1>GifApp</h1>
      <AddCategory
        onNewCategory={onAddCategory}
        setCategories={setCategories}
      />
      <ol>
        {categories.map((category) => {
          return (
            <div key={category}>
              <h3>{category}</h3>
              <li>{category}</li>
            </div>
          );
        })}
      </ol>
    </>
  );
};
