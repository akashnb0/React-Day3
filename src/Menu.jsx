import React from 'react';
import './App.css';
const menu = {
    coffee: [
      { name: "Espresso", price: 2.5 },
      { name: "Latte", price: 3.5 },
      { name: "Cappuccino", price: 3.0 },
    ],
    tea: [
      { name: "Green Tea", price: 2.5 },
      { name: "Earl Grey", price: 3.0 },
      { name: "Chai", price: 3.5 },
    ],
    pastries: [
      { name: "Croissant", price: 2.0 },
      { name: "Muffin", price: 2.5 },
      { name: "Scone", price: 2.5 },
    ],
  };
  function Menu() {
    const [cart, setCart] = React.useState([]);
    
    function addToCart(item) {
      setCart([...cart, item]);
    }
    
    return (
      <div>
        <header className='head'>
          <h1>Coffee Shop</h1>
          <p>A great place to enjoy coffee and pastries</p>
        
        <nav className='topnav'>
          <ul>
            <li><a href="#coffee">Coffee</a></li>
            <li><a href="#tea">Tea</a></li>
            <li><a href="#pastries">Pastries</a></li>
          </ul>
        </nav>
        </header>
        <section id="coffee">
          <h2>Coffee</h2>
          <ul>
            {menu.coffee.map(item => (
              <li key={item.name}>
                {item.name} - ${item.price}
                <button onClick={() => addToCart(item)}>Add to Cart</button>
              </li>
            ))}
          </ul>
        </section>
        <section id="tea">
          <h2>Tea</h2>
          <ul>
            {menu.tea.map(item => (
              <li key={item.name}>
                {item.name} - ${item.price}
                <button onClick={() => addToCart(item)}>Add to Cart</button>
              </li>
            ))}
          </ul>
        </section>
        <section id="pastries">
          <h2>Pastries</h2>
          <ul>
            {menu.pastries.map(item => (
              <li key={item.name}>
                {item.name} - ${item.price}
                <button onClick={() => addToCart(item)}>Add to Cart</button>
              </li>
            ))}
          </ul>
        </section>
        <aside id='cart'> 
          <h2>Cart</h2>
          <ul>
            {cart.map(item => (
              <li key={item.name}>
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
          <p>Total: ${cart.reduce((total, item) => total + item.price, 0)}</p>
        </aside>
      </div>
    );
  }
  export default Menu;