import styles from "./Card.module.scss"

function Card(props) {
  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src='/img/heart-unliked.svg' alt='Unliked' />
      </div>

      <img   width={133} height={122} src={props.imageUrl} alt='Sneakers' />
      <h5>{props.title}</h5>
      <div className='d-flex justify-between align-center'>
        <div className='d-flex flex-column'>
          <span>{props.price}</span>
          <b>15 199 руб.</b>
        </div>
        <button className={styles.button}>
          <img width={11} height={11} src='/img/plus.svg' alt='Plus' />
        </button>
      </div>
    </div>
  )
}

export default Card;