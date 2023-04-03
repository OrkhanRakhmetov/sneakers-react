import { Link } from 'react-router-dom';


function Header(props) {
  // console.log(props)
  return (
    <header className='d-flex justify-between align-center p-40'>

      <Link to="/">
        <div className='d-flex align-center'>
          <img width={40} height={40} src='/img/logo.png' alt='Логотип' />
          <div>
            <h3 className='text-uppercase'>React Sneakers</h3>
            <p className='opacity-6'>Магазин кросовоки </p>
          </div>
        </div>
      </Link>

      <ul className='d-flex'>
        <li className='mr-30 cu-p' onClick={props.onClickCart}>
          <img width={18} height={18} src='/img/cart.svg' alt='Карзина' />
          <span>1205 руб.</span></li>
        <li className='mr-30 cu-p'>

          <Link to="/favorites">
            <img width={20} height={20} src='/img/like.svg' alt='Закладки' />
          </Link>

        </li>
        <img className="cu-p" width={20} height={20} src='/img/user.svg' alt='Пользователь' />
      </ul>
    </header>
  )
}

export default Header;