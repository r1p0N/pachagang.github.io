const queryForm = document.getElementById('query-form');

const queryInput = document.getElementById('query-input');

const responseDiv = document.getElementById('response');

queryForm.addEventListener('submit', async (e) => {

  e.preventDefault();

  const query = queryInput.value;

  const response = await fetch('https://api.openai.com/v1/engines/davinci/completions', {

    method: 'POST',

    headers: {

      'Content-Type': 'application/json',

      'Authorization': 'Bearer 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',

    },

    body: JSON.stringify({

      prompt: query,

      max_tokens: 2048,

    }),

  });

  const json = await response.json();

  responseDiv.textContent = json.choices[0].text;

});

