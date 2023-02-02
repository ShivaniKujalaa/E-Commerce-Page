const productsData = [
    {    
        "id" : 1,
        "title" : "Macbook",
        "image" : "https://demo.opencart.com/image/cache/catalog/demo/macbook_1-200x200.jpg",
        "description" : "Intel Core 2 Duo processor Powered by an Intel Core 2 Duo processor at speeds up to 2.1...",
        "price" : 200

    } ,
    {  
        "id" : 2,
        "title" : "iPhone",
        "image" : "https://demo.opencart.com/image/cache/catalog/demo/iphone_1-200x200.jpg",
        "description" : "iPhone is a revolutionary new mobile phone that allows you to make a call by simply tapping a nam.",
        "price" : 350
    },
    {
        "id" : 3,
        "title" : "Apple",
        "image" : "https://demo.opencart.com/image/cache/catalog/demo/apple_cinema_30-200x200.jpg" ,
        "description" : "The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel resolution. Designed",
        "price" : 118
    },
    
]

const selectedProductIds = []
const productElement = document.getElementById("rendering-section");

const productModified = productsData.filter(function(product) {
    product.priceModified = product.price.toFixed(2);
    return product
})
//console.log(productModified)
renderProductCards(productModified)

function renderProductCards(product) {
    let productsCard = '';

for(let i=0;i<productsData.length ; i++){
    //console.log(productsData[i])
    productsCard = productsCard + renderProductCard(productsData[i]) 
}
productElement.innerHTML = productsCard;
captureFavouriteButtonClick();
}


function renderProductCard(product) {
    return ` <div class="col-12 col-md-4">
    <div class="card" style="width: 18rem;">
        <img src="${product.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${product.title}</h5>
          <p class="card-text">${product.description}</p>
          <div><strong> ${product.priceModified}</strong></div>
          <div class="btn-group w-100" role="group" aria-label="Basic example">
            <button type="button" class="btn">
                <span class="material-icons-outlined">
                    shopping_cart
                    </span>
            </button>
            <button type="button" class="btn btn-favourite" data-id="${product.id}">
                <span class="material-icons-outlined">
                    favorite_border
                    </span>
            </button>
            <button type="button" class="btn">
                <span class="material-icons-outlined">
                    compare_arrows
                    </span>
            </button>
          </div>
        </div>
      </div>
    </div>`
}

// Filtering Products

const inputElement = document.getElementById("input-element");
inputElement.addEventListener("keyup" , function(event) {
    const term = inputElement.value .toLowerCase();
    //console.log(term)


    const productFiltered = productModified.filter(function(product) {
       const titleLowerCase = product.title.toLowerCase();
       return titleLowerCase.includes(term) === true;
    })
    
   renderProductCards(productFiltered)



});


function captureFavouriteButtonClick() {
  const product$ = document.getElementById("rendering-section");
  const favButton  = product$.querySelectorAll(".btn-favourite");
  favButton.forEach(function(btn$) {
    btn$.addEventListener("click" , function(event) {
        const target = event.target;
        const favouriteBtn$ = target.closest(".btn-favourite")
        const selectedId = favouriteBtn$.getAttribute("data-id");
        //console.log(selectedId)
        const selectedProductIndex = selectedProductIds.indexOf(selectedId);
        const icon$ = btn$.querySelector(".material-icons-outlined");
        

        if(selectedProductIndex != -1) {
            selectedProductIds.splice(selectedProductIndex,1);
            icon$.innerText =  "favorite_border";

        } else{
            selectedProductIds.push(selectedId);
            icon$.innerText =  "favorite";
        }

        console.log(selectedProductIds)
        
        const wishListCounter$ = document.getElementById("wishListCounter");
        wishListCounter$.innerText = selectedProductIds.length;

        
    });
  })
}