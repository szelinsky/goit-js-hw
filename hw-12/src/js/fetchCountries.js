
export default function fetchCountries(searchQuery) {
  const apiUrl = 'https://restcountries.eu/rest/v2/name/';
  
  return fetch(apiUrl + searchQuery)
  .then(response => {
    return response.json();
  })
  .then(data => data)

  .catch(error => {

    console.log(error, 'my error')
  });
	
}  
