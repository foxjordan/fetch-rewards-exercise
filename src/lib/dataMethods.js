const URL = "https://frontend-take-home.fetchrewards.com/form";

export const getStates = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  let states = data.states.map((state) => {
    return { value: state.abbreviation, label: state.name };
  });
  return states;
};

export const getOccupations = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  let occupations = data.occupations.map((occupation) => {
    return { value: occupation, label: occupation };
  });
  return occupations;
};


export async function sendData(url = '', data = {}) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data) 
  });
  return response.json(); 
}
