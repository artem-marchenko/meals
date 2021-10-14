import { useState, useEffect } from 'react';
import { getMeals } from '../api';
import { MealsList } from '../components/MealsList';

function Meals() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    getMeals().then((data) => {
      setMeals(data.meals);
    });
  }, []);

  return (
    <>
      <MealsList meals={meals} />
    </>
  );
}

export { Meals };
