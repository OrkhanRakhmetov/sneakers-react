import styles from "./Card.module.scss"
import { useState, useEffect } from "react"

function Card({ title, imageUrl, price, onFavorite, onClickAdd, favorited, id }) {

  const [isAdded, setIsAdded] = useState(false);
  const [isFavorite, setisFavorite] = useState(favorited);

  const onClickPlus = () => {
    onClickAdd({ title, imageUrl, price });
    setIsAdded(!isAdded);
  }


  const onClickFavorite = () => {
    onFavorite({ id, title, imageUrl, price });
    setisFavorite(!isFavorite);
  }
  // useEffect(() => {
  //   console.log('Переменная  изменилась')
  // }, [isAdded]);

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src={isFavorite ? '/img/heart-liked.svg' : '/img/heart-unliked.svg'} alt='Unliked' onClick={onClickFavorite} />
      </div>

      <img width={133} height={122} src={imageUrl} alt='Sneakers' />
      <h5>{title}</h5>
      <div className='d-flex justify-between align-center'>
        <div className='d-flex flex-column'>
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        <img className={styles.plus} src={isAdded ? '/img/btn-selected.svg' : '/img/btn-plus.svg'} alt='Plus' onClick={onClickPlus} /></div>
    </div>
  )
}

export default Card;