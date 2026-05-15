import styles from "./Channel.module.css"

type Channel =
    | { type: "event"; place?: string; date?: string }
    | { type: "booth"; url: string }
    | { type: "melonbooks"; url: string }
    | { type: "toranoana"; url: string };

export default function Channels({ channels }: { channels?: Channel[] }) {
    if (!channels || channels.length === 0)
        return null;

    const labelMap: Record<Exclude<Channel["type"], "event">, string> = {
        booth: "Boothで販売中",
        melonbooks: "メロンブックスで販売中",
        toranoana: "とらのあなで販売中",
    };

    return (
        <div className={styles.ChannelSpace}>
            {channels.map((channel, index) => {
                if (channel.type === "event") {
                    return (
                        <div key={index} className={styles.ChannelRavel}>
                            {channel.date ?? "近日"} / {channel.place ?? "イベント頒布"}
                        </div>
                    );
                }

                const label = labelMap[channel.type];
                const url = channel.url;

                return (
                    <a
                        key={index}
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                        className={styles.ChannelRavel}
                    >
                        {label} →
                    </a>
                );
            })}
        </div >
    )
}