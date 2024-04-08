let btn1 = document.querySelector(".btn_1");
let btn2 = document.querySelector(".btn_2");
let body = document.querySelector("body");
let codePreview = document.querySelector(".code-preview");
let color_1 = "#5c9169";
let color_2 = "#983fc6";

const handlebtn1 = () => {
  let hexadecimalNumber = "0123456789ABCDEF";
  color_1 = "#";
  for (let i = 0; i < 6; i++) {
    color_1 += hexadecimalNumber[Math.floor(Math.random() * 16)];
  }
  btn1.style.backgroundColor = color_1;
  btn1.innerHTML = color_1;
  body.style.backgroundImage = `linear-gradient(to right, ${color_1}, ${color_2})`; // Fixed style assignment
  codePreview.innerHTML = `background-image: linear-gradient(to right, ${color_1}, ${color_2})`;
};

const handlebtn2 = () => {
  let hexadecimalNumber = "0123456789ABCDEF";
  color_2 = "#";
  for (let i = 0; i < 6; i++) {
    color_2 += hexadecimalNumber[Math.floor(Math.random() * 16)];
  }
  btn2.style.backgroundColor = color_2;
  btn2.innerHTML = color_2;
  body.style.backgroundImage = `linear-gradient(to right, ${color_1}, ${color_2})`; // Fixed style assignment
  codePreview.innerHTML = `background-image: linear-gradient(to right, ${color_1}, ${color_2})`;
};

btn1.addEventListener("click", handlebtn1);
btn2.addEventListener("click", handlebtn2);
