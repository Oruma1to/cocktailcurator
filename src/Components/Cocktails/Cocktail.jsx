import './Cocktail.css'

const Cocktail = ({ drink }) => {
  const ingredients = [];
  const measures = [];
  let listItems = [];

  for(let key in drink) {
    if(key.includes('strIngredient') && drink[key] !== null) ingredients.push(drink[key]);
    if(key.includes('strMeasure') && drink[key] !== null) measures.push(drink[key])
  }

  for(let i = 0; i < ingredients.length; i++) {
    listItems.push((measures[i] ? measures[i] : '') + " " + ingredients[i]);
  }

  //TODO
  // from here we just need to create solo pages for each cocktail for indepth instructions

  console.log(listItems)
  return (
    <div className="cocktail-container">
      <div className="cocktail-card">
        <img src={drink.strDrinkThumb} className="cocktail-image" alt="cocktail" />
        <div className="cocktail-ingredients">
          <p className="cocktail-title">{drink.strDrink}</p>
          <p className="cocktail-wyn">What you'll need</p>
          <div className="cocktail-build">
          {listItems.map(item => <li>{item}</li>)}
            <p className="cocktail-instructions">{drink.strInstructions}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cocktail;