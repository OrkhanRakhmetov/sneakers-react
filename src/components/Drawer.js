function Drawer() {
  return (
    <div style={{ display: 'none' }} className='overlay'>
      <div className='drawer'>
        <h2 className='mb-30 d-flex justify-between'>
          Корзина
          <img className='removeBtn  cu-p' src='/img/btn-remove.svg' alt='Remove' />
        </h2>
        <div className='items'>
          <div className='cartItem d-flex align-center'>
            <img className='mr-20' width={70} height={70} src='/img/sneakers/img1.jpg' alt='Sneakers' />
            <div className='mr-20'>
              <p className='mb-5'>Мужские Кроссовки Under Armour Curry 8</p>
              <b>15 199 руб.</b>
            </div>
            <img className='removeBtn' src='/img/btn-remove.svg' alt='Remove' />
          </div>
          <div className='cartItem d-flex align-center'>
            <img className='mr-20' width={70} height={70} src='/img/sneakers/img1.jpg' alt='Sneakers' />
            <div className='mr-20'>
              <p className='mb-5'>Мужские Кроссовки Under Armour Curry 8</p>
              <b>15 199 руб.</b>
            </div>
            <img className='removeBtn' src='/img/btn-remove.svg' alt='Remove' />
          </div>
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

      </div>
    </div>
  )
}
export default Drawer;