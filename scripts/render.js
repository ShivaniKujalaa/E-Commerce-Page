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