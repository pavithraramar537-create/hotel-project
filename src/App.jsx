import React, { useState } from 'react';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);

  const menuItems = [
    { id: 1, name: "Idli Sambar", price: 40, img: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400" }, 
    { id: 2, name: "Poori Curry", price: 50, img: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400" },
    { id: 3, name: "Veg Meals", price: 120, img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400" },
    { id: 4, name: "chapathi", price: 30, img: "src/assets/chapathi.jpg"},
    { id: 5, name: "Dosa", price: 40, img:"src/assets/dosa.jpg"},
    { id: 6, name: "Parotta", price: 15, img:"src/assets/parotta.jpg"},
    { id: 7, name: "Biriyani", price: 180, img:"src/assets/biriyani.jpg"},
    { id: 8, name: "Rice and Curry", price: 100, img:"src/assets/rice and curry.jpg"},
  ];

  const addToCart = (item) => {
    setCart([...cart, item]);
    alert(`${item.name} add to card!`);
  };

  return (
    <div className="App">
      <header>
        <h1>🍽️ RMP Hotel</h1>
        <div className="cart">Cart: {cart.length} items</div>
      </header>
      
      <h2>Today's Special Menu</h2>
      <div className="menu-grid">
        {menuItems.map((item) => (
          <div key={item.id} className="menu-card">
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p>Price: ₹{item.price}</p>
            <button onClick={() => addToCart(item)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;