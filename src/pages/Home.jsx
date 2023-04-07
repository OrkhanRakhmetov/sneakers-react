import React from 'react';
import Card from '../components/Card'
import AppContext from '../context';


function Home({
  // items,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  // onAddToCart,
  // onAddToFavorite,
  isLoading }) {

  const { items, onAddToCart, onAddToFavorite } = React.useContext(AppContext)

  const renderItems = () => {


    const filtredItems = items && items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()));

    return (isLoading ? [...Array(12)] : filtredItems)
      .map((item, idx) => (
        <Card
          key={idx}
          // title={item.title}
          // price={item.price}
          // imageUrl={item.imageUrl}
          onClickAdd={(obj) => onAddToCart(obj)}
          onFavorite={(obj) => onAddToFavorite(obj)}
          // added={isItemAdded(item && item.id)}
          {...item}
          // favorited
          loading={isLoading}
        />
      ))
  }

  return (
    <div className='content p-40 '>

      <div className='d-flex align-center justify-between mb-40'>
        <h1 >{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
        <div className='search-block d-flex align-center'>
          <img src='/img/search.svg' alt='Search' onClick={() => setSearchValue('')} />
          <input onChange={onChangeSearchInput} value={searchValue} placeholder='Поиск...' />
        </div>
      </div>
      {/* {console.log(cartItems, items)} */}
      <div className='sneakers d-flex justify-center'>
        {renderItems()}
      </div>
    </div>
  )
}


export default Home;