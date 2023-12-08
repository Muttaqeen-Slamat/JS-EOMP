//
document.querySelector('#year').textContent = new Date().getFullYear();

let checkout = JSON.parse(localStorage.getItem('checkout')) || [];

let checkoutWrapper = document.querySelector('[featured-checkout]');
let space = document.querySelector('[space]');

// Define a simple groupBy function
Object.groupBy = function (array, keyGetter) {
    const map = new Map();
    array.forEach((item) => {
        const key = keyGetter(item);
        const collection = map.get(key);
        if (!collection) {
            map.set(key, [item]);
        } else {
            collection.push(item);
        }
    });
    return map;
};

let group = Object.groupBy(checkout, (item) => item.name);

function displayCheckout() {
    checkoutWrapper.innerHTML = '';
    try {
        if (checkout.length > 0) {
            for (const [name, items] of group.entries()) {
                checkoutWrapper.innerHTML += `
                  <tr>
                    <th scope="row">1</th>
                    <td>${name}</td>
                    <td>${items.length}</td>
                    <td>R${items[0].price * items.length}</td>
                  </tr>
                  `;
            }
        } else {
            space.innerHTML = `<div class="text-center">No Items In Cart ☹️</div>`;
        }
    } catch (e) {
        console.log(e.message);
    }
}

function clearBtn() {
    if (checkout.length > 0) {
        checkout.splice(0, checkout.length);
        displayCheckout();
        clearedCheckout();
    }
}

function clearedCheckout() {
    localStorage.setItem('checkout', JSON.stringify(checkout));
}

document.querySelector('[clear-table]').addEventListener('click', clearBtn);

displayCheckout();

function buy(){
    checkoutWrapper.innerHTML = 'Thank You For Your Purchase'
}