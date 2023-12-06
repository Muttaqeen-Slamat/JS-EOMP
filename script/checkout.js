//
document.querySelector(['#year']).textContent = new Date().getFullYear()

let checkout = JSON.parse(localStorage.getItem('checkout'))

let checkoutWrapper = document.querySelector('[featured-checkout]')
let space = document.querySelector('[space]')

function displayCheckout(){
    checkoutWrapper.innerHTML = ''
    try{
        if(checkout){
            checkout.forEach( items => {
                checkoutWrapper.innerHTML += `
                  <tr>
                    <th scope="row">1</th>
                    <td>${items.name}</td>
                    <td>#</td>
                    <td>R${items.price}</td>
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

function clearFunc(){
    checkout.splice()
}

clear.addEventListener('click', clearFunc)

let group = Object.groupBy(checkout,item => item.name)

console.log(group);