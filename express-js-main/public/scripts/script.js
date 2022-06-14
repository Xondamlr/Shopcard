const prices = document.querySelectorAll(".price");

prices.forEach((price)=>{
    price.innerHTML = new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'usd' }).format(+price.innerHTML)
})

// for (let i = 0; i < prices.length; i++) {
//     console.log(prices[i].innerHTML);
    
// }