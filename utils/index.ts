//fetch car data from Cars by API-Ninjas
export async function fetchCars() {
  const headers = {
    'X-RapidAPI-Key': '3ad0dd5eebmshafc7ff01f80c4e1p1d4e0djsn5d4c75f4e048',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
  }

  const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
    headers: headers,
  });

  const result = await response.json();
  // taking JSOn as input and parsing it to produce a JS object

  return result
}