const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");

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
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
