console.log("Let's get this party started!");


const gifArea = document.getElementById("gif-area");
const searchInput = document.getElementById("search");
const form = document.querySelector("form");
const removeButton = document.getElementById("remove");

/* use fetch result to add a gif */
function addGif(res) {
  let numResults = res.data.length;
  if (numResults) {
    let randomIdx = Math.floor(Math.random() * numResults);
    let newDiv = document.createElement("div");
    newDiv.className = 'new-div';
    let newGif = document.createElement("img");
    newGif.src = res.data[randomIdx].images.original.url;
    newGif.className = "w-100";
    newDiv.appendChild(newGif);
    gifArea.appendChild(newDiv);
  }
}

/* handle form submission: clear search box & make fetch call */
form.addEventListener("submit", async function(evt) {
  evt.preventDefault();

  let searchTerm = searchInput.value;
  searchInput.value = "";

  try {
    const response = await fetch(
      `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`
    );
    const data = await response.json();
    addGif(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});

/* remove gif */
removeButton.addEventListener("click", function() {
  gifArea.innerHTML = "";
});

