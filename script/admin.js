//
document.querySelector(['#year']).textContent = new Date().getFullYear()

let search = document.querySelector('[search-product]')

search.addEventListener('keyup', () => {
    try {
        let searchItem = products.filter(prod => {
            return prod.name.toLowerCase().includes(search.value.toLowerCase())
        })
        if (searchItem.length > 0) {
            // Clear existing content before displaying search results
            productsWrapper.innerHTML = '';
            searchItem.forEach(item => {
                productsWrapper.innerHTML += `<div class="card">
                    <img src="${item.image}" class="card-img-top" alt="${item.id}">
                    <div class="card-body">
                        <h5 class="card-title">${item.name}</h5>
                        <p class="card-text">${item.spec}</p>
                        <p>Price: R${item.price}</p>
                        <button class="btn btn-primary">Cart</button>
                    </div>
                </div>`;
            })
        } else {
            // If no search results, display all products
            displayProducts();
        }
    } catch (e) {
        console.log(e.message);
    }
})