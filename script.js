let insta = document.querySelector(".insta-num");
let fb = document.querySelector(".fb-num");
let youtube = document.querySelector(".youtube-num");
const instaText = document.querySelector(".insta-text");
// For Number incriment
let count = 1;
setInterval(() => {
  if (count < 8000) {
    count++;
    insta.innerText = count;
  }
}, 1);

// For Number incriment
setInterval(() => {
  if (count < 7000) {
    count++;
    fb.innerText = count;
  }
}, 1);
// For Number incriment
setInterval(() => {
  if (count < 6000) {
    count++;
    youtube.innerText = count;
  }
}, 1);
// For Changing the Color
setTimeout(() => {
  insta.style.color = "#e03131";
  fb.style.color = "#e03131";
  youtube.style.color = "#e03131";
}, 2000);
setTimeout(() => {
  insta.style.color = "#da77f2";
  fb.style.color = "#da77f2";
  youtube.style.color = "#da77f2";
}, 4000);
setTimeout(() => {
  insta.style.color = "#000";
  fb.style.color = "#000";
  youtube.style.color = "#000";
}, 8000);
setTimeout(() => {
  insta.style.color = "#364fc7";
  fb.style.color = "#364fc7";
  youtube.style.color = "#364fc7";
}, 9000);
setTimeout(() => {
  insta.style.color = "#f783ac";
  fb.style.color = "#f783ac";
  youtube.style.color = "#f783ac";
  // instaText.style.fontSize = "48px";
}, 8000);
