async function addCart(event) {
  event.preventDefault();

  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  const response = await fetch('/api/shoe/addtocart/' + id, {
    method: 'PUT',
    body: JSON.stringify({
      shoe_id: id,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    document.location.replace('/api/shoe/cart');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('#cart-button').addEventListener('click', addCart);
