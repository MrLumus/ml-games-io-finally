import axios from "axios";

export function fetchGames({ page, ordering, platforms, search }) {
  let url =
    "https://api.rawg.io/api/games?key=cc756ba483254278b86372f95b59dd4b";

  if (page) url += `&page=${page}`;
  if (ordering) url += `&ordering=${ordering}`;
  if (platforms) url += `&platforms=${platforms}`;
  if (search) url += `&search=${search}`;

  console.log(url);
  return axios.get(url);
}

export function fetchPlatforms() {
  return axios.get(
    "https://api.rawg.io/api/platforms?key=cc756ba483254278b86372f95b59dd4b"
  );
}

export function fetchGameById(gameId) {
  return axios.get(
    `https://api.rawg.io/api/games/${gameId}?key=cc756ba483254278b86372f95b59dd4b`
  );
}

export function fetchGameScreenshots(gameId) {
  return axios.get(
    `https://api.rawg.io/api/games/${gameId}/screenshots?key=cc756ba483254278b86372f95b59dd4b`
  );
}

export function fetchGameLinks(gameId) {
  return axios.get(
    `https://api.rawg.io/api/games/${gameId}/stores?key=cc756ba483254278b86372f95b59dd4b`
  );
}
