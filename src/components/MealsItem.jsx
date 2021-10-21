function MealsItem(props) {
  const { strMeal, strMealThumb } = props;
  return (
    <div>
      <div className='card'>
        <div className='card-image waves-effect waves-block waves-light'>
          <img
            className='activator'
            src={strMealThumb}
            alt={strMeal}
          />
        </div>
        <div className='card-content'>
          <span className='card-title size-10 activator grey-text text-darken-4'>
            {strMeal}
          </span>
        </div>
      </div>
    </div>
  );
}

export { MealsItem };
