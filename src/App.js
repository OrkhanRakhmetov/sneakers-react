import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import { useEffect, useState } from "react";

import axios from "axios";

function App() {

  const [cartOpened, setCartOpened] = useState(false);
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {

    // fetch('https://64296462ebb1476fcc485099.mockapi.io/items')
    //   .then(res => {
    //     return res.json();
    //   })
    //   .then(json => setItems(json));

    axios.get('https://64296462ebb1476fcc485099.mockapi.io/items')
      .then(res => {
        setItems(res.data)
      })
    // axios.get('https://64296462ebb1476fcc485099.mockapi.io/cart')
    //   .then(res => {
    //     setCartItems(res.data)
    //   })
    axios.get('https://64296462ebb1476fcc485099.mockapi.io/favorites')
      .then(res => {
        setFavorites(res.data)
      })
  }, [])

  const onAddToCart = (obj) => {
    axios.post('https://64296462ebb1476fcc485099.mockapi.io/cart', obj);

    // setCartItems([...cartItems, obj]);
    setCartItems(prev => [...prev, obj]);
  }

  const onRemoveItem = (id) => {
    axios.delete(`https://64296462ebb1476fcc485099.mockapi.io/cart/${id}`);
    setCartItems(prev => prev.filter(item => item.id === id))
    // console.log(id)
  }

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find(favObj => favObj.id === obj.id)) {
        axios.delete(`https://64296462ebb1476fcc485099.mockapi.io/favorites/${obj.id}`);
        // setFavorites(prev => prev.filter(item => item.id !== obj.id))
      } else {
        const { data } = await axios.post('https://64296462ebb1476fcc485099.mockapi.io/favorites', obj);
        setFavorites(prev => [...prev, data]);
      }
    } catch (error) {
      alert('Не удалось добавить в избранное')
    }
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  }

  return (
    <div className="wrapper clear">

      {/* {cartOpened ? <Drawer onClose={()=> setCartOpened(false)} /> : null}  */}
      {cartOpened && <Drawer onClose={() => setCartOpened(false)} items={cartItems} onRemove={onRemoveItem} />}

      <Header onClickCart={() => setCartOpened(true)} />

      <Routes>
        <Route exact path="/"
          element={
            <Home
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              items={items}
              onAddToCart={onAddToCart}
              onAddToFavorite={onAddToFavorite}
            />
          } />
        <Route exact path="/Favorites"
          element={
            <Favorites
              items={favorites}
              onAddToFavorite={onAddToFavorite} />
          } />
      </Routes>

    </div>
  )
}

export default App;
