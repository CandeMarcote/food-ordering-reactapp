import React from "react";
import classes from './Header.module.css';
import reactMeals from '../Assets/meals.jpg';
import HeaderCartButton from "../Layout/HeaderCartButton";

const Header = (props) => {
  return (
    <>
    <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onShow={props.onShowCart} />
    </header>
    <div className={classes['main-image']}>
        <img src={reactMeals} alt="a table full of delicious food!" />
    </div>
    </>
  )
}

export default Header