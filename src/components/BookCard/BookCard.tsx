import { Link } from "react-router-dom"
import { ROUTES } from "../../const"
import styles from "./BookCard.module.css"
import NewLabel from "../Sections/NewLabel";
import Tag from "../Tag/Tag";
import tagStyles from "../Tag/Tag.module.css"

type BooksDataProps = {
    slug: string;
    date: string;
    title: string;
    src: string;
    tags: string[];
};

export default function BookCard({
    slug,
    date,
    title,
    src,
    tags
}: BooksDataProps) {

    return (
        <article className={styles.bookCard}>
            <Link to={`${ROUTES.BOOK}/${slug}`} className={styles.bookLink}>
                <NewLabel date={date} />
                <img src={src} alt={src} className={styles.bookImage} />
                <h3>{title}</h3>
                <div className={tagStyles.tagSpace}>
                    {tags.map((tag, index) => (
                        <Tag tagLabel={tag} key={index}/>
                    ))}
                </div>
                <span>販売日:{date}</span>
            </Link>
        </article>
    )
}
