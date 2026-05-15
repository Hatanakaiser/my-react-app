import { Link } from "react-router-dom"
import styles from "./LatestNews.module.css"
import { ROUTES } from "../../const"
import NewLabel from "../Sections/NewLabel";
import Tag from "../Tag/Tag";

type NewsType =
    | "event"
    | "release"
    | "restock"
    | "notice"
    | "collaborative"
    | "progress"
    | "report";

type LatestNewsProps = {
    date: string; // ISO形式 "2025-12-30"
    id: string;
    title: string;
    type: NewsType; // 種別(event/release/notice/restock/etc)
}

export default function LatestNews({
    date,
    id,
    title,
    type

}: LatestNewsProps) {
    return (
        <article className={styles.latestNews}>
            <Link to={`${ROUTES.NEWS}/${id}`} className={styles.newsLink}>
                <div className={styles.newsInfo}>
                    <NewLabel date={date} />
                    <h2 className={styles.newsTitle}>{title}</h2>
                    <hr />
                    <div className={styles.labelSpace}>
                        <Tag tagLabel={type} />
                        <div className={styles.newsDate}>{date}</div>
                    </div>
                </div>
            </Link>
        </article>
    )
}
