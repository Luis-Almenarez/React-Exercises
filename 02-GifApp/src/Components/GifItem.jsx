import PropTypes, { string } from "prop-types"; // Importamos la dependecia prop-types

export const GifItem = ({ title, url, id }) => {
  return (
    <div className="grid place-items-center bg-white text-black font-bold rounded-lg overflow-hidden ">
      <img className="w-full h-full" src={url} alt={title} />
      <p className="bg-white text-sm m-1 font-bold p-1">{title}</p>
    </div>
  );
};

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
