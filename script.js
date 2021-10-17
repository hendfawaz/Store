// document.onload = function () {
    
 
    let Items = document.getElementById("Items");
    
let ArrAllItems =[
  
    {name:"TRAVEL MUGS", material: "Plastic and Stainless Steel",
    price: '190SAR',
    imgeSrc:"imges/images5.jpg"},
    { name:"Ceramic Cup", material: " Ceramic And Granite ",
    price: '179.87SAR',
    imgeSrc:"imges/images9.jpg"},
    
    { name:"Ceramic Cup", material: "Ceramic And Plastic",
    price: '100.90SAR',
    imgeSrc:"imges/images10.jpg"},
    
    { name:"Acrilic Cup", material: " Acrilic ",
    price: '100SAR',
    imgeSrc:"imges/images12.jpg"},

    { name:"Granite Cup",material: " Granite ",
    price: '199.70SAR',
    imgeSrc:"imges/images11.jpg"},
    
    {name:"Glass Cup",material: "Glass",
    price: '90.89SAR',
    imgeSrc:"imges/images1.jpg"},
    
    
]
localStorage.clear()
for (let i =0; i < ArrAllItems.length; i++){
  Items.innerHTML+=`<div class="col">
  <img src=`+ArrAllItems[i].imgeSrc+` class="card-img-top" alt="...">
  <h5 class="card-title">`+ArrAllItems[i].name+`</h5>
  <p class="card-text">Material :`+ArrAllItems[i].material+`</p>
      <small class="text-muted">Price :`+ArrAllItems[i].price+`</small>
      <button class="ShopItem" id=`+i+`>ADD TO CART</button>
      </div>`
    }
    let AddBtns=document.getElementsByClassName("ShopItem");
 let CartArr = [] ;
    for( let g =0; g < AddBtns.length; g++){
        AddBtns[g].addEventListener("click", function add() {
        // console.log(AddBtns[g].id);
        CartArr.push(ArrAllItems[g]);
        window.localStorage.setItem('CartArr', JSON.stringify(CartArr));
        console.log(CartArr)
        alert("the total price is "+ArrAllItems[g].price)
    })
   console.log("yiij") 
}

// }