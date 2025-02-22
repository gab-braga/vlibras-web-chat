import questionForGPT from './openai.js';

const form = document.getElementById('form');
const input = document.getElementById('input');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const question = input.value;

  if (question) {
    const response = await questionForGPT(question);

    if (response) {
      player.translate(response);
    } else {
      alert('GPT está fora do ar.');
    }
  }
});
