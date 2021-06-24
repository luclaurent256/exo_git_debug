const products = [
  {
    product: "chaise",
    price: 120,
    quantity: 1,
  },
  {
    product: "table",
    price: 1200,
    quantity: 5,
  },
  {
    product: "vase",
    price: 420,
    quantity: 4,
  },
];

function getTotalProductAndAmount(products) {
  let totalAmount = 0;
  let totalProduct = 0;
  for (let i = 0; i < products.length; i++) {
    totalAmount += products[i].price;
    totalProduct += products[i].quantity;
  }
  return `montant total: ${totalAmount}, quantité total : ${totalProduct} !!!!!!!!!!`;
}

const result = getTotalProductAndAmount(products);

console.log(result);
