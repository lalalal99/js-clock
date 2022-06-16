function main() {
  var date = new Date();
  var hours = date.getHours().toString();
  hours = hours < 10 ? 0 + hours : hours;

  var minutes = date.getMinutes().toString();
  minutes = minutes < 10 ? 0 + minutes : minutes;

  var seconds = date.getSeconds().toString();
  seconds = seconds < 10 ? 0 + seconds : seconds;

  var text = document.getElementById("clock");
  text.innerHTML = hours + ":" + minutes + ":" + seconds;
}

setInterval(main, 1000);
