import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Pruebas en 02-template-string' , () => {

  test('getSaludo debe retonrnar "Hola Fernando', () => {
    const name = 'Fernando';
    const message = getSaludo(name);
    expect("Hola Mauricio").toBe(message)

  })
});