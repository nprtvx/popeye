// index dot js


document.title = `neon monkey`.toUpperCase();
const app = document.getElementById('app');

let appLoadStarted;

app.addEventListener('loadstart', () => {
  const appLoadStarted = true;
});

console.log(appLoadStarted);

const greeting = document.createElement('div');
greeting.setAttribute('id', 'greeting-card');

app.appendChild(greeting);
