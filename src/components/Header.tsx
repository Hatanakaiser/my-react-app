import { useState } from "react";
import styles from "./Header.module.css"
import SideMenu from "./SlideMenu";
import { Link } from "react-router-dom";
import { ROUTES } from "../const";

type HamburgerProps = {
  isOpen: boolean;
  setIsOpen: () => void;
}


function Hamburger({ isOpen, setIsOpen }: HamburgerProps) {

  const transformStyle1 = {
    transform: "rotate(45deg) translate(5px, 5px)",
    transition: "transform 0.3s ease"
  }
  const transformStyle2 = {
    opacity: 0,
    transition: "transform 0.3s ease"
  }
  const transformStyle3 = {
    transform: "rotate(-45deg) translate(6px, -6px)",
    transition: "transform 0.3s ease"
  }

  if (isOpen) {
    return (
      <div className={styles.hamburgerSpace}>
        <div className={`${styles.hamburger}`} onClick={setIsOpen}>
          <span style={{ ...transformStyle1 }}></span>
          <span style={{ ...transformStyle2 }}></span>
          <span style={{ ...transformStyle3 }}></span>
        </div>
      </div>
    )
  }


  return (
    <div className={styles.hamburgerSpace}>
      <div className={`${styles.hamburger}`} onClick={setIsOpen}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className={styles.Header}>
        <Link to={ROUTES.HOME}>
          <h1>はたなかいざーぶるわりー</h1>
        </Link>
        <Hamburger isOpen={isOpen} setIsOpen={() => setIsOpen(!isOpen)} />
        <SideMenu isOpen={isOpen} setIsOpen={() => setIsOpen(!isOpen)}></SideMenu>
      </header>
    </>
  )
}
