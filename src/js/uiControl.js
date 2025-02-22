import questionForGPT from './openai.js';

const form = document.getElementById('form');
const input = document.getElementById('form-input');
const button = document.getElementById('form-button');
let loading = false;

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const question = input.value;

  if (!loading && question) {
    loading = true;
    button.innerText = 'Carregando...';
    button.disabled = true;
    try {
      const response = await questionForGPT(question);
      if (response) {
        await player.translate(response);
      } else {
        alert('GPT está fora do ar.');
      }
    } catch (err) {
      console.error(err);
    } finally {
      loading = false;
      button.innerText = 'Enviar';
      button.disabled = false;
    }
  }
});
