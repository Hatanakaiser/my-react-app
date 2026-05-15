import { Link } from "react-router-dom";
import Tag from "../Tag/Tag";
import styles from "./NewsCard.module.css"
import { ROUTES } from "../../const";

type NewsCardProps = {
    id: string; // 一意なID(年-季節-番号)
    img?: string[][];
    date: string; // ISO形式 "2025-12-30"
    title: string;
    type: string; // 種別(event/release/notice/restock/etc)
};


export default function NewsCard({
    id,
    img = [["/ogp/default.jpg"]],
    date,
    title,
    type,
}: NewsCardProps) {
    return (
        <Link to={`${ROUTES.NEWS}/${id}`} className={styles.NewsCardLink}>
            <article className={styles.NewsCard}>
                <div className={styles.ImageSpace}>
                    <img src={img[0][0]} alt="" />
                </div>
                <h2>{title}</h2>
                <div className={styles.TagSpace}>
                    <Tag tagLabel={type} />
                    <div>{date}</div>
                </div>
            </article >
        </Link>
    )
}