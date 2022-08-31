
import React from 'react';
import { movies } from './Movies'

export default function Cart({ cart, setCart }) {
  const getTotalSum = () => {
    return cart.reduce(
      (sum, { cost, quantity }) => sum + cost * quantity,
      0
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const setQuantity = (movies, amount) => {
    const newCart = [...cart];
    newCart.find(
      (item) => item.name === movies.name
    ).quantity = amount;
    setCart(newCart);
  };

  const removeFromCart = (productToRemove) => {
    setCart(
      cart.filter((product) => product !== productToRemove)
    );
  };

  return (
    <>
      <h1>Cart</h1>
      {cart.length > 0 && (
        <button onClick={clearCart}>Clear Cart</button>
      )}
      <div className="products">
        {cart.map((movie, idx) => (
          <div className="product" key={idx}>
            <h3>{movie.name}</h3>
            <h4>${movie.cost}</h4>
            <input
              value={movie.quantity}
              onChange={(e) =>
                setQuantity(
                    movie,
                  parseInt(e.target.value)
                )
              }
            />
            <img src={movie.Poster} alt={movie.name} />
            <button onClick={() => removeFromCart(movie)}>
              Remove
            </button>
          </div>
        ))}
      </div>

      <div>Total Cost: ${getTotalSum()}</div>
    </>
  );
}
