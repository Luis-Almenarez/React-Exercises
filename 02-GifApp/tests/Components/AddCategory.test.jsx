import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/Components/AddCategory";

describe("Pruebas en <AddCategory/>", () => {
  test("Debe cambiar el valor de la caja de texto", () => {
    render(<AddCategory onNewCategory={() => {}} />);

    const input = screen.getByRole("textbox");

    fireEvent.input(input, { target: { value: "Gokú" } });

    expect(input.value).toBe("Gokú");

    // screen.debug();
  });

  test("Debe llamar onNewCAtegory si el input tiene un valor", () => {
    const inputValue = "gokú";

    const onNewCategory = jest.fn(); // Simula una función, es decir, crea una mock

    render(<AddCategory onNewCategory={onNewCategory} />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: inputValue } }); // Envía el input con el valor de 'gokú' el cual definimos al inicio de la prueba
    fireEvent.submit(form); // Envia el formulario, es el equivalente al presionar 'Enter'
    // screen.debug();
    expect(input.value).toBe("");

    expect(onNewCategory).toHaveBeenCalled(); // Verifica si la función fue llamada
    expect(onNewCategory).toHaveBeenCalledTimes(1); // Verifca la cantidad de veces que la función fue llamada
    expect(onNewCategory).toHaveBeenCalledWith(inputValue); // Verifica que la función haya sido llamada con el valor del inputValue que definimos al inicio de la prueba
  });

  test("Si el input está vacío no debe llamar el onNewCategory", () => {
    const onNewCategory = jest.fn();
    render(<AddCategory onNewCategory={onNewCategory} />);

    const form = screen.getByRole("form");
    fireEvent.submit(form);

    expect(onNewCategory).toHaveBeenCalledTimes(0);
    expect(onNewCategory).not.toHaveBeenCalled();
  });
});
