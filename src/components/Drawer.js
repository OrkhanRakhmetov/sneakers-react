import React, { useContext, useState } from 'react'
import Info from './Info'

import AppContext from '../context';

import axios from "axios";

function Drawer({ onClose, items = [], onRemove }) {

  const [isOrderComplete, setIsOrderComplete] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const { cartItems, setCartItems } = useContext(AppContext)
  // const { cartItems } = useContext(AppContext)

  const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);

  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post('https://642c1eca208dfe2547288b56.mockapi.io/Orders', { items: cartItems });
      setOrderId(data.id);
      setIsOrderComplete(true);
      setCartItems([]);
    } catch (err) {
      alert('не удалось собрать заказ');
    }
    setIsLoading(false);
  }


  return (
    <div className='overlay'>
      <div className='drawer'>
        <h2 className='mb-30 d-flex justify-between'>
          Корзина
          <img className='removeBtn  cu-p' src='/img/btn-remove.svg' alt='Close' onClick={onClose} />
        </h2>
        {items.length > 0 ? (
          <>
            <div className='items'>
              {items.map((obj, idx) => (

                <div key={idx} className='cartItem d-flex align-center'>
                  <img
                    className='mr-20'
                    width={70} height={70}
                    src={obj.imageUrl} alt='Sneakers'
                  />
                  <div className='mr-20'>
                    <p className='mb-5'>{obj.title}</p>
                    <b>{obj.price} руб.</b>
                  </div>
                  <img
                    className='removeBtn'
                    src='/img/btn-remove.svg'
                    alt='Remove' onClick={() => onRemove(obj.id)}
                  />
                </div>

              ))}
            </div>

            <div className='cartTotalBlock'>
              <ul>
                <li className='d-flex'>
                  <span>Итого:</span>
                  <div></div>
                  <b>{totalPrice} руб.</b>
                </li>
                <li className='d-flex'>
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>{totalPrice / 100 * 5} руб.</b>
                </li>
              </ul>

              <button onClick={onClickOrder} disabled={isLoading} className='greenBtn'>
                Оформить заказ
                <img src='/img/arrow.svg' alt='Arrow' />
              </button>

            </div>
          </>
        ) : (
          <Info
            image={isOrderComplete ? "/img/completed-order.jpg" : "/img/empty-cart.jpg"}
            title={isOrderComplete ? "Заказ оформлен" : "Корзина пустая"}
            description={isOrderComplete ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке` : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."} />
        )}

      </div>
    </div>
  )
}
export default Drawer;