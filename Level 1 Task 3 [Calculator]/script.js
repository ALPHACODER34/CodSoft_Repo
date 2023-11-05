
//eval function is used


let equal_pressed = 0;
//1.Refer all buttons excluding AC and DEL
let button_input = document.querySelectorAll(".input-button");
//2.Refer input,equal,clear and erase
let input = document.getElementById("input");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let erase = document.getElementById("erase");

window.onload = () => {
  input.value = "";
};

//3.Access each class using forEach
button_input.forEach((button_class) => {
  button_class.addEventListener("click", () => {
    if (equal_pressed == 1) {
      input.value = "";
      equal_pressed = 0;
    }
    //4.display value of each button
    input.value += button_class.value;
  });
});

//5.Solve the user's input when clicked on equal sign
equal.addEventListener("click", () => {
  equal_pressed = 1;
  let inp_val = input.value;
  try {
    //6.evaluate user's input
    let solution = eval(inp_val);
    //True for natural numbers
    //7.false for decimals
    if (Number.isInteger(solution)) {
      input.value = solution;
    } else {
      input.value = solution.toFixed(2);
    }
  } catch (err) {
    //8.If user has entered invalid input
    alert("Invalid Input");
  }
});

//9.Clear Whole Input
clear.addEventListener("click", () => {
  input.value = "";
});
//10.Erase Single Digit
erase.addEventListener("click", () => {
  input.value = input.value.substr(0, input.value.length - 1);
});
