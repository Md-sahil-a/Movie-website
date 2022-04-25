// Store the wallet amount to your local storage with key "amount"
// https://www.omdbapi.com/?i=tt3896198&apikey=3454d6da



const add = ()=>{
    let price = document.getElementById("amount").value;
    let hprice = document.getElementById("wallet");
    let all = hprice.innerText = price;
    localStorage.setItem("amount",JSON.stringify(all));
}

