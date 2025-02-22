const API_KEY = '';

async function questionForGPT(question) {
  const prompt = `Responda à seguinte pergunta com o mínimo de palavras possível, preferencialmente uma única palavra. Não use abreviações ou símbolos; substitua-os por suas formas completas (por exemplo, 'm' por 'metro'). Mantenha o significado intacto. Pergunta: \"${question}?\"`;

  const data = {
    model: 'gpt-4o-mini',
    messages: [{ role: 'user', content: prompt }],
    max_completion_tokens: 300,
  };

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      'Content-Type': 'application/json',
    },
  });

  const json = await response.json();
  const [{ message }] = json.choices;
  return message?.content;
}

export default questionForGPT;
