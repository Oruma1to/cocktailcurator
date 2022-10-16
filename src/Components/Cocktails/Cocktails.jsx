import './Cocktails.css'
import Cocktail from './Cocktail'

const Cocktails = ({ drinks }) => {
  return (
    <div>
      {drinks.map(drink => <Cocktail key={drink.idDrink} drink={drink} />)};
    </div>
  );
};


export default Cocktails;