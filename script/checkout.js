//
document.querySelector(['#year']).textContent = new Date().getFullYear()

let checkout = JSON.parse(localStorage.getItem('checkout'))

let checkoutWrapper = document.querySelector('[featured-checkout]')

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
            checkoutWrapper.innerHTML = `no items`
        }
    }catch(e){
        console.log(e.message);
    }
}
displayCheckout()

let clear = document.querySelector('[clear-table]')