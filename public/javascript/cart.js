async function cartItems() {
    const response = await fetch('/api/shoes/cart', {
        method: 'get',
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        document.location.reload();
    } else {
        alert(response.statusText);
    }
}