// async function filterBrand(event) {
//     event.preventDefault();

//     const brand = document.querySelector('#brand-').value();

//     console.log(brand)

//     const response = await fetch('/api/shoe/' + brand, {
//         method: 'get',
//         body: JSON.stringify({
//             brand: brand
//         }),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     });

//     if (response.ok) {
//         document.location.replace('api/shoe/' + brand);
//     } else {
//         alert(response.statusText);
//     }
// }

// document.querySelector('#brand-').addEventListener('click', filterBrand);