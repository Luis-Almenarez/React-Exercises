import { useState } from "react";
import { AddCategory, GifGrid } from "./Components";
import { Footer } from "./Components/Footer";

export const GifApp = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  const clearCategory = () => {
    setCategories([""]);
  };

  return (
    <>
      <h1 className="text-center text-4xl font-bold m-2">Gif-App</h1>

      <AddCategory
        onNewCategory={onAddCategory}
        setCategories={setCategories}
        clearCategory={clearCategory}
      />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
      <Footer />
    </>
  );
};
