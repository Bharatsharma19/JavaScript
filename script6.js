var time = prompt("Hey, What's the time?");

if (time > 5 && time < 12) {
  alert("Good Morning!");
} else if (time > 12 && time < 17) {
  alert("Good Afternoon!");
} else if (time > 17 && time < 23) {
  alert("Good Evening!");
} else {
  alert("Good Night!");
}
