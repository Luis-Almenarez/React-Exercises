export const Footer = () => {
  return (
    <footer className="w-full flex pt-10 gap-1 justify-center font-mono italic">
      <p className="text-sm font-bold">Created for ©</p>
      <a
        className="text-sm font-bold transition-all hover:text-indigo-600"
        href="https://github.com/luisalmenarez"
        target="_blank"
        rel="noreferrer">
        Luis Almenarez
      </a>
      <p className="text-sm font-bold italic">2023</p>
    </footer>
  );
};
