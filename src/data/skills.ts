export type Skills = {
    id: number;
    name: string;
    img?: string;
    level: string;
    product: string;
};

// event	  イベント参加	同人イベントへのサークル参加（配置情報など）
// release	販売/配信	書籍やゲームの新規販売、デジタル配信開始
// restock	在庫補充	物理的な在庫の補充について（通販・店舗など）
// notice	  企画開始報告	制作企画の立ち上げに関する告知や、重大な発表
// collaborative	    合同誌・寄稿	合同誌、アンソロジー、外部企画への参加・寄稿に関する告知
// progress	制作進捗報告	制作中の書籍やゲームの具体的な進捗状況の報告
// report	  活動報告/雑記	定期的な活動まとめ、サイト更新、その他広範な報告

export const skills: Skills[] = [
    {
        id: 0,
        name: "TypeScript/React",
        img: "/SkillLogo/ts_logo.png",
        level: "☆☆☆★★",
        product: "Webサイトの作成"
    },
    {
        id: 1,
        name: "C/C++",
        img: "/SkillLogo/cpp_logo.png",
        level: "☆☆☆☆★",
        product: "DXライブラリを用いたゲーム作成"
    },
    {
        id: 2,
        name: "Unity",
        img: "/SkillLogo/unity_logo.webp",
        level: "☆☆☆★★",
        product: "VR対話システム研究/ゲーム作成"
    },
    {
        id: 3,
        name: "ClipStudio",
        img: "/SkillLogo/clipstudio_logo.png",
        level: "☆☆☆★★",
        product: "イラスト/漫画作成"
    },
    {
        id: 4,
        name: "Blender",
        img: "/SkillLogo/blender_logo.png",
        level: "☆☆★★★",
        product: "キャラクターモデリング"
    },
];