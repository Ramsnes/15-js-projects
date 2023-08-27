const colors = ["green", "red", "rgba(133,122,200)", "#f15025"]; //array
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

// This is the button-click function  // Change to arrow function later
btn.addEventListener("click", function () {
  // goal: get random number between 0 - 3 (colors array line 1)
  const randomNumber = getRandomNumber(); // hardcodes the third property in colors array
  console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber]; // changes bgc to the function getRandomNumber()
  color.textContent = colors[randomNumber]; // .textContent displays color being used colors[2]
});

const getRandomNumber = () => {
  return Math.floor(Math.random() * colors.length);
};
