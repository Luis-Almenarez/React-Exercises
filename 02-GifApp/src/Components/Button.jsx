export const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-indigo-500 transition-all hover:bg-indigo-700 hover:scale-105 text-white text-sm font-bold py-1 px-6 rounded focus:outline-none uppercase">
      {text}
    </button>
  );
};
