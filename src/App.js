import React from "react";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import AppContext from "./context";

import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import Orders from "./pages/Orders";

function App() {

  const [cartOpened, setCartOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  // console.log(cartItems)


  // useEffect(() => {

  //   // fetch('https://642c1eca208dfe2547288b56.mockapi.io/items')
  //   //   .then(res => {
  //   //     return res.json();
  //   //   })
  //   //   .then(json => setItems(json));

  //   axios.get('https://642c1eca208dfe2547288b56.mockapi.io/items')
  //     .then(res => {
  //       setItems(res.data)
  //     })
  //   axios.get('https://642c1eca208dfe2547288b56.mockapi.io/cart')
  //     .then(res => {
  //       setCartItems(res.data)
  //     })
  //   // axios.get('https://642c1eca208dfe2547288b56.mockapi.io/favorites')
  //   //   .then(res => {
  //   //     setFavorites(res.data)
  //   //   })
  // }, [])


  useEffect(() => {

    async function fetchData() {

      try {
        const [cartResponse, itemsResponse] = await Promise.all([
          axios.get('https://642c1eca208dfe2547288b56.mockapi.io/cart'),
          // const favoritesResponse = await  axios.get('https://642c1eca208dfe2547288b56.mockapi.io/favorites');
          axios.get('https://642c1eca208dfe2547288b56.mockapi.io/items'),
        ]);
        // setIsLoading(true);

        setIsLoading(false);
        setCartItems(cartResponse.data)
        // setFavorites(favoritesResponse.data)
        setItems(itemsResponse.data)
      }
      catch (error) {
        alert('ошибка при запросе данных')
      }
    }

    fetchData();
  }, [])

  // const onAddToCart = (obj) => {
  //   console.log(obj)

  //     if (cartItems.find(item => item.id === obj.id)) {

  //       setCartItems((prev) => prev.filter((item) => item.id !== obj.id));
  //       axios.delete(`https://642c1eca208dfe2547288b56.mockapi.io/cart/${obj.id}`);
  //     } 
  //     else {
  //       axios.post('https://642c1eca208dfe2547288b56.mockapi.io/cart', obj);

  //       // 
  //       setCartItems(prev => [...prev, obj]);
  //     }

  //   // catch (error) {
  //   //   alert('Не удалось добавить в избранное')
  //   // }
  // }

  const onAddToCart = async (obj) => {
    // console.log(obj);
    try {
      const findItem = cartItems.find((item) => Number(item.parentId) === Number(obj.id));
      if (findItem) {
        setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
        await axios.delete(`https://642c1eca208dfe2547288b56.mockapi.io/cart/${findItem.id}`);
      } else {
        axios.post('https://642c1eca208dfe2547288b56.mockapi.io/cart', obj);
        setCartItems((prev) => [...prev, obj]);
        // setCartItems([...cartItems, obj]);
      }
    } catch (error) {
      alert("ошибка при добавлении в корзину")
    }

  };

  const onRemoveItem = (id) => {
    axios.delete(`https://642c1eca208dfe2547288b56.mockapi.io/cart/${id}`);
    setCartItems(prev => prev.filter(item => Number(item.id) !== Number(id)))
    // console.log(id)
  }

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find(favObj => Number(favObj.id) === Number(obj.id))) {
        axios.delete(`https://642c1eca208dfe2547288b56.mockapi.io/favorites/${obj.id}`);
        setFavorites(prev => prev.filter(item => Number(item.id) !== Number(obj.id)))
      } else {
        const { data } = await axios.post('https://642c1eca208dfe2547288b56.mockapi.io/favorites', obj);
        setFavorites(prev => [...prev, data]);
      }
    } catch (error) {
      alert('Не удалось добавить в избранное')
    }
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  }

  const isItemAdded = (id) => {
    // console.log(id)
    return cartItems.some((obj) => Number(obj.perentId) === Number(id))
  }

  return (
    <AppContext.Provider
      value={{ items, cartItems, favorites, isItemAdded, onAddToCart, onAddToFavorite, setCartOpened, setCartItems }}>
      <div className="wrapper clear">

        {/* {cartOpened ? <Drawer onClose={()=> setCartOpened(false)} /> : null}  */}

        {cartOpened && <Drawer
          onClose={() => setCartOpened(false)}
          items={cartItems}
          onRemove={onRemoveItem}
        />}

        <Header onClickCart={() => setCartOpened(true)} />

        <Routes>
          <Route exact path=""
            element={
              <Home
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                onChangeSearchInput={onChangeSearchInput}
                // items={items}
                cartItems={cartItems}
                // onAddToCart={onAddToCart}
                // onAddToFavorite={onAddToFavorite}
                isLoading={isLoading}
              />
            } />
          <Route exact path="Favorites"
            element={
              <Favorites
              // items={favorites}
              // onAddToFavorite={onAddToFavorite}
              />
            } />
          <Route exact path="Orders"
            element={
              <Orders
              // items={favorites}
              // onAddToFavorite={onAddToFavorite} 
              />
            } />
        </Routes>

      </div>
    </AppContext.Provider>

  )
}

export default App;
