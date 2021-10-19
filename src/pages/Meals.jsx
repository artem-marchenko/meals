import { useState, useEffect } from 'react';
import { getMeals } from '../api';
import { MealsList } from '../components/MealsList';

function Meals() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    getMeals().then((data) => {
      setMeals(data.meals.filter((meal) => meal.strMeal.length < 25));
    });
  }, []);

  return (
    <>
      <h2 className='list_title'>Products Page</h2>
      <MealsList meals={meals} />
    </>
  );
}

export { Meals };
