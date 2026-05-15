// import type { ReactNode } from "react"
import { PAGE_LIST } from "../const"
import { Link } from "react-router-dom"
import styles from "./SlideMenu.module.css"

type MenuListProps = {
  list: string;
  link: string;
  setIsOpen: () => void;
}

function MenuList({
  list,
  link,
  setIsOpen
}: MenuListProps) {
  return (
    <Link to={link} className={styles.sideMenuBox} onClick={setIsOpen}>
      <li className={styles.sideMenuList}>
        {list}
      </li>
    </Link>
  )
}

type SideMenuProps = {
  isOpen: boolean
  setIsOpen: () => void;
}

export default function SideMenu({ isOpen, setIsOpen }: SideMenuProps) {

  let movePos = -150;
  if (isOpen) {
    movePos = 5;
  }

  const moveStyle = {
    transition: "transform 0.5s ease"
  }
  
  return (
    <div className={styles.sideMenu} style={{ ...moveStyle, transform: `translateY(${movePos}%)` }}>
      <ul>
        {
          PAGE_LIST.map((list, index) =>
            <MenuList key={`list-${index}`} {...list} setIsOpen={() => setIsOpen()} />
          )
        }
      </ul>
    </div>
  )
}

