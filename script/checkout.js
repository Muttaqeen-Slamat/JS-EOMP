//
document.querySelector(['#year']).textContent = new Date().getFullYear()

let checkout = JSON.parse(localStorage.getItem('checkout'))

let checkoutWrapper = document.querySelector('[featured-checkout]')
let space = document.querySelector('[space]')

let group = Object.groupBy(checkout, item => item.name )

function displayCheckout(){
    checkoutWrapper.innerHTML = ''
    try{
        if(checkout.length >= 0){
            checkout.forEach( item => {
                checkoutWrapper.innerHTML += `
                  <tr>
                    <th scope="row">1</th>
                    <td>${item.name}</td>
                    <td><input></td>
                    <td>R${item.price}</td>
                  </tr>
                  `
            })
        }else{
            space.innerHTML = `<div class="text-center">No Items In Cart <i class="bi bi-emoji-frown"></i></div>`
        }
    }catch(e){
        console.log(e.message);
    }
}
displayCheckout()

let clear = document.querySelector('[clear-table]')

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

clear.addEventListener('click', clearBtn);
