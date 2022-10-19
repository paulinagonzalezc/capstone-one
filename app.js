const mobileBtn = document.getElementById('mobile-cta');
const nav = document.querySelector('nav');
const mobileBtnExit = document.getElementById('mobile-exit');
const aboutBtn = document.getElementById('menu-about');
const programBtn = document.getElementById('menu-program');
const joinBtn = document.getElementById('menu-join');
const sponsorBtn = document.getElementById('menu-sponsor');
const newsBtn = document.getElementById('menu-news');
const projectHolder = document.querySelector('.speakers-container');

const speakers = [
  {
    image: './images/person1.png',
    alt: 'speaker1 photo',
    name: 'Beth Longworth',
    background: 'Senior Course Tutor',
    description:
      'Longworth is a champion of new writing for the stage, and has judged new writing competitions.',
  },
  {
    image: './images/person2.png',
    alt: 'speaker2 photo',
    name: 'Amahd Chatterjee',
    background: 'Senior Course Tutor',
    description:
      'Chatterjee has reviewed for the Dutch newspaper Trouw, and advises the literary festival of the Hague.',
  },
  {
    image: './images/person3.png',
    alt: 'speaker 3 photo',
    name: 'Diana Morgan',
    background: 'MA, MPhil, DPhil, FRSA',
    description:
      'Fiction writer, literary critic, and founder of the MSt in Creative Writing.',
  },
  {
    image: './images/person4.png',
    alt: 'speaker4 photo',
    name: 'Claire Daycott',
    background: 'Senior Associate Tutor MA, FRSL',
    description: ' She is a Fellow of the Royal Society of Literature.',
  },
  {
    image: './images/person5.png',
    alt: 'speaker5 photo',
    name: 'Danielle Randmark',
    background: 'MA',
    description:
      'Novelist and short story writer.She now teaches fiction writing at the City Lit.',
  },
  {
    image: './images/person6.png',
    alt: 'speaker6 photo',
    name: 'Maria Chan',
    background: 'MA, MPhil, PhD',
    description:
      'Senior Lecturer in Creative Writing (Poetry) at Oxford Brookes University and lives in Oxford.',
  },
];

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

const createCard = (speakers) => {
  const card = `<div class="speaker-card">
          <img
            class="speaker-image"
            src="${speakers.image}"
            alt="${speakers.alt}"
          />
          <div class="speaker-content">
            <h3 class="speaker-name">${speakers.name}</h3>
            <p class="speaker-background">${speakers.background}</p>
            <img
              class="red-line-speaker"
              src="./images/red-line.png"
              alt="red-line"
            />
            <p class="speaker-description">
              ${speakers.description}
            </p>
          </div>
        </div>`;
  projectHolder.innerHTML += card;
};

const populatePage = (arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    createCard(arr[i]);
  }
};

populatePage(speakers);
