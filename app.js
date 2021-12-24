const hamburger = document.querySelector('.navicon');
const mobileMenu = document.querySelector('.mob-menu');
const closebtn = document.querySelector('#close');
const links = document.querySelectorAll('.links');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.remove('hidden');
});

closebtn.addEventListener('click', () => {
  mobileMenu.classList.add('hidden');
});

for (let i = 0; i < links.length; i += 1) {
  links.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
  });
}

//  DATA FOR THE PORTFOLIO CARDS

const projects = [{
  id: 0,
  name: 'Multi-Post Stories',
  image: 'images/project1.png',
  desc: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
  lang: ['Css', 'html', 'bootstrap', 'Ruby'],
  live: 'https://devtiwo.github.io/Portfolio',
  source: 'https://github.com/Devtiwo/Portfolio',
},
{
  id: 1,
  name: 'Profesional Art Printing Data',
  image: 'images/project1.png',
  desc: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
  lang: ['html', 'bootstrap', 'Ruby'],
  live: 'https://devtiwo.github.io/Portfolio',
  source: 'https://github.com/Devtiwo/Portfolio',
},
{
  id: 2,
  name: 'Profesional Art Printing Data',
  image: 'images/project1.png',
  desc: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
  lang: ['html', 'bootstrap', 'Ruby'],
  live: 'https://devtiwo.github.io/Portfolio',
  source: 'https://github.com/Devtiwo/Portfolio',
},
{
  id: 3,
  name: 'Profesional Art Printing Data',
  image: 'images/project1.png',
  desc: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
  lang: ['html', 'bootstrap', 'Ruby'],
  live: 'https://devtiwo.github.io/Portfolio',
  source: 'https://github.com/Devtiwo/Portfolio',
},
{
  id: 4,
  name: 'Profesional Art Printing Data',
  image: 'images/sample.png',
  desc: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
  lang: ['html', 'bootstrap', 'Ruby'],
  live: 'https://devtiwo.github.io/Portfolio',
  source: 'https://github.com/Devtiwo/Portfolio',
},
{
  id: 5,
  name: 'Profesional Art Printing Data',
  image: 'images/project1.png',
  desc: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
  lang: ['html', 'bootstrap', 'Ruby'],
  live: 'https://devtiwo.github.io/Portfolio',
  source: 'https://github.com/Devtiwo/Portfolio',
},
{
  id: 6,
  name: 'Profesional Art Printing Data',
  image: 'images/sample.png',
  desc: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
  lang: ['html', 'bootstrap', 'Ruby'],
  live: 'https://devtiwo.github.io/Portfolio',
  source: 'https://github.com/Devtiwo/Portfolio',
},
];

// FIRST PROJECT CARD

const multicard = document.querySelector('.diff-cont');
const card = document.createElement('article');
card.className = 'diff-frame';
const details = `
<img src="${projects[0].image}" alt="${projects[0].name}">
<article class="diff-content">
    <h2>${projects[0].name}</h2>
    <p>${projects[0].desc}</p>
    <ul class="diff-wrapper">
        <li class="items">${projects[0].lang[0]}</li>
        <li class="items">${projects[0].lang[1]}</li>
        <li class="items">${projects[0].lang[2]}</li>
        <li class="items">${projects[0].lang[3]}</li>
    </ul>
    <button class="diff-btn btn-see" id="${projects[0].id}">See Project</button>
</article>
`;
card.innerHTML = details;
multicard.appendChild(card);

//  CREATING THE MULTIPLE SAME CARDS AND APPENDING IT TO THE WEBPAGE

const cards = document.querySelector('.same-works');
for (let i = 1; i < projects.length; i += 1) {
  const dwrap = document.createElement('article');
  dwrap.className = 'frame';
  const data = `
  <h2>${projects[i].name}</h2>
  <p>${projects[i].desc}</p>
  <ul class="wrapper">
    <li class="items">${projects[i].lang[0]}</li>
    <li class="items">${projects[i].lang[1]}</li>
    <li class="items">${projects[i].lang[2]}</li>
  </ul>
  <button class="btn btn-see" id="${projects[i].id}">See Project</button>
  `;
  dwrap.innerHTML = data;
  cards.appendChild(dwrap);
}

// MODAL POPUP AFTER CLICKING THE CARD BUTTONS

document.querySelectorAll('.btn-see').forEach((btn) => {
  btn.addEventListener('click', () => {
    const project = projects.find((p) => p.id === Number(btn.id));
    document.querySelector('#projectname').innerText = project.name;
    document.querySelector('#languagesApp').innerHTML = `
      <li>${project.lang[0]}</li>
      <li>${project.lang[1]}</li>
      <li>${project.lang[2]}</li>
    `;
    document.querySelector('#projectImage').setAttribute('src', project.image);
    document.querySelector('#projectDesc').innerHTML = project.desc;
    document.querySelector('#liveLink').setAttribute('href', project.live);
    document.querySelector('#sourceCode').setAttribute('href', project.source);

    document.querySelector('.modal-container').style.display = 'block';
  });
});

// CLOSING THE MODAL POPUP WINDOW

document.querySelector('#closeModal').addEventListener('click', () => {
  document.querySelector('.modal-container').style.display = 'none';
});

const form = document.getElementById('contact-form');
const email = document.getElementById('email');
const errMsg = document.querySelector('.err-msg');

// Form Validation

form.addEventListener('submit', (e) => {
  if (email.value === email.value.toLowerCase()) {
    errMsg.textContent = '';
  } else { e.preventDefault(); }
  errMsg.textContent = '*Email must be in lowercase letters';
});

// Creating local storage

const inname = document.getElementById('name');
const inemail = document.getElementById('email');
const text = document.getElementById('text');

function storeLocally() {
  const localName = inname.value;
  const localEmail = inemail.value;
  const localMessage = text.value;

  localStorage.setItem('name', localName);
  localStorage.setItem('email', localEmail);
  localStorage.setItem('text', localMessage);
}

function preFillData() {
  inname.value.value += localStorage.getItem('name');
  inemail.value.value += localStorage.getItem('email');
  text.value += localStorage.getItem('text');
}

if (localStorage.getItem('name')) {
  preFillData();
} else {
  storeLocally();
}

inname.onchange = storeLocally;
inemail.onchange = storeLocally;
text.onchange = storeLocally;

form.addEventListener('submit', storeLocally, preFillData);