function Card() {
  return (
    <div className='card'>
      <div className='favorite'>
        <img src='/img/heart-unliked.svg' alt='Unliked' />
      </div>

      <img width={133} height={122} src='/img/sneakers/img1.jpg' alt='Sneakers' />
      <h5>Мужские Кроссовки Under Armour Curry 8</h5>
      <div className='d-flex justify-between align-center'>
        <div className='d-flex flex-column'>
          <span>Цена:</span>
          <b>15 199 руб.</b>
        </div>
        <button className='button'>
          <img width={11} height={11} src='/img/plus.svg' alt='Plus' />
        </button>
      </div>
    </div>
  )
}

export default Card;