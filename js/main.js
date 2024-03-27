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
const wrapper = document.querySelector(".wrapper");
const API_URL = "https://fakestoreapi.com/products";

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
    
    <div class="rasm">
                
    <img name="prodact-image" data-id=${products.id} class="imgg" src="${products.image}" width="120" height ="180" alt="">
              </div>
    <h4>${products.title}</h4>
    <h5>${products.category}</h5>
    <div class="reyting">
    <img src="./img/рейтинг.png" alt="">
    <p>rating ${products.rating.rate}</p>
  </div>
    <h2 class = "hh2">${products.price}$</h2>
    
    
    <div class="but">
              <button class="btn3">Купить</button>
              <button class="korzinka"> <img src="./img/cart.svg" alt="" width="20" /></button>
            </div>
      
    `;
    fragment.appendChild(card);
  });
  wrapper.appendChild(fragment);
}

const singleRoute = (id) => {
  window.open(`/pages/prodact.html?id=${id}`, "_self");
};

wrapper.addEventListener("click", (e) => {
  if (e.target.name === "prodact-image") {
    let id = e.target.dataset.id;
    singleRoute(id);
  }
});
