var data = [
    {img:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80", product: "Laptop", addtocart: true},
    {img:"https://images.unsplash.com/photo-1613141411244-0e4ac259d217?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80", product: "Mouse", addtocart: true},
    {img:"https://images.unsplash.com/photo-1487215078519-e21cc028cb29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80", product: "Headphones", addtocart: true},
    {img:"https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80", product: "Smart watch", addtocart: true},
    {img:"https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80", product: "Keybord", addtocart: true},
    {img:"https://images.unsplash.com/photo-1537589376225-5405c60a5bd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80", product: "i Phone", addtocart: true},
    {img:"https://images.unsplash.com/photo-1542751110-97427bbecf20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1984&q=80",    product: "Tablet", addtocart: true},
    {img:"https://images.unsplash.com/photo-1459550428001-4ed6ca421293?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1397&q=80", product: "VR Gaming", addtocart: true},
    {img:"https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1638&q=80", product: "Camera", addtocart: true},
    {img:"https://images.unsplash.com/photo-1511300961358-669ca3ad05af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1667&q=80", product: "Earpods", addtocart: true},
    {img:"https://images.unsplash.com/photo-1572008470047-07990888f81b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80", product: "Fitband", addtocart: true},
    {img:"https://images.unsplash.com/photo-1507646227500-4d389b0012be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80", product: "Speakers", addtocart: true},
]
 
var finalCart = [];

function showcards(val){
    var temp = "";
    val.forEach(function(elem, index) { 
        temp += `  <div class="card">
        <div id="top">
            <img src="${elem.img}" alt="">
        </div>

        <div id="btm">
             <h2>${elem.product}</h2>
             <p>Lorem ipsum dolor sit. Lorem ipsum dolor sit amet</p>
             <button id="${index}">${elem.addtocart? "Buy Now": "Added"}</i></button>
        </div>
   </div>`
    });
    document.querySelector("#cardswraper").innerHTML = temp
}

document.querySelector("#cardswraper").addEventListener("click", function(dets){
    data[dets.target.id].addtocart = !data[dets.target.id].addtocart;
    showcards(data)

    if(finalCart.indexOf(dets.target.id) === -1){
        finalCart.push(dets.target.id);
    }
    // console.log(finalCart);

  function cart(){
    var crttemp= '';
    if(finalCart){
        finalCart.forEach(function(val , i){
           crttemp +=  ` <div class="card">
           <div id="lft">
               <img src="${data[val].img}" alt="">
           </div>
           <div id="rgt">
                <h2>${data[val].product}</h2>
                <p>Lorem ipsum dolor sit. Lorem ipsum dolor sit amet</p>
                <button id="${i}">${data[val].addtocart? "Buy Now": "Remove"}</button>
           </div>
       </div>`
        })
        document.querySelector("#itemscontainer").innerHTML = crttemp ;
    }
    document.querySelector("#cart span").textContent = finalCart.length;
  }
  cart()
//   console.log(finalCart);
})           


document.querySelector("#itemscontainer").addEventListener("click", function(dets){
    finalCart.splice(dets.target.id, 1)
    function update(){
        var crttemp= '';
        if(finalCart){
            finalCart.forEach(function(val , i){
               crttemp +=  ` <div class="card">
               <div id="lft">
                   <img src="${data[val].img}" alt="">
               </div>
               <div id="rgt">
                    <h2>${data[val].product}</h2>
                    <p>Lorem ipsum dolor sit. Lorem ipsum dolor sit amet</p>
                    <button id="${i}">${data[val].addtocart? "Buy Now": "Remove"}</button>
               </div>
           </div>`
            })
            document.querySelector("#itemscontainer").innerHTML = crttemp ;
        }
        document.querySelector("#cart span").textContent = finalCart.length;
      }
      update()
})

showcards(data)

var cart = document.querySelector("#cart")
var items = document.querySelector("#items")
var cancel = document.querySelector("#cancel")
cart.addEventListener("click", function(){
    items.style.display = "initial"
})

cancel.addEventListener("click", function(){
    items.style.display = "none"
})
