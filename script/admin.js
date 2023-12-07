//
document.querySelector(['#year']).textContent = new Date().getFullYear()

let adminTable = document.querySelector('[admin-staff]')

function adminContent(){
    try{
        let products = JSON.parse(
            localStorage.getItem('products')
        )
        adminTable.innerHTML = ''
        products.forEach( (product, i) =>{
            adminTable.innerHTML += `
            <tr>
                <td> ${product.name} </td>
                <td> <img src="${product.image}" id="adminImg"></td>
                <td> <button id="adminEdit"> <i class="bi bi-magic"></i> </button></td>
                <td> <button id="adminDelete"> <i class="bi bi-trash3"></i> </button></td>
            </tr>`
        })
    }catch(e){

    }
}

adminContent()