//jshint esversion:6
const form = document.getElementById("form");
const search = document.getElementById("search");
const result = document.getElementById("result");
const more = document.getElementById("more");

const apiUrl = "https://api.lyrics.ovh";

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
