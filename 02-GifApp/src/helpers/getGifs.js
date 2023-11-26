import "whatwg-fetch";

export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=9Ej0SvVnO68rgpnyzzYK2cY38Rn4CV39&q=${category}&limit=12`;
  const response = await fetch(url);
  const { data } = await response.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  return gifs;
};
