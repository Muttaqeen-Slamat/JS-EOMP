//
document.querySelector(['#year']).textContent = new Date().getFullYear()


let products = JSON.parse(localStorage.getItem('products')) ?
JSON.parse(localStorage.getItem('products')):localStorage.setItem('products', JSON.stringify(
    [
        {
            id: 1,
            name: 'Logitech G915',
            price: 5000,
            image: 'https://i.postimg.cc/W40F76VW/Logitech-G915.png',
            spec: 'Tenkeyless, Wireless, Mechanical, Low Profile, Switch Options, Lightsync RGB, Tactile'
        },
        {
            id: 2,
            name: 'Higround BLACKICE',
            price: 2500,
            image: 'https://i.postimg.cc/kgmRcQWh/Screenshot-2023-12-05-092527.png',
            spec: '65% Keyboard, Wireless, Mechanical, Hot Swappable Switches, PBT Keycaps, Dedicated Arrow Keys, White Flame Switch'
        },
        {
            id: 3,
            name: 'Corsair K100 - Midnight Gold',
            price: 3000,
            image: 'https://i.postimg.cc/SNzbx1N2/Screenshot-2023-12-05-094839.png',
            spec: 'Aluminum design, RGB, Corsair OPX Switches, Media Control, ICUE Wheel, Linear Key Switches, 1.0mm Actuation, Macro Keys'
        },
        {
            id: 4,
            name: 'Da Vinci Resolve Editor',
            price: 10000,
            image: 'https://i.postimg.cc/jjN17c88/Screenshot-2023-12-05-102115.png',
            spec: 'Search Dial Control, Wired USB Type-C or Wireless, USB Hub, Metal Design, Dedicated Keys, Design for Desktop'
        },
        {
            id: 5,
            name: 'Razer Huntsman Mini',
            price: 750,
            image: 'https://i.postimg.cc/NjV5f3jr/Razer-Huntsman-mini.jpg',
            spec: ' 60%, Wired, Onboard Memory, PBT Keycaps, Clicky Optical Switches, Chroma RGB Lightning'
        }
    ]
))

let productsWrapper = document.querySelector('[featured-products]')

function displayProducts(){
    productsWrapper.innerHTML = ''
    try{
        if(products){
            products.forEach( products =>{
                productsWrapper.innerHTML += `<div class="card">
                <img src="${products.image}" class="card-img-top" alt="${products.id}">
                <div class="card-body">
                  <h5 class="card-title">${products.name}</h5>
                  <p class="card-text">${products.spec}</p>
                  <p>Price: R${products.price}</p>
                  <button class="btn btn-primary">Cart</button>
                </div>
              </div>`
            })
        }else {
            productsWrapper.innerHTML = 'No product'
        }

    }catch(e){
        console.log(e.message);
    }

}
displayProducts()

let search = document.querySelector('[search-product]')

search.addEventListener('keyup', ()=>{
    try{
        let searchItem = products.filter( prod=> {
            return prod.name.toLowerCase().includes(search.value.toLowerCase())
        })
        if(searchItem){
          productsWrapper.innerHTML = ''
          searchItem.forEach( item =>{
            productsWrapper.innerHTML += `<div class="card">
            <img src="${item.image}" class="card-img-top" alt="${item.id}">
            <div class="card-body">
              <h5 class="card-title">${item.name}</h5>
              <p class="card-text">${item.spec}</p>
              <p>Price: R${item.price}</p>
              <button class="btn btn-primary">Cart</button>
            </div>
          </div>`
          })  
        }else{
            displayProducts()
        }
    }catch(e){
        console.log(e.message);
    }
})