import './style.css';
import Scores from './modules/Scores.js';
import addScore from './modules/AddScore.js';

// game ID: TSK9ITkTv5Aof6D0OyN3

// Initiate Scores class
const scoresCl = new Scores();

// Declare main html element variables
const ulScores = document.getElementById('score-list');
const refBtn = document.getElementById('ref-btn');
const addScoreBtn = document.getElementById('btn-sub');

const getScoring = async () => {
  scoresCl.cleanScores();
  const resp = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/TSK9ITkTv5Aof6D0OyN3/scores');
  const data = await resp.json();
  data.result.forEach((el) => {
    scoresCl.allScores.push(el);
  });
};

const shadowInterval = () => {
  scoresCl.allScores.forEach((s, i) => {
    const ids = document.getElementById(`id${i}`);
    if (i % 2 === 0) { ids.style.backgroundColor = 'rgba(255, 229, 111, 0.6)'; }
  });
};

const displayScores = async () => {
  await getScoring();
  ulScores.innerHTML = '';
  scoresCl.allScores.forEach((e, i) => {
    const li = document.createElement('li');
    li.setAttribute('class', 'li-score');
    li.setAttribute('id', `id${i}`);
    li.innerText = `${e.user}: ${e.score}`;
    ulScores.appendChild(li);
  });
  shadowInterval();
};

displayScores();
refBtn.addEventListener('click', displayScores);

addScoreBtn.addEventListener('click', (ev) => {
  ev.preventDefault();
  addScore();
});