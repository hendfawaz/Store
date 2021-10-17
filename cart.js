window.onload = function() {
    let myCart = JSON.parse(window.localStorage.getItem('CartArr'));
    let AllCart=document.getElementById("allcart")
    for (i=0 ; i<=myCart.length; i++){

        console.log(myCart[i])
        AllCart.innerHTML +=`<div class="allcart" id="allcart">
        <div class="item">
            <img src="`+myCart[i].imgeSrc+`"/>
            <h3>`+myCart[i].name+`</h3>
           <div><p> <b>price:</b>`+myCart[i].price+`SR </p></div>
            <button>Remove </button>
            </div>
        </div>`

    
    }
    
    
    
    
    console.log(myCart);
    };