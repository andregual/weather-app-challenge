const API_KEY = '0ea7a6f50f0282b54e96293809c27908';
const API_PATH = 'http://api.openweathermap.org/data/2.5';

export async function getCurrentForecast() {
  const response = await fetch(
    `${API_PATH}/weather?q=Lisbon&appid=${API_KEY}`
    
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch data.');
  }

  return data;
}
