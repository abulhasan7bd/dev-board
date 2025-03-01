let complete_btn = document.querySelectorAll(".dedline-bottom button");
let assigne = document.getElementById("assigned");
let dayshow = document.getElementById("day");
let yearShow = document.getElementById("year");
let clear_btn = document.querySelector(".clear-btn");
let counter = document.querySelector(".count");
complete_btn.forEach((button) => {
  button.addEventListener("click", (e) => {
    alert("ddd");
    // button.classList.add("disable-btn");
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

let clear_container = document.querySelector(".history-list");
clear_btn.addEventListener("click", () => {
  clear_container.innerHTML = "";
});

let discoverbtn = document.querySelector(".discover-task");
discoverbtn.addEventListener("click", () => {
  window.location.href = "problem.html";
});



