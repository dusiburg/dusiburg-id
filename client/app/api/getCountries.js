export async function getCountries() {
  try {
    const response = await fetch("https://erth2.github.io/movc/geo/src/countries.json");
    const data = await response.json();
    
    return data;
  } catch (error) {
    console.error(error);
  }
}