import BookCard from "../BookCard/BookCard"
import styles from "./BookSection.module.css"
import { useMemo } from "react"
import { booksData } from "../../data/books"
import { Link } from "react-router-dom";
import { ROUTES } from "../../const";
import Button from "../Buttom/Button"

export default function BookSection() {
    const latest = useMemo(() => {
        return [...booksData]
            .sort((a, b) => (a.date < b.date ? 1 : -1))
            .slice(0, 3);
    }, []);
    return (
        <section className="whiteBack">
            <h2>book</h2>
            <div className={styles.book}>
                {latest.map((book, index) => (
                    <div className={styles.bookCards} key={index}>
                        <BookCard {...book} />
                    </div>
                ))}
            </div>
            <Button>
                <Link to={ROUTES.BOOKS}>More</Link>
            </Button>
        </section>
    )
}

