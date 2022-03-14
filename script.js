const time = document.querySelector("#time"),
  greeting = document.querySelector("#welcome"),
  name = document.querySelector("#name"),
  focus = document.querySelector("#focus");

const showAmPm = true;

const showTime = () => {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();
  const amPm = (hour = 12 ? "PM" : "AM");
  hour = hour % 12 || 12;
  time.innerHTML = `${hour} <span>:</span>${min}<span>:</span>${addZero(
    sec
  )} ${amPm} `;
  setTimeout(showTime, 1000);
};
const addZero = (number) => (number < 10 ? "0" + number : number);
showTime();

const setBg = () => {
  let today = new Date(),
    hour = today.getHours();

  if (hour < 6) {
    greeting.textContent = "Good night, ";
    document.body.style.backgroundImage = 'url("./assets/night.jpg")';
  }
  if (hour < 12) {
    greeting.textContent = "Good Morning, ";
    document.body.style.backgroundImage = 'url("./assets/evening.jpg")';
  }
  if (hour < 18) {
    greeting.textContent = "Good Afternoon, ";
    document.body.style.backgroundImage = 'url("./assets/day.jpg")';
  } else {
    greeting.textContent = "Good Evening, ";
    document.body.style.backgroundImage = 'url("./assets/evening.jpg")';
  }
};
setBg();

const setName = (e) => {
  if (e.tupe === "keypress") {
    if (e.key === "Enter") {
      localStorage.setItem("name", e.target.innerHTML);
      name.blur();
    }
    localStorage.setItem("name", e.terget.innerHTML);
  }
};

const getName = () => {
  if (
    localStorage.getItem("name") === null ||
    localStorage.getItem("name").length === 0
  ) {
    name.textContent = "[Enter name]";
  } else {
    name.textContent = localStorage.getItem("name");
  }
};

name.addEventListener("keypress", setName);

getName();
