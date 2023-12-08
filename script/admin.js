//
document.querySelector(['#year']).textContent = new Date().getFullYear()

let admin = JSON.parse(localStorage.getItem('products'))

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
                <td> <button id="adminEdit" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"> <i class="bi bi-magic"></i> </button></td>
                <td> <button id="adminDelete" admin-delete onclick='deleteProduct(${i})'> <i class="bi bi-trash3"></i> </button>


                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">${product.name}</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        <label for="recipient-name" class="col-form-label">Name:</label>
                        <input type="text" class="form-control" id="recipient-name">${product.name}
                      </div>
                      <div class="modal-body">
                        <label for="recipient-name" class="col-form-label">Specs:</label>
                        <input type="text" class="form-control" id="recipient-name">${product.spec}
                      </div>
                      <div class="modal-body">
                        <label for="recipient-name" class="col-form-label">Price:</label>
                        <input type="text" class="form-control" id="recipient-name">R${product.price}
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                      </div>
                    </div>
                  </div>
                </div>
                
                </td>
            </tr>`
        })
    }catch(e){

    }
}

adminContent()

// let add = document.querySelector('[admin-add]')

// function addProduct(){

// }

// add.addEventListener('click',)


//not working but is the code from products js
let sort = document.querySelector('[admin-sort]')
// function adminSort() {
//     product.sort((a, b) => {
//         return a.name.localeCompare(b.name);
//     });
//     adminContent();
// }
// sort.addEventListener('click', adminSort)





let del = document.querySelector('[admin-delete]')

//for the delete function for admin edits 

function deleteProduct(index) {
  try {
      let products = JSON.parse(localStorage.getItem('products'));
      products.splice(index, 1);
      localStorage.setItem('products', JSON.stringify(products));
      adminContent();
  } catch (e) {
      console.log(e.message);
  }
}


//for adding need a modal to add it to products
//get reference from the products.js





//function for modal to function 

// function updateProduct(item){
//     try{
//         this.id = id;
//         this.make = document.querySelector('[#admin-make${item.id}]').value
//         this.spec = document.querySelector('[#admin-spec${item.id}]').value
//         this.amount = document.querySelector('[#admin-amount${item.id}]').value
//         this.action = document.querySelector('[#admin-action${item.id}]').value
//         this.image = document.querySelector('[#admin-image${item.id}]').value

//         let itemindex = admin.findIndex((data)=>{
//             return data.id ===item.id
//         })

//         console.log(itemindex);
//         console.log(this);

//         products(itemindex) = Object.assign({}, this);
//         localStorage.setItem('products',JSON.stringify(products))
//         console.log(products);
//         adminContent()
//         location.reload()
//     }catch(e){
//         console.log(e.message);
//     }
// }