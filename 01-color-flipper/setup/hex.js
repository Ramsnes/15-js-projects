const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
// Example of hex color: #f15025

btn.addEventListener("click", function () {
  let hexColor = "#"; // must have hashtag to get hex value
  for (let i = 0; i < 6; i++) {
    // 6 because a hex number is 6 symbols
    hexColor += hex[getRandomNumber()]; // += includes let hexColor"#"
  }
  color.textContent = hexColor; //shows color hexnumber
  document.body.style.backgroundColor = hexColor; //styles bgc
});

const getRandomNumber = () => {
  return Math.floor(Math.random() * hex.length);
};
