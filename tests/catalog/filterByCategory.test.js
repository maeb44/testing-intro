const products = require('../../src/data/products');
const { filterByCategory } = require('../../src/catalog');

describe('filterByCategory', () => {
  test.each([
    ['all', [1, 2, 3, 4, 5, 6]],
    [undefined, [1, 2, 3, 4, 5, 6]],
    ['', [1, 2, 3, 4, 5, 6]],
    ['electronics', [1, 2]],
    ['books', [3, 6]],
    ['home', [4, 5]],
    ['clothes', []],
    ['toys', []],
    ['sports', []],
  ])('filter = фильтр %f возвращает %a', (filter, id) => {
    const filteredProducts = filterByCategory(products, filter);
    expect(filteredProducts.map((product) => product.id)).toEqual(id);
  });
  // test("'all' возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
  //   const filter = 'all';
  //   const arrOfId = [1, 2, 3, 4, 5, 6];
  //   const filteredProducts = filterByCategory(products, filter);
  //   expect(filteredProducts.map((product) => product.id)).toEqual(arrOfId);
  // });
  // test('undefined возвращает товары с ID [1, 2, 3, 4, 5, 6]', () => {
  //   const filter = undefined;
  //   const arrOfId = [1, 2, 3, 4, 5, 6];
  //   const filteredProducts = filterByCategory(products, filter);
  //   expect(filteredProducts.map((product) => product.id)).toEqual(arrOfId);
  // });
  // test('пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]', () => {
  //   const filter = '';
  //   const arrOfId = [1, 2, 3, 4, 5, 6];
  //   const filteredProducts = filterByCategory(products, filter);
  //   expect(filteredProducts.map((product) => product.id)).toEqual(arrOfId);
  // });
  // test("'electronics' возвращает товары с ID [1, 2]", () => {
  //   const filter = 'electronics';
  //   const arrOfId = [1, 2];
  //   const filteredProducts = filterByCategory(products, filter);
  //   expect(filteredProducts.map((product) => product.id)).toEqual(arrOfId);
  // });
  // test("'books' возвращает товары с ID [3, 6]", () => {
  //   const filter = 'books';
  //   const arrOfId = [3, 6];
  //   const filteredProducts = filterByCategory(products, filter);
  //   expect(filteredProducts.map((product) => product.id)).toEqual(arrOfId);
  // });
  // test("'home' возвращает товары с ID [4, 5]", () => {
  //   const filter = 'home';
  //   const arrOfId = [4, 5];
  //   const filteredProducts = filterByCategory(products, filter);
  //   expect(filteredProducts.map((product) => product.id)).toEqual(arrOfId);
  // });
  // test("'clothes' возвращает пустой массив", () => {
  //   const filter = 'clothes';
  //   const arrOfId = [];
  //   const filteredProducts = filterByCategory(products, filter);
  //   expect(filteredProducts.map((product) => product.id)).toEqual(arrOfId);
  // });
  // test("'toys' возвращает пустой массив", () => {
  //   const filter = 'toys';
  //   const arrOfId = [];
  //   const filteredProducts = filterByCategory(products, filter);
  //   expect(filteredProducts.map((product) => product.id)).toEqual(arrOfId);
  // });
  // test("'sports' возвращает пустой массив", () => {
  //   const filter = 'sports';
  //   const arrOfId = [];
  //   const filteredProducts = filterByCategory(products, filter);
  //   expect(filteredProducts.map((product) => product.id)).toEqual(arrOfId);
  // });
});
