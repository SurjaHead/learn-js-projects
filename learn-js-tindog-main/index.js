import dogs from "./data.js";
import Dog from "./Dog.js";

const getNextDog = () => {
  let nextDog = dogs.shift();
  let dog = new Dog(nextDog);
  console.log(dogs);
  return dog;
};

let currentDog = getNextDog();

const mainDiv = document.getElementById("main");
const heartBtn = document.getElementById("heart-btn");
const xBtn = document.getElementById("x-btn");

function render() {
  mainDiv.innerHTML = currentDog.getDogHtml();
}

document.body.addEventListener("click", function (e) {
  if (e.target.id === "heart-btn" || e.target.id === "heart") {
    if (dogs.length > 0) {
      mainDiv.innerHTML += `<img src='images/badge-like.png' id='like-stamp'>`;
      document.body.disabled = true;
      setTimeout(() => {
        currentDog = getNextDog();
        render();
      }, 1000);
    } else if (dogs.length === 0) {
      heartBtn.disabled = true;
      xBtn.disabled = true;
      mainDiv.innerHTML += `<img src='images/badge-like.png' id='like-stamp'>`;
      setTimeout(() => {
        document.body.innerHTML = `<h1 id='end-render'>No dogs left on your feed</h1>`;
      }, 1000);
    }
  } else if (e.target.id === "x-btn" || e.target.id === "x") {
    if (dogs[0]) {
      mainDiv.innerHTML += `<img src='images/badge-nope.png' id='nope-stamp'>`;
      currentDog.hasBeenSwiped = true;
      setTimeout(() => {
        currentDog = getNextDog();
        render();
      }, 1000);
    } else if (dogs.length === 0) {
      mainDiv.innerHTML += `<img src='images/badge-nope.png' id='nope-stamp'>`;
      setTimeout(() => {
        document.body.innerHTML = `<h1 id='end-render'>No dogs left on your feed</h1>`;
      }, 1000);
    }
  }
});

render();
