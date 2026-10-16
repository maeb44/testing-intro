function addToCart(cart, product, quantity) {
  if (quantity <= 0 || !Number.isInteger(quantity))
    throw new RangeError('quantity should be more than 0');
  if (!product || typeof product !== 'object') throw new Error('no product');

  const copyOfCart = structuredClone(cart);
  const productInCart = copyOfCart.find((e) => e.id === product.id);
  const currentQty = productInCart ? productInCart.quantity : 0;
  const max = product.stock;

  if (currentQty + quantity > max)
    throw new RangeError('maximum quantity of the item reached');

  if (productInCart) productInCart.quantity += quantity;
  else copyOfCart.push({ ...product, quantity });

  return copyOfCart;
}
function changeQuantity(cart, id, quantity) {
  if (quantity <= 0 || !Number.isInteger(quantity))
    throw new RangeError('quantity should be more than 0');

  const productInCart = cart.find((e) => e.id === id);
  if (!productInCart) return cart;

  const currentQty = productInCart.quantity;
  const max = productInCart.stock;

  if (quantity > max)
    throw new RangeError('maximum quantity of the item reached');

  productInCart.quantity = quantity;

  return cart;
}
function removeFromCart(cart, id) {
  return cart.filter((e) => e.id !== id);
}
function calculateCartSubtotal(cart) {
  return cart.reduce((acc, el) => acc + el.price * el.quantity, 0);
}
function calculateOrderTotal(cart, promo) {
  const subtotal = calculateCartSubtotal(cart);

  let delivery = subtotal >= 50000 ? 0 : 30000;

  const discount = subtotal >= 20000 && promo === 'SAVE10' ? subtotal * 0.1 : 0;

  const total = subtotal + delivery - discount;

  return { subtotal, discount, delivery, total };
}

const cartApi = {
  addToCart,
  changeQuantity,
  removeFromCart,
  calculateCartSubtotal,
  calculateOrderTotal,
};

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;
