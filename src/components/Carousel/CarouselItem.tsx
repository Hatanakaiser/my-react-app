import styles from "./Carousel.module.css"

type CarouselItemProps = {
    children: React.ReactNode;
    index: number
    count: number
    maxCount: number
}

export default function CarouselItem({ children, index, count, maxCount }: CarouselItemProps) {

    const moveStyle = {
        transition: "transform 0.3s ease"
    }

    if (index === (count - 2 + maxCount) % maxCount) {
        return (
            <div className={styles.Slide} style={{ ...moveStyle, transform: "translateX(-215%)", position: "absolute" }}>{children}</div>
        )
    } else if (index === (count - 1 + maxCount) % maxCount) {
        return (
            <div className={styles.Slide} style={{ ...moveStyle, transform: "translateX(-155%)", position: "absolute" }}>{children}</div>
        )
    } else if (index === count) {
        return (
            <div className={styles.Slide} style={{ ...moveStyle, transform: "translateX(-50%)", position: "absolute" }}>{children}</div>
        )
    } else if (index === (count + 1 + maxCount) % maxCount) {
        return (
            <div className={styles.Slide} style={{ ...moveStyle, transform: "translateX(55%)", position: "absolute" }}>{children}</div>
        )
    } else if (index === (count + 2 + maxCount) % maxCount) {
        return (
            <div className={styles.Slide} style={{ ...moveStyle, transform: "translateX(225%)", position: "absolute" }}>{children}</div>
        )
    }
}
