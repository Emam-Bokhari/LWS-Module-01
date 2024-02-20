document.getElementById("price")
document.getElementById("button")
document.getElementById("total")

let productPrice=500
let totalPrice=0

price.innerText=`Price: $${productPrice}`
total.innerText=`Total: ${0}`

button.addEventListener("click",()=>{
    totalPrice+=productPrice

    // update Ui
    total.innerText=`${totalPrice}`
})