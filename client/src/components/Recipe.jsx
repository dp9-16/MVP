const Recipe = ({ recipe }) => {
  return (
    <div className='recgrid'>
      <img src={recipe.recipe.image}/>
      <div>
        <p>{recipe.recipe.label}</p>
        <div id='recinfo'>
        <p>{Math.round(recipe.recipe.calories/recipe.recipe.yield)}</p>
        <p>{recipe.recipe.totalTime}</p>
        <p>{recipe.recipe.yield}</p>
        <p>Cal/Serving</p>
        <p>Cook Time</p>
        <p>Serving Size</p>
        </div>
      </div>
      <div id='ing'>
        {recipe.recipe.ingredientLines.map((ingredient) => {
          return (<p key={ingredient}>{ingredient}</p>)
        })}
      </div>
      <div style={{'display':'block','justifyContent':'center'}}>
        <p>CHECK OUT THE RECIPE</p>
        <a href={recipe.recipe.url}>{recipe.recipe.url}</a>
      </div>
    </div>
  )
}

export default Recipe;