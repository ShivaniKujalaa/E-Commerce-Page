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