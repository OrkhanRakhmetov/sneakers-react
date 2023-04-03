function Drawer({ onClose, items = [], onRemove }) {
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
              {items.map((obj, index) => (
                <div key={index} className='cartItem d-flex align-center'>
                  <img className='mr-20' width={70} height={70} src={obj.imageUrl} alt='Sneakers' />
                  <div className='mr-20'>
                    <p className='mb-5'>{obj.title}</p>
                    <b>{obj.price} руб.</b>
                  </div>
                  <img className='removeBtn' src='/img/btn-remove.svg' alt='Remove' onClick={() => onRemove(obj.id)} />
                </div>
              ))}
            </div>

            <div className='cartTotalBlock'>
              <ul>
                <li className='d-flex'>
                  <span>Итого:</span>
                  <div></div>
                  <b>21 498 руб.</b>
                </li>
                <li className='d-flex'>
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>1074 руб.</b>
                </li>
              </ul>

              <button className='greenBtn'>
                Оформить заказ
                <img src='/img/arrow.svg' alt='Arrow' />
              </button>

            </div>
          </>
        ) : (
          <div class="cartEmpty d-flex align-center justify-center flex-column flex">
            <img class="mb-20" width="120px" height="120px" src="/img/empty-cart.jpg" alt="Empty" />
            <h2>Корзина пустая</h2>
            <p class="opacity-6">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
            <button onClick={onClose} class="greenBtn">
              <img src="/img/arrow.svg" alt="Arrow" />
              Вернуться назад
            </button>
          </div>
        )}

      </div>
    </div>
  )
}
export default Drawer;