import Card from '../components/Card'

function Favorites({ items, onAddToFavorite }) {
  return (
    <div className='content p-40 '>

      <div className='d-flex align-center justify-between mb-40'>
        <h1 >Мои Закладки</h1>
      </div>

      <div className='sneakers d-flex justify-center'>
        {items
          .map((item, index) => (
            <Card
              key={index}
              // title={item.title}
              // price={item.price}
              // imageUrl={item.imageUrl}
              {...item}
              favorited={true}
              // onClickAdd={(obj) => onAddToCart(obj)}
              onFavorite={onAddToFavorite}
            />
          ))}
      </div>
    </div>
  )
}

export default Favorites;