import { Link } from "react-router-dom";
import { socials } from "../../data/socials";
import styles from "./Contact.module.css"

import {
    Wrench,
    Bird,
    Mail,
    ShoppingBag,
    Image,
    FileText,
    Send,
    Gamepad2,
    MonitorPlay,
    FilePenLine,
    Handshake
} from "lucide-react";

export type Social = {
    label: string;
    href: string;
    icon:
    | "twitter"
    | "github"
    | "mail"
    | "booth"
    | "pixiv"
    | "form"
    | "Message"
    | "Discord"
    | "Youtube"
    | "note"
    | "Skeb";
};

const IconMap = {
    twitter: Bird,
    github: Wrench,
    mail: Mail,
    booth: ShoppingBag, // Boothは買い物袋アイコンで表現
    pixiv: Image, // Pixivは画像アイコンで表現
    form: FileText, // 依頼フォーム等
    Message: Send, // マシュマロ等
    Discord: Gamepad2,
    Youtube: MonitorPlay,
    note: FilePenLine,
    Skeb: Handshake,
} as const;

function SocialCard({ label, href, icon }: Social) {
    const Icon = IconMap[icon];
    return (
        <Link to={href} target="_blank" rel="noreferrer" className={`${styles.SocialLink} ${styles.SocialLink3} ${styles.SocialLink2}`}>
            <article className={styles.SocialCard}>
                <Icon />
                {label}
            </article>
        </Link>

    )
}

export default function Contact() {
    return (
        <section className={`whiteBack ${styles.Contact}`}>
            <div>
                <div>
                    <h2>Contact & Links</h2>
                    <p>
                        ご連絡はこちらからお願いいたします。依頼や合同誌参加のお誘いも歓迎です。
                    </p>
                </div>

                <div className={styles.SocialSpace}>
                    {socials.map((s) => (
                        <SocialCard key={s.href} {...s} />
                    ))}
                </div>
            </div>
        </section>
    );
}