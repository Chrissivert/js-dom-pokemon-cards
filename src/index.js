const cardsContainer = document.querySelector(".cards");

data.forEach(pokemon => {
  const card = document.createElement("li");
  card.classList.add("card");

  // Title
  const title = document.createElement("h2");
  title.classList.add("card--title");
  title.textContent = pokemon.name;

  // Image
  const img = document.createElement("img");
  img.classList.add("card--img");
  img.width = 256;
  img.src = pokemon.sprites.other["official-artwork"].front_default;
  img.alt = pokemon.name;

  // Stats list
  const statsList = document.createElement("div");
  statsList.classList.add("card--text");
  pokemon.stats.forEach(statObj => {
    const li = document.createElement("div");
    li.textContent = `${statObj.stat.name.toUpperCase()}: ${statObj.base_stat}`;
    statsList.appendChild(li);
  });

  // Games list
  const gamesList = document.createElement("div");
  gamesList.classList.add("card--games"); 
  pokemon.game_indices.forEach(gameObj => {
    const li = document.createElement("div");
    li.textContent = gameObj.version.name;
    gamesList.appendChild(li);
  });

  // Assemble card
  card.appendChild(title);
  card.appendChild(img);
  card.appendChild(statsList);

  // Game section title
  const gamesTitle = document.createElement("h3");
  gamesTitle.textContent = "Games Appeared In:";
  card.appendChild(gamesTitle);
  card.appendChild(gamesList);

  
// Easter egg
const hoverText = document.createElement("div");
hoverText.classList.add("hover-text");
hoverText.textContent = "Hi Nigel :)";
card.appendChild(hoverText);

  cardsContainer.appendChild(card);
});
