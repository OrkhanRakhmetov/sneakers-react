import Card from '../components/Card'

function Home({ searchValue,
  // setSearchValue,
  onChangeSearchInput,
  items,
  onAddToCart,
  onAddToFavorite }) {
  return (
    <div className='content p-40 '>

      <div className='d-flex align-center justify-between mb-40'>
        <h1 >{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
        <div className='search-block d-flex align-center'>
          <img src='/img/search.svg' alt='Search' />
          <input onChange={onChangeSearchInput} value={searchValue} placeholder='Поиск...' />
        </div>
      </div>

      <div className='sneakers d-flex justify-center'>
        {items
          .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
          .map((item, index) => (
            <Card
              key={index}
              // title={item.title}
              // price={item.price}
              // imageUrl={item.imageUrl}
              {...item}
              onClickAdd={(obj) => onAddToCart(obj)}
              onFavorite={(obj) => onAddToFavorite(obj)}
            />
          ))}
      </div>
    </div>
  )
}

export default Home;