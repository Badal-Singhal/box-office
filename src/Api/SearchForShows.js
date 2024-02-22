const Base_URL = 'https://api.tvmaze.com';

const apiGet = async queryString => {
  const response = await fetch(`${Base_URL}${queryString}`);
  const body = await response.json();
  return body;
};

export const SearchForShows = (query,option) => {return apiGet(`/search/${option}?q=${query}`);}

export const getShowurl=showId =>{return apiGet(`/shows/${showId}?embed[]=seasons&embed[]=cast`);}

export const getShowByIds=async showIds=>{
  const promises=showIds.map(showId=>apiGet(`/shows/${showId}`));
  const result= await Promise.all(promises)
  return result;
}