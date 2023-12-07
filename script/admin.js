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
            <tr class="text-center">
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

let add = document.querySelector('[admin-add]')


//not working but is the code from products js
let sort = document.querySelector('[admin-sort]')
// function adminSort() {
//     product.sort((a, b) => {
//         return a.name.localeCompare(b.name);
//     });
//     adminContent();
// }
// sort.addEventListener('click', adminSort)







//for the delete function for admin edits 
// function deleteProduct(){
//     try{
//         let index = products.findIndex(a =>{
//             return a.id == item.id
//         })
//         products.splice(index, 1)
//         localStorage.setItem('products', JSON.stringify(products))
//     }catch(e){
//         console.log(e.message);
//     }
// }

