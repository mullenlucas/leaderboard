import './style.css';
import Scores from './modules/Scores.js';

// Initiate Scores class
const scoresCl = new Scores();

const addScore = (sc, v, i) => {
  scoresCl.newScore(sc, v, i);
  const ulScores = document.getElementById('score-list');
  const li = document.createElement('li');
  li.setAttribute('id', `id${i}`);
  li.innerText = `${sc}: ${v}`;
  ulScores.appendChild(li);
};

addScore('mario', 99, 1);
addScore('alan', 101, 2);
addScore('luigi', 104, 3);
addScore('wario', 94, 4);
addScore('richard', 81, 5);
addScore('pamela', 109, 6);
addScore('erika', 106, 7);

const list = scoresCl.allScores;
list.forEach((s, i) => {
  const ids = document.getElementById(`id${i + 1}`);
  if (i % 2 === 0) { ids.style.backgroundColor = 'rgba(255, 229, 111, 0.6)'; }
});