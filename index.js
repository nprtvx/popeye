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
greeting.textContent = 'welcome';

// append greeting to app
app.appendChild(greeting);

const login = document.createElement('div');
login.setAttribute('id', 'login');
login.textContent = 'login';

const loginlink = document.createElement('a');
loginlink.setAttribute('href', '#login');
loginlink.setAttribute('id', 'login-link');
loginlink.textContent = login.textContent;

const signup = document.createElement('div');
signup.setAttribute('id', 'sign-up');
signup.textContent = 'sign up';

const signuplink = document.createElement('a');
signuplink.setAttribute('href', '#sign-up');
signuplink.setAttribute('id', 'signup-link');
signuplink.textContent = signup.textContent;

loginlink.addEventListener('click', () => {
  app.remove(greeting)
  app.remove(loginlink)
  app.remove(signuplink)
  app.appendChild(login)
});

signuplink.addEventListener('click', () => {
  app.remove(greeting)
  app.remove(loginlink)
  app.remove(signuplink)
  app.appendChild(signup)
});

greeting.appendChild(loginlink);
greeting.appendChild(signuplink);


const dateelement = document.createElement('div');

let date = new Date();

dateelement.textContent = `${date.getFullYear}  ${date.getMonth}  ${date.getDate}`;
dateelement.style.display = 'inline-block';
dateelement.style.fontSize = '26px';

app.append(dateelement);






// eof
