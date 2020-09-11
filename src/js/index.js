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
  console.log(data);

  result.innerHTML = `
        <ul class="songs">
            ${data.data
              .map(
                (song) => `
                    <li>
                        <span><strong>${song.artist.name}</strong> - ${song.title}</span>
                        <button class="btn btn-primary" data-artist="${song.artist.name}" data-songtitle="${song.title}">Get Lyrics</button>
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
            <button class="btn btn-primary" onclick="getMoreSong('${data.prev}')">Prev</button>
            `
                : ""
            }

            ${
              data.next
                ? `
            <button class="btn btn-primary" onclick="getMoreSong('${data.next}')">Next</button>
            `
                : ""
            }
        `;
  } else {
    more.innerHTML = "";
  }
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
