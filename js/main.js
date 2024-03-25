const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".icons");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".icon").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

const API_URL = "https://fakestoreapi.com/products";
const wrapper = document.querySelector(".wrapper");

async function fetchData(api) {
  let data = await fetch(api);
  data
    .json()
    .then((res) => createCard(res))
    .catch((error) => console.log(error));
}
fetchData(API_URL);

function createCard(data) {
  console.log(data[0]);
  let fragment = document.createDocumentFragment();
  data.forEach((products) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
    
    <img class="imgg" src="${products.image}" width="120" height ="180" alt="">
    
    <h4>${products.title}</h4>
    <h5>${products.category}</h5>
    <p>${products.price}$</p>
    <p>rating ${products.rating.rate}</p>
      <button class="btn3">Купить</button>
    `;
    fragment.appendChild(card);
  });
  wrapper.appendChild(fragment);
}

const loader = document.querySelector(".loader");
setTimeout(() => {
  loader.classList.add("show");
}, 200);
