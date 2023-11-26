import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/Components/GifItem";

describe("Pruebas en GifItem.test.jsx", () => {
  const title = "Naruto";
  const url = "https://naruto-shippuden/Naruto.jpg";

  test("Debe hacer match con el Snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);

    expect(container).toMatchSnapshot();
  });

  test("Debe mostrar la imagen con el URL y el atributo ALT indicado", () => {
    render(<GifItem title={title} url={url} />);
    // screen.debug();
    // expect(screen.getByRole("img").src).toBe(url);

    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(alt);
  });

  test("Dbe mostrar el título en el componente", () => {
    render(<GifItem title={title} url={url} />);

    expect(screen.getByText(title)).toBeTruthy();
  });
});
