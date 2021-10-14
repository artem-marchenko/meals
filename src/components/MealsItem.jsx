function MealsItem(props) {
  const { strMeal, strMealThumb } = props;
  return (
    <div>
      <div class='card'>
        <div class='card-image waves-effect waves-block waves-light'>
          <img class='activator' src={strMealThumb} alt={strMeal} />
        </div>
        <div class='card-content'>
          <span class='card-title size-10 activator grey-text text-darken-4'>
            {strMeal}
          </span>
        </div>
      </div>
    </div>
  );
}

export { MealsItem };
