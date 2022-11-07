const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "7a3151f032msha018641da7ede56p1698ddjsn9683e54f257d",
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  },
};

fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=pink floyd", options)
  .then((response) => response.json())

  .then((data) => {
    displayTitleFloyd(data);
  })
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=daft punk", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=metallica", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

function displayTitleFloyd(data) {
  const mainDiv = document.querySelector("#body");
  for (i = 0; i < data.data.length; i++) {
    let cardDiv = document.createElement("div");
    cardDiv.className = "card";
    cardDiv.style = "width: 18rem;";
    let img = document.createElement("img");
    img.src = data.data[i].album.cover_medium;
    img.className = "card-img-top border border-danger";
    cardDiv.appendChild(img);
    let cardBodyDiv = document.createElement("div");
    cardBodyDiv.className = "card-body border border-danger";
    cardDiv.appendChild(cardBodyDiv);
    let addH5 = document.createElement("h5");
    addH5.className = "card-title";
    addH5.innerText = data.data[i].title;
    let addP = document.createElement("p");
    addP.className = "card-text";
    addP.innerText = "Song: " + data.data[i].title;

    cardBodyDiv.appendChild(addP);
    mainDiv.appendChild(cardDiv);
  }
  1000;
}

function displayTitleMetal(data) {
  const mainDiv = document.querySelector("#butt");
  for (i = 0; i < data.data.length; i++) {
    let cardDiv = document.createElement("div");
    cardDiv.className = "card";
    cardDiv.style = "width: 18rem;";
    let img = document.createElement("img");
    img.src = data.data[i].album.cover_medium;
    img.className = "card-img-top";
    cardDiv.appendChild(img);
    let cardBodyDiv = document.createElement("div");
    cardBodyDiv.className = "card-body";
    cardDiv.appendChild(cardBodyDiv);
    let addH5 = document.createElement("h5");
    addH5.className = "card-title m-5";
    addH5.innerText = data.data[i].title;

    mainDiv.appendChild(cardDiv);
  }
  1000;
}
