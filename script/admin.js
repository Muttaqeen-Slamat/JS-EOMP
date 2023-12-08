//
document.querySelector(['#year']).textContent = new Date().getFullYear()

let admin = JSON.parse(localStorage.getItem('products'))

let adminTable = document.querySelector('[admin-staff]')

function adminContent() {
  try {
      let products = JSON.parse(localStorage.getItem('products'));
      adminTable.innerHTML = '';

      products.forEach((product, i) => {
          adminTable.innerHTML += `
          <tr class="text-center">
              <td>${product.name}</td>
              <td><img src="${product.image}" id="adminImg"></td>
              <td>
                  <button id="adminEdit" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal${i}">
                      <i class="bi bi-magic"></i>
                  </button>
              </td>
              <td>
                  <button id="adminDelete" admin-delete onclick='deleteProduct(${i})'>
                      <i class="bi bi-trash3"></i>
                  </button>
              </td>
          </tr>

          <!-- Modal -->
          <div class="modal fade" id="exampleModal${i}" tabindex="-1" aria-labelledby="exampleModalLabel" add-Modal aria-hidden="true">
              <div class="modal-dialog">
                  <div class="modal-content">
                      <div class="modal-header">
                          <h1 class="modal-title fs-5" id="exampleModalLabel">${product.name}</h1>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                          <label for="recipient-name-${i}" class="col-form-label">Name:</label>
                          <input type="text" class="form-control" id="recipient-name-${i}" value="${product.name}">
                      </div>
                      <div class="modal-body">
                          <label for="recipient-spec-${i}" class="col-form-label">Specs:</label>
                          <input type="text" class="form-control" id="recipient-spec-${i}" value="${product.spec}">
                      </div>
                      <div class="modal-body">
                          <label for="recipient-price-${i}" class="col-form-label">Price:</label>
                          <input type="text" class="form-control" id="recipient-price-${i}" value="${product.price}">
                      </div>
                      <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                          <button type="button" class="btn btn-primary" onclick='updateProduct(${i})'>Save changes</button>
                      </div>
                  </div>
              </div>
          </div>`;
      });
  } catch (e) {
      console.log(e.message);
  }
}

adminContent()


let sort = document.querySelector('[admin-sort]');

function adminSort() {
    try {
        let products = JSON.parse(localStorage.getItem('products'));
        products.sort((a, b) => {
            return a.name.localeCompare(b.name);
        });
        localStorage.setItem('products', JSON.stringify(products));
        adminContent();
    } catch (e) {
        console.log(e.message);
    }
}

sort.addEventListener('click', adminSort);


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


//function for modal to function 

function updateProduct(itemIndex) {
  try {
      let products = JSON.parse(localStorage.getItem('products'));

      // Get values from the modal inputs
      let newName = document.querySelector(`#recipient-name-${itemIndex}`).value;
      let newSpec = document.querySelector(`#recipient-spec-${itemIndex}`).value;
      let newPrice = document.querySelector(`#recipient-price-${itemIndex}`).value;

      // Update the corresponding product in the array
      products[itemIndex].name = newName;
      products[itemIndex].spec = newSpec;
      products[itemIndex].price = newPrice;

      // Save the updated products to localStorage
      localStorage.setItem('products', JSON.stringify(products));

      adminContent();
      location.reload()
  } catch (e) {
      console.log(e.message);
  }
}adminContent()

//add not working 

let addWrapper = document.querySelector('[new-modal]');

function addNewProducts() {
    try {
        let products = JSON.parse(localStorage.getItem('products')) || [];
        let item = {
            id: products.length + 1,
            name: document.querySelector('#modal-name').value,
            spec: document.querySelector('#modal-spec').value,
            price: document.querySelector('#modal-price').value,
            image: document.querySelector('#modal-image').value // Add a default value for image
        };

        // Add the new product to the products array
        products.push(item);
        localStorage.setItem('products', JSON.stringify(products));
        location.reload()

        // Call adminContent to update the table with the new product
        adminContent();
    } catch (error) {
        console.log(error.message);
    }
}

