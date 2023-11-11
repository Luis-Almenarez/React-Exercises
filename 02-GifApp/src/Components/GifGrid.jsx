import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3 className="font-bold pt-8 p-0">{category}</h3>
      {isLoading && <h2 className="text-4xl font-bold m-5">Searching...</h2>}
      <div className="grid grid-cols-1 grid-rows-5 gap-4 md:grid-cols-2 place-items-center">
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};
