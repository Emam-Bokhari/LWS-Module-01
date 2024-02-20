// catch dom element
document.getElementById("price")
document.getElementById("button")
document.getElementById("total")

// state or data
let productPrice=5000
let totalPrice=0

// set productPrice initially
price.innerText=`৳ ${productPrice}`
total.innerText=`Total: ৳ ${0}`

button.addEventListener("click",()=>{
    totalPrice+=productPrice 

    // update ui
    total.innerText=`${totalPrice}`
})



