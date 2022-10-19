const mobileBtn = document.getElementById('mobile-cta');
const nav = document.querySelector('nav');
const mobileBtnExit = document.getElementById('mobile-exit');
const aboutBtn = document.getElementById('menu-about');
const programBtn = document.getElementById('menu-program');
const joinBtn = document.getElementById('menu-join');
const sponsorBtn = document.getElementById('menu-sponsor');
const newsBtn = document.getElementById('menu-news');

mobileBtn.addEventListener('click', () => {
  nav.classList.add('menu-btn');
});

mobileBtnExit.addEventListener('click', () => {
  nav.classList.remove('menu-btn');
});

aboutBtn.addEventListener('click', () => {
  nav.classList.remove('menu-btn');
});

programBtn.addEventListener('click', () => {
  nav.classList.remove('menu-btn');
});

joinBtn.addEventListener('click', () => {
  nav.classList.remove('menu-btn');
});

sponsorBtn.addEventListener('click', () => {
  nav.classList.remove('menu-btn');
});

newsBtn.addEventListener('click', () => {
  nav.classList.remove('menu-btn');
});
