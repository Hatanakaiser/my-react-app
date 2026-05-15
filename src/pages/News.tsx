import { Link, useParams } from "react-router-dom"
import { ROUTES } from "../const"
import React, { useMemo } from "react";
import { newsItems } from "../data/news";
import Tag from "../components/Tag/Tag";
import styles from "./News.module.css"

export default function News() {

  const { slug } = useParams<{ slug: string }>();
  const news = useMemo(() =>
    newsItems.find((n) => n.id === slug
    ), [slug]
  );

  if (!news) {
    return (
      <>
        <div>
          ERROR
        </div>
        <p>指定されたニュースが見つかりませんでした。</p>
      </>
    )
  }

  return (
    <>
      <article className={styles.NewsSpace}>
        <h1>{news.title}</h1>
        <div className={styles.LabelSpace}>
          <div><Tag tagLabel={news.type} /></div>
          <div className={styles.NewsDate}>{news.date}</div>
        </div>
        <div className={styles.NewsBody}>
          {news.body?.map((sec: string[], index) => (
            <React.Fragment key={`sec-${index}`}>
              {sec.map((row: string, rowIndex) => (
                <p key={`row-${rowIndex}`}>{row}</p>
              ))}
              {news.link?.[index]?.map((url, urlIndex) => (
                <Link key={`img-${index}-${urlIndex}`} to={url} className={styles.NewsUrl} target="_blank">
                  <p>
                    {url}
                  </p>
                </Link>
              ))}
              {news.img?.[index]?.map((image, imgIndex) => (
                <img key={`img-${index}-${imgIndex}`} src={image} alt="Image" className={styles.NewsImage} />
              ))}
            </React.Fragment>
          ))}
        </div>
      </article >
      <Link to={ROUTES.HOME}>HOME</Link>
    </>
  )
}
