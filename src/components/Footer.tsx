import styles from "./Footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.Footer}>
      <span>はたなかいざーぶるわりー</span>
      <span>© {new Date().getFullYear()} All rights reserved.</span>
    </footer>
  )
}
