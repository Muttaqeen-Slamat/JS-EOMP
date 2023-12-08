//
document.querySelector("#year").textContent = new Date().getFullYear();
//defining my checkout local storage
let checkout = JSON.parse(localStorage.getItem("checkout")) || [];

let checkoutWrapper = document.querySelector("[featured-checkout]");
let space = document.querySelector("[space]");
let totalPrice = 0
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
//displaying my added to cart products
function displayCheckout() {
  checkoutWrapper.innerHTML = "";
  totalPrice = 0
  try {
    if (checkout.length > 0) {
      for (let [name, items] of group.entries()) {
        let subtotal = items[0].price * items.length;
        totalPrice += subtotal
        checkoutWrapper.innerHTML += `
                  <tr>
                    <th scope="row">1</th>
                    <td>${name}</td>
                    <td>${items.length}</td>
                    <td>R${items[0].price * items.length}</td>
                  </tr>
                  `;
                  checkoutWrapper.innerHTML += `
                  <tr>
                    <th scope="row" colspan="3">Purchase Order Amount Owed</th>
                    <td>R${totalPrice}</td>
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
//button for the clear to remove all the carted items
function clearBtn() {
  if (checkout.length > 0) {
    checkout.splice(0, checkout.length);
    displayCheckout();
    clearedCheckout();
  }
}
//updated to the local storage 
function clearedCheckout() {
  localStorage.setItem("checkout", JSON.stringify(checkout));
}

document.querySelector("[clear-table]").addEventListener("click", clearBtn);

displayCheckout();
//when pressing the purchase button it display the text thank you for your purchase
function buy() {
  checkoutWrapper.innerHTML = "Thank You For Your Purchase";
}
