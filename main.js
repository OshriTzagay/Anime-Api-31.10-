let basicApi = "https://api.jikan.moe/v3/";
async function getApi(api) {
  try {
    loaderGif();
    return await fetch(api)
      .then((response) => response.json())
      .then((res) => res.results);
  } catch (error) {
    return error;
  }
}
btn.onclick = () => {
  getApi(`${basicApi}search/anime?q=${searchInput.value}`)
    .finally(() => {
      stopGif();
    })
    .then((res) => {
      console.log(res);
      for (const item of res) {
        divPrint.innerHTML += `<div class="cards">
      <h1 class="divHeader">${item.title}</h1>
      <img src="${item.image_url}">
      <h3>Rating:<br>${item.score}</h3>
      <h5 id="theSynop">${item.synopsis}</h5>
      
      <a href="${item.url}">
    <button id="GoToBtn">GO</button></a></div>`;
      }
    })
    .finally(() => {
      stopGif();
    });
};

function loaderGif() {
  loader.innerHTML += `<img src ="https://i.gifer.com/ZJFD.gif">`;
}
function stopGif() {
  loader.style.display = "none";
}
