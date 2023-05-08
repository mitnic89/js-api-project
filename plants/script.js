

const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");
const cards = document.getElementById('cards');

searchBtn.addEventListener("click", (event) => {
  getPlants(searchInput.value);
});



async function getPlants(query) {
  const url = `https://plants2.p.rapidapi.com/api/plants?CN=${query}`;
  const options = {
    method: "GET",
    headers: {
      "content-type": "application/octet-stream",
      Authorization:
        "GKZOHNZj0xP65kk0BAE2Tl9LGagm0pfD3DFNxAEEZcMQBhRZVDco8vbNJdnwwCo0",
      "X-RapidAPI-Key": "5588bd1f7bmsh50b160656f4b06cp1b1c53jsn61dd2b521ea4",
      "X-RapidAPI-Host": "plants2.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    // change .text to .json below
    const result = await response.json();
    displayData(result);
  } catch (error) {
    console.error(error);
  }
}

function displayData(data) {
    console.log(data);
    //See everything in a loop with each tags and items
    for (let i = 0; i < data.length; i++) {
        //? createElement
        var cols = document.createElement('div');
        cols.classList.add('col-6');
        var h2 = document.createElement('h2');
        h2.innerHTML = "Common Name: " + data[i].CommonName;
        var h3_1 = document.createElement('h3');
        h3_1.innerHTML = "Scientific Name: " + data[i].ScientificName;
        var h3_2 = document.createElement('h3');
        h3_2.innerHTML = "Class: " + data[i].Class;
        var h3_3 = document.createElement('h3');
        h3_3.innerHTML = "Family: " + data[i].Family;
        var h3_4 = document.createElement('h3');
        h3_4.innerHTML = "Category: " + data[i].Category;
        var h3_5 = document.createElement('h3');
        h3_5.innerHTML = "Genus: " + data[i].Genus;
        var h3_6 = document.createElement('h3');
        h3_6.innerHTML = "Kingdom: " + data[i].Kingdom;
        cols.appendChild(h2);
        cols.appendChild(h3_1);
        cols.appendChild(h3_2);
        cols.appendChild(h3_3);
        cols.appendChild(h3_4);
        cols.appendChild(h3_5);
        cols.appendChild(h3_6);
        cards.appendChild(cols);
    }
}

// connect h3 elements to style.css
 

// how to put the h3's on a different/new line 
// how to connect javascript to css external style sheet



// trigger search button through return key

// Get the input field
var input = document.getElementById("searchInput");

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("searchBtn").click();
  }
});
