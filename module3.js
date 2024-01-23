import basketModule from "./ch6/basketModule.mjs";

basketModule.addItem({
    item: 'bread',
    price: 0.5
});

basketModule.addItem({
    item: 'butter',
    price: 0.3
})

console.log(basketModule.getItemCount());

console.log(basketModule.getTotal());

console.log(basketModule.basket);
console.log(basket);