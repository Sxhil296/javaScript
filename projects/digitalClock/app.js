const clock = document.getElementById("clock");

setInterval(function () {
  let date = new Date();
  //   console.log(date.toLocaleTimeString());
  //let options = { hour12: true }; // Include AM/PM format
//   clock.innerHTML = date.toLocaleTimeString(undefined, options);
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
