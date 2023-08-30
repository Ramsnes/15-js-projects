const colors = ["green", "red", "rgba(133,122,200)", "#f15025"]; //array of color selections
const btn = document.getElementById("btn"); // button
const color = document.querySelector(".color"); // color descriptor

// button-click function goal: get random number between 0 - 3 (colors array line 1)
btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber]; // bgc becomes getRandomNumber()
  color.textContent = colors[randomNumber]; // .textContent displays color being used colors[2]
});

// returns a random number between 0 - 4 (length of const colors)
const getRandomNumber = () => {
  return Math.floor(Math.random() * colors.length);
};
