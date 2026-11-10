const search = document.getElementById("recipe-search");
const status = document.getElementById("search-status");
const groups = [...document.querySelectorAll("[data-group]")];

search.closest(".search").hidden = false;
search.addEventListener("input", () => {
  const query = search.value.trim().toLowerCase();
  let matches = 0;
  for (const group of groups) {
    let groupMatches = 0;
    for (const item of group.querySelectorAll("[data-recipe]")) {
      item.hidden = !item.textContent.toLowerCase().includes(query);
      groupMatches += Number(!item.hidden);
    }
    group.hidden = groupMatches === 0;
    matches += groupMatches;
  }
  status.hidden = !query;
  status.textContent = matches === 0 ? "No recipes match that search." : `${matches} recipe${matches === 1 ? "" : "s"} found.`;
});
