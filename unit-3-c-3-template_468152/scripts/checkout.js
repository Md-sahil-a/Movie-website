// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

let amount  = JSON.parse(localStorage.getItem("amount"));
let tobookmove = JSON.parse(localStorage.getItem("movies"));
let movie = document.getElementById("movie");
let total = document.getElementById("wallet");
total.innerText = amount;


tobookmove.forEach(function(el){
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src = el.Poster;
    let p = document.createElement("h1");
    p.innerText = el.Title;
    div.append(p,img);
    movie.append(div);
});

function pay(){
    const cost = 100;
    let seats = document.getElementById("number_of_seats").value;
    let totalmoney = cost * Number(seats);
    if(Number(amount) < totalmoney){
        alert("insufficient balance");
    }else if(totalmoney >= Number(amount)){
        let sub = totalmoney - Number(amount);
        total.innerText = sub;
        localStorage.setItem("amount", JSON.stringify(sub));
    }

}
