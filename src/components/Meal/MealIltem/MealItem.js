import React, {useContext} from 'react';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import CartContext from '../../../Store/cart-context';

const MealItem = ({meal: {name, description, price, id}}) => {
    const cartCtx = useContext(CartContext)
    const addToCartHandler = amount => {
        cartCtx.addItem({name, description, price, id, amount:amount})
    };

  return (
      <li className={classes.meal}>
          <div>
              <h3>{name}</h3>
              <div className={classes.description}>{description}</div>
              <div className={classes.price}>${price.toFixed(2)}</div>
          </div>
          <div>
              <MealItemForm onAddToCart={addToCartHandler} id={id}/>
          </div>
      </li>
  )
}

export default MealItem