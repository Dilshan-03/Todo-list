import shinchan from "../assets/shinchan.jpg"
import styles  from './Card.module.css'
function Card(){
   return(
      <div className={styles.card}>
        <img src={shinchan} width={150} height={150} className={styles.image} alt="profile picture" />
        <h2 className={styles.heading}>Shinzo</h2>
        <p>This is a Cartoon Character ,which is often watched by kids</p>
      </div>
   )
}
export default Card