let complete_btn = document.querySelectorAll(".dedline-bottom button");
let assigne = document.getElementById("assigned");
let dayshow = document.getElementById("day");
let yearShow = document.getElementById("year");
let clear_btn = document.querySelector(".clear-btn");
let counter = document.querySelector(".count");
let clear_container = document.querySelector(".history-list");
assigned.innerHTML = complete_btn.length;
complete_btn.forEach((button) => {
  button.addEventListener("click", (e) => {
    alert("Board updated Successfully");
    console.log(assigne.innerText);
    if (parseFloat(assigne.innerText) === 1) {
      alert("Congratulations!!! You have completed all current tasks");
    }
    button.classList.add("disable-btn");
    let cardTitle =
      button.parentElement.parentElement.querySelector("h3").innerText;
    console.log(cardTitle);
    let liCreate = document.createElement("li");
    liCreate.classList.add("history-box");
    let liText = `You have Complete The Task ${cardTitle} at ${myClock()}`;
    liCreate.innerHTML = liText;
    clear_container.appendChild(liCreate);
    counter.innerText++;
    button.disabled = true;
    assigne.innerText--;
  });
});

const days = ["Sun", "Mon", "Tues", "Wednes", "Thurs", "Fri", "Satur"];
const month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const time = new Date();
const day = days[time.getDay()];
const year = time.getFullYear();
const date = time.getDate();
const months = month[time.getMonth()];
dayshow.innerHTML = day;
yearShow.innerHTML = `${months} ${date} ${year}`;

// randome color generate
let color = document.querySelector(".multiple-color");
function getRandomColor() {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
}

color.addEventListener("click", () => {
  document.querySelector("body").style.backgroundColor = getRandomColor();
});

clear_btn.addEventListener("click", () => {
  clear_container.innerHTML = "";
});

let discoverbtn = document.querySelector(".discover-task");
discoverbtn.addEventListener("click", () => {
  window.location.href = "problem.html";
});

const myClock = () => {
  let time = new Date();
  let hour = time.getHours();
  let period = "AM";
  if (hour >= 12) {
    period = "PM";
    if (hour > 12) {
      hour = hour - 12;
    }
  }
  if (hour === 0) {
    hour = 12;
  }
  let minute = time.getMinutes().toString().padStart(2, "0");
  let second = time.getSeconds().toString().padStart(2, "0");
  return `Time is ${hour}:${minute}:${second} ${period}`;
};

console.log(myClock());
