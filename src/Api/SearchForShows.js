const Base_URL = 'https://api.tvmaze.com';

const apiGet = async queryString => {
  const response = await fetch(`${Base_URL}${queryString}`);
  const body = await response.json();
  return body;
};

export const SearchForShows = (query,option) => {return apiGet(`/search/${option}?q=${query}`);}

export const getShowurl=showId =>{return apiGet(`/shows/${showId}`);}