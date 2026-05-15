import { useCallback, useEffect, useRef } from "react";
import styles from "./Carousel.module.css"

type CarouselProps = {
    children: React.ReactNode;
    moveLeft: () => void;
    moveRight: () => void;
}

export default function CarouselNeo({ children, moveLeft, moveRight }: CarouselProps) {

    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const resetTimer = useCallback(() => {
        if (timerRef.current) {
            clearInterval(timerRef.current);
        }
        timerRef.current = setInterval(() => {
            moveRight();
        }, 10000);
    }, [moveRight]);

    useEffect(() => {
        resetTimer();
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [resetTimer]);

    const handleLeftClick = () => {
        resetTimer();
        moveLeft();
    };

    const handleRightClick = () => {
        resetTimer();
        moveRight();
    };

    return (
        <div className={styles.CarouselSpace}>
            <div className={styles.Left} onClick={() => handleLeftClick()}>←</div>
            {children}
            <div className={styles.Right} onClick={() => handleRightClick()}>→</div>
        </div>
    )
}

// How to Carousel

// 親コンポーネントに以下をコピー&ペーストし、 CarouselItemを任意の数と内容に変更
// <Carousel moveLeft={() => setNewCount(-1)} moveRight={() => setNewCount(1)}>
//   <CarouselItem index={0} count={count} maxCount={maxCount}>{表示内容}</CarouselItem>
//   <CarouselItem index={1} count={count} maxCount={maxCount}>{表示内容}</CarouselItem>
//   <CarouselItem index={2} count={count} maxCount={maxCount}>{表示内容}</CarouselItem>
//   <CarouselItem index={3} count={count} maxCount={maxCount}>{表示内容}</CarouselItem>
//   <CarouselItem index={4} count={count} maxCount={maxCount}>{表示内容}</CarouselItem>
//   <CarouselItem index={5} count={count} maxCount={maxCount}>{表示内容}</CarouselItem>
//   <CarouselItem index={6} count={count} maxCount={maxCount}>{表示内容}</CarouselItem>
//   <CarouselItem index={7} count={count} maxCount={maxCount}>{表示内容}</CarouselItem>
//   <CarouselItem index={8} count={count} maxCount={maxCount}>{表示内容}</CarouselItem>
//   <CarouselItem index={9} count={count} maxCount={maxCount}>{表示内容}</CarouselItem>
// </Carousel>

// 親コンポーネントに以下をコピー&ペーストし、maxCountにCarouselItemの数を代入
// const [count, setCount] = useState(0)
// const maxCount = 10;
// const setNewCount = (n: number) => {
//   let newCount = count + n;
//   switch (newCount) {
//     case -1:
//       newCount = maxCount - 1;
//       break;
//     case maxCount:
//       newCount = 0;
//       break;
//   }
//   setCount(newCount);
// }