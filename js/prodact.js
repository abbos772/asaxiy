const API_URL = "https://fakestoreapi.com/products";

async function fetchData(api) {
  let query = new URLSearchParams(window.location.search);
  let id = query.get("id");
  let data = await fetch(`${api}/${id}`);
  data
    .json()
    .then((res) => createSingleProduct(res))
    .catch((error) => console.log(error));
}
fetchData(API_URL);
const prodactWrapper = document.querySelector(".prodact__wrapper");
function createSingleProduct(data) {
  prodactWrapper.innerHTML = `
  <div class="continer">
        <div class="gl">
          <pre class = "pic">Главная   >   ${data.category}   >   ${data.title}</pre>
        </div>
        <div class="boxes">
        <div class="box1">
          <div class="box11">
            <img src="${data.image}" alt="" width="25" />
          </div>
          <div class="box11"><img src="${data.image}" alt="" width="25" /></div>
          <div class="box11"><img src="${data.image}" alt="" width="25" /></div>
          <div class="box11"><img src="${data.image}" alt="" width="25" /></div>
        </div>
        <div class="box2">
          <div class="heart">
            <div class="skidka">
              <h4>скидка</h4>
            </div>
            <div class="her">
              <img src="/img/heart.svg" width="25" alt="" />
            </div>
          </div>
          <div class="rasmm">
            <img src="${data.image}" alt="" width="" />
          </div>
          
        </div>
        <div class="texts">
            <h1>${data.category}</h1>
            <div class="rey">
              <img src="/img/рейтинг.png" alt="" />
              <pre class="pic">0 отзывов</pre>
              <h4 style="color: blue">Поделиться</h4>
            </div>
            <h2 style="color: #d9663b">${data.price} $</h2>
            <h4 style="color: #181616">${data.price} x 12 мес</h4>
            <pre class="mod">
Бренд:   <b>${data.category}</b>   Модель _ _ _ _ _:${data.title}</pre
            >
            <div class="buy">
              <button class="btn4">
                <img src="/img/cart-white.svg" width="" /> Добавить в корзину
              </button>
              <button class="btn5">Купить сейчас</button>
            </div>
            <h3>Проголосуйте :</h3>
            <div class="golos">
              <svg
                width="25px"
                version="1.1"
                id="_x32_"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 512 512"
                xml:space="preserve"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <style type="text/css">
                    .st0 {
                      fill: #000000;
                    }
                  </style>
                  <g>
                    <path
                      class="st0"
                      d="M484.5,327.114c16.188-6.984,27.5-23.047,27.5-41.781c0-19.25-11.969-35.625-28.859-42.297 c9.891-8.359,16.281-20.672,16.281-34.625c0-25.172-20.391-45.563-45.547-45.563H350.063c9.969-19.625,18.625-45.563,15.672-76.594 c-2.766-29.203-27.391-80.828-65.359-83.875c-29.25-2.344-34.906,8.625-34.906,37.969c0,0,0.328,28.422,0.328,46.641 c0,32.641-10.859,49.25-49.234,76.766c-50.625,36.297-59.406,55.031-59.406,55.031v216.672c0,27.219,22.063,49.281,49.281,49.281 h94.531h115.375c25.188,0,59.219-12.156,59.219-45.547c0-12.5-5.031-23.813-13.188-32.047 c22.031-3.188,39.016-21.969,39.016-44.891C501.391,348.021,494.734,335.474,484.5,327.114z"
                    ></path>
                    <path
                      class="st0"
                      d="M96.703,202.849H24.625C11.031,202.849,0,213.864,0,227.489v257.813c0,13.594,11.031,24.625,24.625,24.625 h72.078c13.609,0,24.641-11.031,24.641-24.625V227.489C121.344,213.864,110.313,202.849,96.703,202.849z M65.906,470.817 c-12.594,0-22.813-10.219-22.813-22.813s10.219-22.813,22.813-22.813c12.625,0,22.813,10.219,22.813,22.813 S78.531,470.817,65.906,470.817z"
                    ></path>
                  </g>
                </g>
              </svg>
              <h4 class="htort">Я рекомендую</h4>

              <div class="nol">0</div>
              
            </div>
            
          </div>
          <div class="card-menu">
          <h2>Рассрочка платежа</h2>
          <div class="btns">
            <button class="mes">3 мес</button>
            <button class="mes">6 мес</button>
            <button class="mes">12 мес</button>
          </div>
          <div class="uzum">
            Рассрочка от парнера Uzum Nasiya
            <div class="nasiya">
              <img src="/img/uzumnasiya.svg" alt="" width="90" />
              <h3>${data.price} $</h3>
            </div>
            <button class="rass">Заказать в Рассрочку</button>
          </div>

          <div class="uzum2">
            Рассрочка от Asaxiy
            <div class="nasiya">
              <img src="/img/asaxiy-logo.svg" alt="" />
              <h3>${data.price} $</h3>
            </div>
          </div>
        </div>
      </div>
      </div>
  `;
}
