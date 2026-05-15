export type SaleStatus =
    | "coming_soon"
    | "event_only"
    | "booth"
    | "melonbooks"
    | "toranoana"
    | "sold_out";

export type Channel =
    | { type: "event"; place?: string; date?: string }
    | { type: "booth"; url: string }
    | { type: "melonbooks"; url: string }
    | { type: "toranoana"; url: string };

export type BooksData = {
    id?: number;          // 一意識別子
    slug: string;         //URL用スラッグ
    date: string;
    title: string;
    desc: string;         //簡単な詳細
    src: string;
    status: SaleStatus;
    channels?: Channel[];
    tags: string[];

    // 詳細用（任意）
    pages?: number;
    size?: string;        // 例: "B5", "A5"
    price?: number;       // 税込円
    samples?: string[];   // サンプル画像
    specs?: string[];     // 箇条書き仕様
};

export const booksData: BooksData[] = [
    {
        id: 0,
        slug: "MonsterSnowGirls",
        date: "2026-01-24",
        title: "MONSTER SNOW GIRLS",
        desc: "R3BIRTHがスキーに行く話",
        src: "/Images/books/MONSTERSNOWGIRLS.webp",
        status: "coming_soon",
        channels: [
            {
                type: "event",
                place: "僕らのラブライブ！48　虹ヶ咲25",
                date: "2026-01-24",
            },
            { type: "melonbooks", url: "https://www.melonbooks.co.jp/detail/detail.php?product_id=3463391" },
        ],
        tags: ["在庫あり","電子あり"],
        pages: 24,
        size: "B5",
        price: 500,
        samples: [
            "/Images/books/僕ラブ48_sample1.webp",
            "/Images/books/僕ラブ48_sample2.webp",
        ],
        specs: ["白黒", "本文マットコート", "特典ポストカード（予定）"],
    },

    // {
    //     id: 1,
    //     slug: "vr-dialogue-guide",
    //     date: "2026-01-01",
    //     title: "VR音声対話の作り方",
    //     desc: "Unity × OpenXRで作る対話エージェントの技術本。",
    //     src: "/Images/books/MONSTERSNOWGIRLS.webp",
    //     status: "event_only",
    //     channels: [
    //         {
    //             type: "event",
    //             place: "技術書典××",
    //             date: "2026-01-20"
    //         }
    //     ],
    //     tags: ["在庫なし"],
    //     pages: 36,
    //     size: "B5",
    //     price: 1500,
    //     samples: ["/Images/books/vr-guide_sample1.webp"],
    //     specs: ["Unity 2022 LTS", "OpenXR", "音声認識/LLM連携の実装例"],
    // },

    // {
    //     id: 2,
    //     slug: "vr-dialogue-guideNext",
    //     date: "2026-01-02",
    //     title: "VR音声対話の作り方Next",
    //     desc: "Unity × OpenXRで作る対話エージェントの技術本。",
    //     src: "/Images/books/MONSTERSNOWGIRLS.webp",
    //     status: "event_only",
    //     channels: [
    //         {
    //             type: "event",
    //             place: "技術書典××",
    //             date: "2026-01-20"
    //         }
    //     ],
    //     tags: ["在庫なし"],
    //     pages: 36,
    //     size: "B5",
    //     price: 1500,
    //     samples: ["/Images/books/vr-guide_sample1.webp"],
    //     specs: ["Unity 2022 LTS", "OpenXR", "音声認識/LLM連携の実装例"],
    // },

    // {
    //     id: 3,
    //     slug: "vr-dialogue-guideNeo",
    //     date: "2026-01-03",
    //     title: "VR音声対話の作り方NEO",
    //     desc: "Unity × OpenXRで作る対話エージェントの技術本。",
    //     src: "/Images/books/MONSTERSNOWGIRLS.webp",
    //     status: "event_only",
    //     channels: [
    //         {
    //             type: "event",
    //             place: "技術書典××",
    //             date: "2026-01-20"
    //         }
    //     ],
    //     tags: ["在庫なし"],
    //     pages: 36,
    //     size: "B5",
    //     price: 1500,
    //     samples: ["/Images/books/vr-guide_sample1.webp"],
    //     specs: ["Unity 2022 LTS", "OpenXR", "音声認識/LLM連携の実装例"],
    // },

];