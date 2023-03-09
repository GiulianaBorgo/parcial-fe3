import styles from './Card.module.css'

function Card(props){
    return (
    <div className={styles.div}>
        <div>Hola {props.card}!</div>
        <div>Su animal favorito es </div>
    </div>
    )
}

export default Card