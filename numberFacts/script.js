const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");
const cards = document.getElementById("cards");

searchBtn.addEventListener("click", (event) => {
  getMathFact(searchInput.value);
});

async function getMathFact(query) {
  const url = `https://numbersapi.p.rapidapi.com/random/trivia?number=${query}`;
  const options = {
    method: "GET",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "5588bd1f7bmsh50b160656f4b06cp1b1c53jsn61dd2b521ea4",
      "X-RapidAPI-Host": "numbersapi.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(response.status);
    }
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

function displayData(data) {
  console.log(data.text[0]);
  //See everything in a loop with each tags and items
  for (let i = 0; i < data.text.length; i++) {
    console.log(data.text[i].tags);
    //? createElement
    var div = document.createElement("div");
    div.innerHTML = data.text[i].tags;
    cards.appendChild(div);
  }
}
