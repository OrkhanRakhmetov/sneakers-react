import React, { useContext, useState } from 'react';
import axios from 'axios'

import Card from '../components/Card'
// import App from '../App';
import AppContext from '../context';

function Orders() {

  // const { onAddToCart, onAddToFavorite } = useContext(AppContext)
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  React.useEffect(() => {
    (async () => {

      try {
        const { data } = await axios.get('https://642c1eca208dfe2547288b56.mockapi.io/orders');
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []))
        setIsLoading(false)
      }
      catch (error) {
        alert('ошибка при запросе заказов')
      }

    })();
  }, [])

  return (
    <div className='content p-40 '>

      <div className='d-flex align-center justify-between mb-40'>
        <h1 >Мои заказы</h1>
      </div>

      <div className='sneakers d-flex justify-center'>
        {(isLoading ? [...Array(12)] : orders)
        .map((item, index) => (
            <Card
              key={index}
              // title={item.title}
              // price={item.price}
              // imageUrl={item.imageUrl}
              // onClickAdd={(obj) => onAddToCart(obj)}
              // onFavorite={(obj) => onAddToFavorite(obj)}
              // added={isItemAdded(item && item.id)}
              {...item}
              // favorited
              loading={isLoading}
            />
          ))}
      </div>
    </div>
  )
}

export default Orders;