
import styles from "./Illustrations.module.css"
import { Link } from "react-router-dom"
import { ROUTES } from "../const"
import ImageCard from "../components/ImageCard/ImageCard"
import { galleryItems } from "../data/gallery"
import ImagePop from "../components/ImageCard/ImagePop"
import { useMemo, useState } from "react"
import Button from "../components/Buttom/Button"

export default function Illustrations() {
  // ポップアップ用
  const [isOpen, setIsOpen] = useState(false);
  const [image, setImage] = useState(-1);

  const handleClick = (index: number) => {
    setIsOpen(!isOpen);
    setImage(index);
  }

  const images = useMemo(() => {
    return [...galleryItems]
      .sort((a, b) => (a.date < b.date ? 1 : -1))
  }, []);

  return (
    <>
      <h1>Illustrations</h1>
      {/* イラストが多くなってきたら検索・絞り込み機能実装予定 */}
      <div className={styles.galleryMatrix}>
        {images.map((item, index) => (
          <div className={`${styles.galleryItems} ${styles.galleryItems3} ${styles.galleryItems2}`} onClick={() => handleClick(item.id)} key={index}>
            <ImageCard {...item} />
          </div>
        ))}
      </div>
      {isOpen && (
        <ImagePop url={galleryItems[image].src} setIsOpen={() => setIsOpen(!isOpen)} />
      )}
      <Button>
        <Link to={ROUTES.HOME}>HOME</Link>
      </Button>
    </>
  )
}
