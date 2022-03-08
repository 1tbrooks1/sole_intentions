// once shoe added to the cart , stripe_price is pushed into array

const cartCheckout = (shoe) => {
  let line_items = [];
  shoe.push(line_items);
};

// stripe price_id of shoes in cart have to go into an array

// add to cart JS function
// where every shoe price_id that is added to cart
// is also pushed into an array
// when checkout session post req is sent
// array gets passed through with req.body.price_id
// for each shoe
// grabbed by line_item array of checkout session route
