import { API_URL } from './config';

const getMeals = async () => {
  const response = await fetch(API_URL + 'filter.php?c=Chicken');
  return await response.json();
};

export { getMeals };
