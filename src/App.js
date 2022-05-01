import React, { useState } from "react";
import Header from "./Layout/Header";
import Meals from "./Meal/Meals";
import Cart from "./Cart/Cart";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };
  
  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <Meals />
    </>
  );
}

export default App;
