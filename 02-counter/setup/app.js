// set initial count
let count = 0;

// select value and buttons
const value = document.querySelector("#value"); //selects id 'value'
const btns = document.querySelectorAll(".btn"); //selects all .btn classes
// console.log(btns);

// each button
btns.forEach(function (btn) {
  btn.addEventListener("click", function (eventObject) {
    console.log(eventObject.currentTarget.classList);
    const styles = eventObject.currentTarget.classList;

    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    // value equals count text
    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "#222";
    }
    value.textContent = count;
  });
});
// forEach //
// (btn)parameter accesses each item in btns variabel, could be any word

// console.log //
// callback function(function (e)) we are accessing the event object
// currentTarget shows which button is clicked on
// .classList is looking for all the classes the element has

//const styles //
// savnes in the variable which of classes the element(buttons) has

// if statement //
// if the const 'styles' contains a specific class('decrease'), minus count
// value.textContent = count shows the current count
