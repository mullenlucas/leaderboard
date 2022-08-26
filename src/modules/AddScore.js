const addScore = () => {
  const name = document.getElementById('score-name');
  const score = document.getElementById('score-val');
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/TSK9ITkTv5Aof6D0OyN3/scores', {
    method: 'POST',
    body: JSON.stringify({
      user: name.value,
      score: score.value,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  name.value = '';
  score.value = '';
};

export default addScore;