import { getGifs } from "../../src/helpers/getGifs";

describe("Pruebas en getGifs", () => {
  test("Debe retonar un arreglo de Gifs", async () => {
    const gifs = await getGifs("Dragón Ball");
    // console.log(gifs);
    expect(gifs.length).toBeGreaterThan(0); // Si el array que recibe tiene por lo menos un elemento entonces ejecuta la siguiente prueba.

    // Verificamos que el array que se reciba tenga la estructura que se define en la función getGifs
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
