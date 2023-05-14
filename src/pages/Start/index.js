import Banner from "components/Banner"
import Title from "components/Title"
import Card from "components/Card"
import styles from "./Start.module.css"
import { useEffect, useState } from "react"

function Start() {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/devdesignerstudio/cinetag-api/videos"
    )
      .then((response) => response.json())
      .then((data) => {
        setVideos(data)
      })
  }, [])

  return (
    <>
      <Banner img="home" />
      <Title>
        <h1>Um lugar para guardar seus vídeos e filmes !</h1>
      </Title>
      <section className={styles.container}>
        {videos.map((video) => (
          <Card key={video.id} {...video} />
        ))}
      </section>
    </>
  )
}

export default Start
