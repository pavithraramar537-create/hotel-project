import './App.css'

function App() {
  // 6 Sapatu items data
  const foodItems = [
    {
      id: 1,
      name: "Biryani",
      price: "₹250",
      img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500",
      desc: "Spicy hyderabadi chicken biryani with raita"
    },
    {
      id: 2,
      name: "Dosa",
      price: "₹80",
      img: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=500",
      desc: "Crispy masala dosa with sambar & chutney"
    },
    {
      id: 3,
      name: "Parotta",
      price: "₹50",
      img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500",
      desc: "Soft layered parotta with salna"
    },
    {
      id: 4,
      name: "Meals",
      price: "₹120",
      img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=500",
      desc: "Full south indian meals unlimited"
    },
    {
      id: 5,
      name: "Idli",
      price: "₹40",
      img: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500",
      desc: "Soft idli with sambar & 3 types chutney"
    },
    {
      id: 6,
      name: "Chicken 65",
      price: "₹180",
      img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500",
      desc: "Spicy fried chicken 65 starter"
    }
  ]

  return (
    <div className="hotel-app">
      {/* Header */}
      <header className="header">
        <h1>🏨 PAVI HOTEL</h1>
        <p>Rusi kanda idam soru kanda idam</p>
      </header>

      {/* Food Grid */}
      <div className="food-container">
        <h2>Today's Special Menu 🔥</h2>
        
        <div className="food-grid">
          {foodItems.map((food) => (
            <div key={food.id} className="food-card">
              <img src={food.img} alt={food.name} />
              <div className="food-info">
                <h3>{food.name}</h3>
                <p className="desc">{food.desc}</p>
                <div className="price-row">
                  <span className="price">{food.price}</span>
                  <button className="order-btn">Order Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer>
        <p>📍 Tuticorin | 📞 98765 43210 | ⏰ 7AM - 11PM</p>
      </footer>
    </div>
  )
}

export default App