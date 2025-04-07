const text = document.querySelector('h3');
const original = text.textContent;
text.textContent = "";
let i = 0;
setInterval(() => {
  if (i < original.length) {
    text.textContent += original.charAt(i);
    i++;
  }
}, 100);
