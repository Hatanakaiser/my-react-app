import styles from "./SkillCrad.module.css"

type SkillCardProps = {
    name: string;
    img?: string;
    level: string;
    product: string;
};

export default function SkillCard({ name, img, level, product }: SkillCardProps) {
    return (
        <article className={styles.SkillCard}>
            <img className={styles.SkillLogo} src={img} alt="スキルロゴ" />
            <div className={styles.SkillText}>
                <h2>{name}</h2>
                <div>
                    習熟度:{level}
                </div>
                <div>
                    実績・用途
                    <p>{product}</p>
                </div>
            </div>
        </article>
    )
}
