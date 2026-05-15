import type { ReactNode } from "react"
import styles from "./Button.module.css"

type ButtonProps = {
    children: ReactNode
};

export default function Button({ children }: ButtonProps) {
    return (
        <button className={styles.Button}>
            {children}
        </button>
    )
}
