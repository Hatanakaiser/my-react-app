import styles from "./Tag.module.css"

type TagProps = {
    tagLabel: string
}

export default function Tag({ tagLabel }: TagProps) {

    const styleMap: Record<string, string> = {
        "在庫あり": styles.onSaleReal,
        "電子あり": styles.onSaleOnline,
        "在庫なし": styles.notSaleNow,
        "event": styles.event,
        "release": styles.release,
        "restock": styles.restock,
        "notice": styles.notice,
        "collaborative": styles.collaborative,
        "progress": styles.progress,
        "report": styles.report,
    };

    const colorClass = styleMap[tagLabel] || "";

    return (
        <div className={styles.tag}>
            {/* tagBadge（共通）と colorClass（個別色）を結合 */}
            <div className={`${styles.tagBadge} ${colorClass}`} ></div>
            <div className={styles.tagLabel}>{tagLabel}</div>
        </div>
    )
}