import { useMemo } from "react"
import NewsCard from "../components/NewsCard/NewsCard"
import { newsItems } from "../data/news"
import styles from "./AllNews.module.css"
import { Link } from "react-router-dom"
import { ROUTES } from "../const"
import Button from "../components/Buttom/Button"

export default function AllNews() {

    const news = useMemo(() => {
        return [...newsItems]
            .sort((a, b) => (a.date < b.date ? 1 : -1))
    }, [])

    return (
        <>
            <h1>News</h1>
            <div className={styles.NewsSpace}>
                {news.map((n, index) => (
                    <div className={`${styles.NewsCard} ${styles.NewsCard3} ${styles.NewsCard2}`} key={index}>
                        <NewsCard {...n} />
                    </div>
                ))}
            </div>
            <Button>
                <Link to={ROUTES.HOME}>HOME</Link>
            </Button>
        </>
    )
}
