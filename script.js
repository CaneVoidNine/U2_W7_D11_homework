const loadFloyd = () => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "7a3151f032msha018641da7ede56p1698ddjsn9683e54f257d",
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    },
  };

  fetch(
    "https://deezerdevs-deezer.p.rapidapi.com/search?q=pink%20floyd",
    options
  )
    .then((response) => response.json())
    .then((songList) => {
      let containerRow = document.querySelector(".container .row");
      for (let i = 0; i < songList.data.length; i++) {
        const song = songList.data[i];
        const column = document.createElement("div");
        column.className = "col-3";
        column.innerHTML = `<div class="card" style="width: 18rem;">
      <img src=${song.album.cover} class="card-img-top" alt="...">
      <div class="card-body">
        <p class="card-text"> ${song.title} </p>
      </div>
    </div>`;
        containerRow.appendChild(column);
      }
    })
    .catch((err) => console.error(err));
};
