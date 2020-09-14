//jshint esversion:6
const form = document.getElementById("form");
const search = document.getElementById("search");
const result = document.getElementById("result");
const more = document.getElementById("more");

const apiUrl = "https://api.lyrics.ovh";

search.focus();

//fetch song from api(search song)
function searchSong(term) {
  fetch(`${apiUrl}/suggest/${term}`)
    .then((res) => res.json())
    .then((data) => {
      showData(data);
    });
}

//showing data in DOM
function showData(data) {
  result.innerHTML = `
        <ul class="songs">
            ${data.data
              .map(
                (song) => `
                    <li>
                        <span><strong>${song.artist.name}</strong> - ${song.title}</span>
                        <button class="btn btn-info" data-artist="${song.artist.name}" data-songtitle="${song.title}">Get Lyrics</button>
                    </li>
                `
              )
              .join("")}
        </ul>
    `;

  if (data.prev || data.next) {
    more.innerHTML = `
            ${
              data.prev
                ? `
            <button class="btn btn-primary" onclick="getMoreSongs('${data.prev}')">Prev</button>
            `
                : ""
            }

            ${
              data.next
                ? `
            <button class="btn btn-primary" onclick="getMoreSongs('${data.next}')">Next</button>
            `
                : ""
            }
        `;
  } else {
    more.innerHTML = "";
  }
}

window.getMoreSongs = getMoreSongs; //https://stackoverflow.com/questions/63856039/uncaught-referenceerror-getmoresongsfunction-is-not-defined-onclick?noredirect=1#comment112919126_63856039

//pagiantion
function getMoreSongs(url) {
  //bcz of Cross-Origin Request Blocked,
  //https://github.com/Rob--W/cors-anywhere

  fetch(`https://cors-anywhere.herokuapp.com/${url}`) //bcz of Cross-Origin Request Blocked,
    .then((res) => res.json())
    .then((data) => {
      showData(data);
    });
}

//get lyrics from song
async function getLyrics(artist, songTitle) {
  const res = await fetch(`${apiUrl}/v1/${artist}/${songTitle}`);

  const data = await res.json();

  if (data.lyrics === undefined) {
    alert("Sorry No Lyrics Found!");
  } else {
    const lyrics = data.lyrics.replace(/(\r\n|\r|\n)/g, "<br>");

    result.innerHTML = `<h2><strong>${artist}</strong> - ${songTitle}</h2>
  <span>${lyrics}</span>`;
  }

  more.innerHTML = "";
}

//event listeners

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchTerm = search.value.trim();

  if (!searchTerm) {
    alert("your search term is empty!");
  } else {
    searchSong(searchTerm);
  }

  search.value = "";
});

//Get lyrics button event
result.addEventListener("click", (e) => {
  const ClickBtn = e.target;

  //checking is it clicking get lyrics button or not
  if (ClickBtn.tagName === "BUTTON") {
    const artist = ClickBtn.getAttribute("data-artist");
    const songTitle = ClickBtn.getAttribute("data-songTitle");

    getLyrics(artist, songTitle);
  }
});
