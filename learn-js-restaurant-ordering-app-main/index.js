import { menuArray } from "./data.js";

const menu = document.getElementById("menu");
const completeOrderBtn = document.getElementById("complete-order-btn");
const orderDiv = document.getElementById("order");
const orderEnd = document.getElementById("order-end");
const cardDetailsForm = document.getElementById("card-details");

document.addEventListener("click", function (e) {
  if (e.target.dataset.pizza) {
    addPizza(e.target.dataset.pizza);
    completeOrderBtn.style.display = "flex";
    orderDiv.style.borderBottom = "1px solid black";
  } else if (e.target.dataset.hamburger) {
    addBurger(e.target.dataset.hamburger);
    completeOrderBtn.style.display = "flex";
    orderDiv.style.borderBottom = "1px solid black";
  } else if (e.target.dataset.beer) {
    addBeer(e.target.dataset.beer);
    completeOrderBtn.style.display = "flex";
    orderDiv.style.borderBottom = "1px solid black";
  } else if (e.target.classList.contains("remove")) {
    e.target.parentElement.style.display = "none";

  } else if (e.target.id === "complete-order-btn") {
    cardDetailsForm.style.display = "flex";
  } else if (e.target.classList.contains("fa-star")) {
    starRating(e);
  }
});

cardDetailsForm.addEventListener("submit", function (e) {
  e.preventDefault();
  renderOrderMessage();
});

function getMenuHtml() {
  let menuHtml = "";

  menuArray.forEach(function (item) {
    let ingredients = "";
    item.ingredients.forEach(function (ingredient) {
      if (ingredient != item.ingredients[item.ingredients.length - 1]) {
        ingredients += `${ingredient}, `;
      } else {
        ingredients += `${ingredient}`;
      }
    });

    menuHtml += `
        <div id='menu-item-${item.name}' class='menu-item'>
            <img src='public/images/item-graphic${item.id}.png' class='item-graphics'>
            <div class='item-description'>
                <h3 class='item-name'>${item.name}</h3>
                <p class='item-ingredients'>${ingredients}</p>
                <h4 class='item-price'>$${item.price}</h4>
            </div>
            <button data-${item.name}='${item.id}' class='addBtns'>+</button>
        </div>
        `;
  });

  menu.innerHTML = menuHtml;
}

function addPizza(pizzaId) {
  const targetPizza = menuArray.filter(function (item) {
    return item.id === pizzaId;
  })[0];

  renderOrder(targetPizza);
}

function addBurger(burgerId) {
  const targetBurger = menuArray.filter(function (item) {
    return item.id === burgerId;
  })[0];

  renderOrder(targetBurger);
}

function addBeer(beerId) {
  const targetBeer = menuArray.filter(function (item) {
    return item.id === beerId;
  })[0];

  renderOrder(targetBeer);
}

let totalPrice = 0;

function renderOrder(foodItem) {
  let orderHtml = "";

    if (document.getElementById("order").innerHTML) {
      orderHtml = `
              <div class='order-item'>
                  <h3 class='item-name'>${foodItem.name}</h3>
                  <p class='remove'>remove</p>
                  <h4 class='item-price'>$${foodItem.price}</h4>
              </div>
              `;
    } else {
      orderHtml = `
              <h3>Your order</h3>
              <div class='order-item'>
                  <h3 class='item-name'>${foodItem.name}</h3>
                  <p class='remove'>remove</p>
                  <h4 class='item-price'>$${foodItem.price}</h4>
              </div>
              `;
    }



  orderDiv.innerHTML += orderHtml;

  totalPrice += foodItem.price

  if (orderEnd) {
;
    orderEnd.innerHTML = `
        <h3 id="total-price-txt">Total price:</h3>
        <p id="total-price-num">$${totalPrice}</p>
        `;
  }
}

function renderOrderMessage() {
  let orderMessageHtml = "";
  const cardDetailsFormData = new FormData(cardDetailsForm);

  orderMessageHtml = `
    <h3 id='order-message-display'>Thanks, ${cardDetailsFormData.get(
      "cardName"
    )}! Your order is on its way!</h3>
    `;
  setTimeout(function () {
    orderEnd.innerHTML = orderMessageHtml;
    completeOrderBtn.style.display = "none";
    cardDetailsForm.style.display = "none";
    document.getElementById("rating").style.display = "block";
    document.getElementById("rating-form").style.display = "flex";
    document.getElementById("order-message-display").style.display = "block";
    const addBtns = document.getElementsByClassName("addBtns");
    const removeTxt = document.getElementsByClassName("remove");
    for (let i = 0; i < addBtns.length; i++) {
      addBtns[i].disabled = true;
    }
    for (let i = 0; i < removeTxt.length; i++) {
      removeTxt[i].style.display = "none";
    }
  }, 3000);

  document.getElementById("loading").textContent = "Processing your order...";
  document.getElementById("loading").style.display = "block";
  cardDetailsForm.style.height = "640px";
}

// STAR RATING

function starRating(e) {
  for (let i = parseInt(e.target.id); i > 0; i--) {
    document.getElementById(`${i}`).classList.add("fas");
  }
  if (parseInt(e.target.id) < document.getElementsByClassName("fas").length) {
    console.log(document.getElementsByClassName("fas").length);
    for (let i = parseInt(e.target.id) + 1; i <= 5; i++) {
      document.getElementById(`${i}`).classList.remove("fas");
    }
  }
}

getMenuHtml();
