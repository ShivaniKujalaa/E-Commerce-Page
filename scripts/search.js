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