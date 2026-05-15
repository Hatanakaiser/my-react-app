// import React from 'react'

import { Link } from "react-router-dom"
import { ROUTES } from "../const"
import { booksData } from "../data/books"
import { useMemo } from "react"
import BookCard from "../components/BookCard/BookCard";
import styles from "./Books.module.css"
import Button from "../components/Buttom/Button";

export default function Books() {

  const books = useMemo(() => {
    return [...booksData]
      .sort((a, b) => (a.date < b.date ? 1 : -1))
  }, []);

  return (
    <>
      <h1>Books</h1>
      <div className={styles.booksMatrix}>
        {books.map((book, index) => (
          <div className={`${styles.bookCards} ${styles.bookCards3} ${styles.bookCards2}`} key={index}>
            <BookCard {...book} />
          </div>
        ))}
      </div>
      <Button>
        <Link to={ROUTES.HOME}>HOME</Link>
      </Button>
    </>
  )
}
