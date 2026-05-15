import styles from "./ImageCard.module.css"
import NewLabel from "../Sections/NewLabel";

type ImageCardProps = {
  date: string;
  src: string;
}

export default function ImageCard({
  date,
  src
}: ImageCardProps) {

  return (
    <article className={styles.imageCard}>
      <div className={styles.cardLink}>
        <NewLabel date={date} />
        <img className={styles.cardImage} src={src} alt="ILLUST" />
      </div>
    </article>
  )
}

