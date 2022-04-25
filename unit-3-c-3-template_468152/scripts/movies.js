// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

//// https://www.omdbapi.com/?i=tt3896198&apikey=3454d6da

let data = JSON.parse(localStorage.getItem("amount"));
let hprice = document.getElementById("wallet");
hprice.innerText = data;
let movies = document.getElementById("movies");
let id;
let arr = [];
async function searchMovies(){
    const query = document.getElementById("search").value;
    let res = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=3454d6da&s=${query}`);
    let data = await res.json();
    const  movies = data.Search;
    return movies;
}

function append(data){
    movies.innerHTML = null;
    data.forEach(function(el){
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.src = el.Poster;
        let p = document.createElement("p");
        p.innerText = el.Title;
        let btn = document.createElement("button");
        btn.innerText = "Book Now";
        btn.setAttribute("class", "book_now");
        btn.addEventListener("click", function(){
            added(el);

        });
        div.append(img, p, btn);
        movies.append(div);
    })
}

async function main(){
    let mymovie = await searchMovies();
    if(mymovie === undefined){
        return false;
    }
    append(mymovie);
}

function debounce(func, delay){
    if(id){
        clearTimeout(id);
    }
    id = setTimeout(function(el){
        func();
    }, delay);
}


function added(el){
    arr.push(el);
    localStorage.setItem("movies", JSON.stringify(arr));
    window.location.href="checkout.html"
}
