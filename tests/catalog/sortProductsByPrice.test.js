const products = require('../../src/data/products');
const { sortProductsByPrice } = require('../../src/catalog');

describe('sortProductsByPrice', () => {
  const sortGroup1 = [1, 3, 4].map((id) => products.find((p) => p.id === id));
  const sortGroup2 = [5, 2, 6].map((id) => products.find((p) => p.id === id));
  test.each([
    { products: products, sortStr: 'asc', sortedProducts: [3, 6, 5, 4, 2, 1] },
    { products: products, sortStr: '', sortedProducts: [3, 6, 5, 4, 2, 1] },
    { products: sortGroup1, sortStr: 'asc', sortedProducts: [3, 4, 1] },
    { products: products, sortStr: 'desc', sortedProducts: [1, 2, 4, 5, 6, 3] },
    { products: sortGroup1, sortStr: 'desc', sortedProducts: [1, 4, 3] },
    { products: sortGroup2, sortStr: 'desc', sortedProducts: [2, 5, 6] },
  ])(
    `sortProductsByPrice($products.length,$sortStr) => ID $sortedProducts`,
    ({ products, sortStr, sortedProducts }) => {
      const result = sortProductsByPrice(products, sortStr).map((e) => e.id);
      expect(result).toEqual(sortedProducts);
    },
  );
  // test("все товары c 'asc' сортируются как [3, 6, 5, 4, 2, 1]", () => {});
  // test.todo('все товары без направления сортируются как [3, 6, 5, 4, 2, 1]');
  // test.todo("товары [1, 3, 4] c 'asc' сортируются как [3, 4, 1]");
  // test.todo("все товары c 'desc' сортируются как [1, 2, 4, 5, 6, 3]");
  // test.todo("товары [3, 1, 4] c 'desc' сортируются как [1, 4, 3]");
  // test.todo("товары [5, 2, 6] c 'desc' сортируются как [2, 5, 6]");
  test.each([
    { products: sortGroup1, sortStr: 'asc' },
    { products: sortGroup1, sortStr: 'desc' },
    { products: products, sortStr: '' },
  ])(
    `sortProductsByPrice($products.length,$sortStr) не изменяет исходный массив($products)`,
    ({ products, sortStr }) => {
      const copyOfProducts = [...products];
      sortProductsByPrice(products, sortStr);
      expect(products).toEqual(copyOfProducts);
    },
  );
  // test.todo("'asc' не меняет исходный массив [1, 3, 4]");
  // test.todo("'desc' не меняет исходный массив [1, 3, 4]");
  // test.todo('направление по умолчанию не меняет исходный массив всех товаров');
});
