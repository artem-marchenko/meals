import { useState, useEffect } from 'react';
import { getMeals } from '../api';
import { MealsHomeList } from '../components/MealsHomeList';

function Home() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    getMeals().then((data) => {
      setMeals(
        data.meals.filter(
          (meal) => meal.idMeal < 52840 && meal.strMeal.length < 25
        )
      );
    });
  }, []);
  return (
    <>
      <div className='home__content'>
        <h2 className='list_title'>Home Page</h2>
        <MealsHomeList meals={meals} />
      </div>
    </>
  );
}

export { Home };
