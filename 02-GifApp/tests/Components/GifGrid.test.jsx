import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/Components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe("Pruebas sobre <GifGrid/>", () => {
  const category = "Dragón Ball";

  test("Debe mostrar el loading inicial", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);
    // screen.debug();
    expect(screen.getByText("Searching..."));
    expect(screen.getByText(category));
  });

  test("Debe mostrar items cuando se cargan las imágenes desde el useFetchGifs", () => {
    const gifs = [
      {
        id: "ABC",
        title: "Gokú",
        url: "https://localhost/goku.jpg",
      },
      {
        id: "123",
        title: "Naruto",
        url: "https://localhost/naruto.jpg",
      },
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: true,
    });

    render(<GifGrid category={category} />);

    expect(screen.getAllByRole("img").length).toBe(2);
  });
});
