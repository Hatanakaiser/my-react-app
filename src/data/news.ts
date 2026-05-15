export type EventType =
    | "event"
    | "release"
    | "restock"
    | "notice"
    | "collaborative"
    | "progress"
    | "report";

export type NewsItem = {
    id: string; // 一意なID(年-番号)
    img?: string[][];
    date: string; // ISO形式 "2025-12-30"
    title: string;
    type: EventType; // 種別(event/release/notice/restock/etc)
    place?: string; // イベント会場 / 配置
    link?: string[][]; // 詳細や通販リンク
    body?: string[][]; // 補足テキスト
    badge?: string; // 任意のラベル（新刊/委託など）
};

// event	  イベント参加	同人イベントへのサークル参加（配置情報など）
// release	販売/配信	書籍やゲームの新規販売、デジタル配信開始
// restock	在庫補充	物理的な在庫の補充について（通販・店舗など）
// notice	  企画開始報告	制作企画の立ち上げに関する告知や、重大な発表
// collaborative	    合同誌・寄稿	合同誌、アンソロジー、外部企画への参加・寄稿に関する告知
// progress	制作進捗報告	制作中の書籍やゲームの具体的な進捗状況の報告
// report	  活動報告/雑記	定期的な活動まとめ、サイト更新、その他広範な報告

export const newsItems: NewsItem[] = [
    {
        id: "2025-01",
        date: "2025-06-26",
        title: "AqoursFinale のぼり企画参加",
        type: "collaborative",
        badge: "参加予定",
        body: [["レタス720さん主催：【Aqours Finale】Aqours「大集合」のぼり企画！【あなたのイラストをのぼりにします！】へ参加しました。", "詳細はリンク先をご確認ください。"], ["イラストの掲載許可が出ているので掲載します。"]],
        link: [["https://twipla.jp/events/672163"]],
        img: [["/Images/NewsImg/20250626_AqoursFinaleのぼり企画.webp"]]
    },
    {
        id: "2025-02",
        date: "2025-07-22",
        title: "スクミュイラスト合同『MUSICAL FESTIVAL Ⅱ』へイラスト寄稿",
        type: "collaborative",
        body: [["レタス720さん主催：スクミュイラスト合同『MUSICAL FESTIVAL Ⅱ』【スクミュオンリー２】へ参加しました。僕ラブ47で頒布予定です。", "詳細はリンク先をご確認ください。"], ["イラストの掲載許可が出ているので掲載します。"]],
        link: [["https://twipla.jp/events/674795"]],
        img: [["/Images/NewsImg/20250722_スクミュ合同2.webp"]]
    },
    {
        id: "2025-03",
        date: "2025-11-15",
        title: "Webゲーム制作企画始動",
        type: "notice",
        body: [["Webゲーム制作企画を開始しました。詳細は追ってお知らせします。"]],
    },
    {
        id: "2025-04",
        date: "2025-11-28",
        title: "僕ラブ48 サークル参加申し込み",
        type: "event",
        badge: "予定",
        body: [["僕らのラブライブ！48（僕ラブ48）へサークル参加申し込みを行いました。", "内容は未定です。"]],
    },
    {
        id: "2026-01",
        date: "2025-12-05",
        title: "山田真緑のLittle🌵🌳green合同🌍【みんなで環境保全】へマンガ寄稿",
        type: "collaborative",
        body: [["レタス720さん主催：山田真緑のLittle🌵🌳green合同🌍【みんなで環境保全】へ参加しました。", "僕ラブ48で頒布予定です。", "詳細はリンク先をご確認ください。"], ["掲載許可が出ているので掲載します。全編はリンク先でご一読ください。"]],
        link: [["https://twipla.jp/events/690529"], ["https://www.pixiv.net/artworks/144797201"]],
        img: [["/Images/NewsImg/20251205_山田真緑合同.webp"]],
    },
    {
        id: "2026-02",
        date: "2026-01-25",
        title: "僕らのラブライブ！48へサークル参加してきました",
        type: "event",
        body: [["僕らのラブライブ！48（僕ラブ48）へ参加してきました。", "初めての同人誌作成は大変でしたがとても楽しい良い経験ができました。", "学生の間に同人頒布会へ参加するという目標を達成できてよかったです。"], ["紙在庫まだあります。連絡いただければ在庫確保しておきます。","電子版もありますのでよろしければリンク先からご購入の検討をお願いします。"]],
        link: [[], ["https://www.melonbooks.co.jp/detail/detail.php?product_id=3463391"]],
        img: [["/Images/books/MONSTERSNOWGIRLS.webp"]],
    },
    {
        id: "2026-03",
        date: "2026-03-20",
        title: "大学を卒業しました",
        type: "report",
        body: [["本日、山形大学工学部の卒業式が行われました。", "4年間、とても楽しい学生生活を送ることができました。", "就職は決められませんでしたが、4月以降もクリエイティブな活動をしつつ就活に取り組んでいこうと思います。"]],
        img: [["/Images/NewsImg/20260320.jpg"]],
    },
    {
        id: "2026-04",
        date: "2026-04-16",
        title: "ラブライブ！なんでも合同５へイラスト寄稿",
        type: "collaborative",
        body: [["レタス720さん主催：ラブライブ！なんでも合同５へ参加しました。","本編イラストに加え、表紙用ミニキャライラスト「優木せつ菜」も寄稿しました。", "僕ラブ50で頒布予定です。", "詳細はリンク先をご確認ください。"]],
        link: [["https://twipla.jp/events/714203"]],
        // img: [[]],
    },
];