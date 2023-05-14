import Banner from "components/Banner"
import styles from "./Favorites.module.css"
import Title from "components/Title"
import Card from "components/Card"
import { useFavoriteContext } from "contexts/Favorites"

function Favorites() {
  const { favorite } = useFavoriteContext()
  return (
    <>
      <Banner img="favorites" />
      <Title>
        <h1>My Favorites</h1>
      </Title>
      <section className={styles.container}>
        {favorite.map((video) => (
          <Card key={video.id} {...video} />
        ))}
      </section>
    </>
  )
}

export default Favorites
