import { useState, useEffect } from 'react';
import { getMeals } from '../api';
import { MealsList } from '../components/MealsList';

function Home() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    getMeals().then((data) => {
      setMeals(data.meals.filter((meal) => meal.idMeal < 52780));
    });
  }, []);
  return (
    <>
      <MealsList meals={meals} />
    </>
  );
}

export { Home };
