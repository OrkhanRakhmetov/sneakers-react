import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import { useEffect, useState } from "react";

function App() {

  const [cartOpened, setCartOpened] = useState(false);
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch('https://64296462ebb1476fcc485099.mockapi.io/items')
      .then(res => {
        return res.json();
      })
      .then(json => setItems(json));
  }, [])

  const onAddToCart = (obj) => {
    // setCartItems([...cartItems, obj])
       setCartItems(prev => [...prev, obj])
  }

  return (
    <div className="wrapper clear">

      {/* {cartOpened ? <Drawer onClose={()=> setCartOpened(false)} /> : null}  */}
      {cartOpened && <Drawer onClose={() => setCartOpened(false)} items={cartItems} />}
      <Header onClickCart={() => setCartOpened(true)} />

      <div className='content p-40 '>

        <div className='d-flex align-center justify-between mb-40'>
          <h1 >Все кроссовки</h1>
          <div className='search-block d-flex align-center'>
            <img src='/img/search.svg' alt='Search' />
            <input placeholder='Поиск...' />
          </div>
        </div>

        <div className='sneakers d-flex justify-center'>
          {items.map((item, id) => (
            <Card
              key={id}
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              onClickAdd={(obj) => onAddToCart(obj)}
              onClickFavorite={() => console.log("Нажали на +")}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App;
