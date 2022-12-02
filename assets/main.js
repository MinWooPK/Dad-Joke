

document.getElementById('jokeBtn').addEventListener('click', joke);

async function joke() {
  let config = {
    headers: {
      Accept: 'application/json',
    },
  };

  let fetchData = await fetch('https://icanhazdadjoke.com/', config);
  let data = await fetchData.json();
  document.getElementById('joke').innerHTML = data.joke;  

}




