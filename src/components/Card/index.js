import { useFavoriteContext } from "contexts/Favorites"
import styles from "./Card.module.css"
import favoriteIcon from "./star.png"
import unFavoriteIcon from "./unstar.png"
import { Link } from "react-router-dom"

function Card({ id, title, cover, link }) {
  const { favorite, addFavorite } = useFavoriteContext()
  const isFavorite = favorite.some((fav) => fav.id === id)
  const icon = !isFavorite ? favoriteIcon : unFavoriteIcon

  return (
    <div className={styles.container}>
      <Link className={styles.link} to={`${id}`}>
        <img src={cover} alt={title} className={styles.cover} />
        <h2>{title}</h2>
      </Link>
      <img
        src={icon}
        alt="Favorite movie"
        className={styles.favorite}
        onClick={() => addFavorite({ id, title, cover, link })}
      />
    </div>
  )
}

export default Card
