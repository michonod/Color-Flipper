const button = document.querySelector(".btn-click");
const buttonHex = document.querySelector(".btn-hex");
const body = document.querySelector("body");
const centralH2 = document.querySelector(".central-h2");

const rgbColorPicker = () => {
  const r = Math.floor(Math.random() * 255) + 1;
  const g = Math.floor(Math.random() * 255) + 1;
  const b = Math.floor(Math.random() * 255) + 1;
  let rgbColor = `rgb(${r},${g},${b})`;
  centralH2.innerHTML = `Background Color : ${rgbColor}`;
  body.style.backgroundColor = rgbColor;
  return rgbColor;
};

button.addEventListener("click", rgbColorPicker);

const hexColorPicker = () => {
  const hexArr = ["A", "B", "C", "D", "E", "F", 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  const hex1 = hexArr[Math.floor(Math.random() * 15) + 1];
  const hex2 = hexArr[Math.floor(Math.random() * 15) + 1];
  const hex3 = hexArr[Math.floor(Math.random() * 15) + 1];
  const hex4 = hexArr[Math.floor(Math.random() * 15) + 1];
  const hex5 = hexArr[Math.floor(Math.random() * 15) + 1];
  const hex6 = hexArr[Math.floor(Math.random() * 15) + 1];
  let hexColor = `#${hex1}${hex2}${hex3}${hex4}${hex5}${hex6}`;
  console.log(hexColor);
  centralH2.innerHTML = `Background Color : ${hexColor}`;
  body.style.backgroundColor = hexColor;
};

buttonHex.addEventListener("click", hexColorPicker);

buttonHex.addEventListener("click", console.log("eee"));
