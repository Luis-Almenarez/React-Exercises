import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3 className="font-bold pt-8 pb-8 p-0">{category}</h3>
      {isLoading && <h2 className="text-4xl font-bold m-5">Searching...</h2>}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center w-full">
        {images.map((image) => (
          <div
            key={image.id}
            className="grid w-full h-56 transition-all hover:scale-105">
            <GifItem {...image} />
          </div>
        ))}
      </section>
    </>
  );
};
