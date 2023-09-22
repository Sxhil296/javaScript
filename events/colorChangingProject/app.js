const randomColor = () => {
  const hex = "0123456789ABCDEF";
  let color = `#`;
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
// console.log(randomColor())

let colorInterval;

const startChangingColor = () => {
  // colorInterval = setInterval(changeBgColor, 1000)
  if (!colorInterval) {
    colorInterval = setInterval(changeBgColor, 1000);
  }

  // document.body.style.backgroundColor = randomColor()
  // document.getElementById('color').innerHTML = `Color : ${randomColor()}`

  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
    document.getElementById("color").innerHTML = `Color : ${randomColor()}`;
  }
};

const stopChangingColor = () => {
  // clearInterval(colorInterval)
  // colorInterval = null
  if (colorInterval) {
    clearInterval(colorInterval);
    colorInterval = null;
  }
};

document.querySelector("#start").addEventListener("click", startChangingColor);
// document.querySelector('#start').addEventListener('click', ()=> {
//     colorInterval = setInterval(startChangingColor, 1000)
// })

document.querySelector("#stop").addEventListener("click", stopChangingColor);
// document.querySelector('#stop').addEventListener('click', () => {
//     clearInterval(colorInterval);
//     colorInterval = null
// })
