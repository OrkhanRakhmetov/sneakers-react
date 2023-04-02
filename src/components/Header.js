function Header(props) {
  console.log(props)
  return(
    <header className='d-flex justify-between align-center p-40'>
    <div className='d-flex align-center'>
      <img width={40} height={40} src='/img/logo.png' />
      <div>
        <h3 className='text-uppercase'>React Sneakers</h3>
        <p className='opacity-6'>Магазин кросовоки </p>
      </div>
    </div>
    <ul className='d-flex'>
      <li className='mr-30 cu-p' onClick={props.onClickCart}>
        <img width={18} height={18} src='/img/cart.svg' />
        <span>1205 руб.</span></li>
      <li className='mr-30 cu-p'>
        <img width={20} height={20} src='/img/like.svg' />
      </li>
      <img className="cu-p" width={20} height={20} src='/img/user.svg' />
    </ul>
  </header>
  )
}

export default Header;