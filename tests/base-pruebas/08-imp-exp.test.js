import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('Pruebas en 08-imp-exp', () => {

  test('getHeroeById debe retornar un heroe por ID', () => { 

    const id = 1;

    const hero = getHeroeById(id);

    expect(hero).toEqual({  id: 1,  name: 'Batman',  owner: 'DC'})
  });

  test('getHeroeById debe retornar Undefined si no existe el ID', () => { 

    const id = 15;

    const hero = getHeroeById(id);

    expect(hero).toBeFalsy();

  });


  test('getHeroeByOwner debe retornar un arreglo de heroes de DC', () => { 

    const owner = 'DC';

    const heros = getHeroesByOwner(owner);

    expect(heros.length).toBe(3);
    expect(heros).toEqual( [{ id: 1, name: 'Batman', owner: 'DC'},  {    id: 3,    name: 'Superman',    owner: 'DC'},  {    id: 4,    name: 'Flash',    owner: 'DC'}])

  });

  test('getHeroeByOwner debe retornar un arreglo de heroes de Marvel', () => { 

    const owner = 'Marvel';

    const heros = getHeroesByOwner(owner);

    expect(heros.length).toBe(2);
    expect(heros).toEqual(heroes.filter((hero) => hero.owner === owner) ) //deesta manera es mas flexible ya que si se realiza un cambio en la base de datos de los heroes, no afectara al funcionamiento del test

  });


})