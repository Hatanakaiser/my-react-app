import { useParams } from "react-router-dom"
import { booksData } from "../data/books"
import styles from "./Book.module.css"
import { useMemo } from "react";
import Channels from "../components/BookLink/Channel";
import Tag from "../components/Tag/Tag";
import tagStyles from "../components/Tag/Tag.module.css"


export default function Book() {

    const { slug } = useParams<{ slug: string }>();
    const book = useMemo(() =>
        booksData.find((b) => b.slug === slug
        ), [slug]
    );

    if (!book) {
        return (
            <>
                <div>
                    ERROR
                </div>
                <p>指定された本が見つかりませんでした。</p>
            </>
        )
    }

    return (
        <>
            <article className={styles.Book}>
                <div>
                    <div className={styles.Cover}>
                        <img src={book.src} alt="bookCover" />
                    </div>
                </div>
                <div className={styles.About}>
                    <h1>{book.title}</h1>
                    <div className={tagStyles.tagSpace}>
                        {book.tags.map((tag, index) => (
                            <Tag tagLabel={tag} key={index} />
                        ))}
                    </div>
                    <p className={styles.BookPara}>{book.desc}</p>
                    <ul className={styles.DetailsMatrix}>
                        <li>サイズ</li>
                        <li>{book.size}</li>
                        <li>ページ数</li>
                        <li>{book.pages}p</li>
                        <li>価格</li>
                        <li>¥{book.price}</li>
                    </ul>
                    <Channels channels={book.channels} />
                </div>
            </article>
            <div>
                <div>Book一覧へ戻る</div>
                <div>Home</div>
            </div>
        </>
    )
}