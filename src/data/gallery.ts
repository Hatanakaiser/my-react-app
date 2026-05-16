export type GalleryItem = {
    id: number;
    src: string; // 画像パス（public配下推奨）
    alt: string; // 代替テキスト
    series: string; // カテゴリ（例： "蓮ノ空", "オリジナル", "ポケモン" など）
    date: string; // 任意：日付（YYYY-MM-DD形式推奨）
    w?: number; // 任意：幅（比率のヒント）
    h?: number; // 任意：高さ
};
//default dimensions
//4093x2894

export const galleryItems: GalleryItem[] = [
    {
        id: 0,
        src: "/Images/gallery/20250910.webp",
        alt: "涼宮ハルヒ",
        series: "涼宮ハルヒの憂鬱",
        date: "2025-09-10",
        w: 675,
        h: 1200,
    },
    {
        id: 1,
        src: "/Images/gallery/20250927.webp",
        alt: "山田真緑",
        series: "イキヅライブ",
        date: "2025-09-27",
        w: 2894,
        h: 4093,
    },
    {
        id: 2,
        src: "/Images/gallery/20251009.webp",
        alt: "調布のりこ",
        series: "イキヅライブ",
        date: "2025-10-09",
        w: 2894,
        h: 4093,
    },
    {
        id: 3,
        src: "/Images/gallery/20251017.webp",
        alt: "春宮ゆくり",
        series: "イキヅライブ",
        date: "2025-10-17",
        w: 2894,
        h: 4093,
    },
    {
        id: 4,
        src: "/Images/gallery/20251021.webp",
        alt: "此花輝夜",
        series: "イキヅライブ",
        date: "2025-10-21",
        w: 2894,
        h: 4093,
    },
    {
        id: 5,
        src: "/Images/gallery/20251029.webp",
        alt: "山田真緑_LittleGreen委員会リリイベレポートイラスト",
        series: "イキヅライブ",
        date: "2025-10-29",
        w: 4093,
        h: 2894,
    },
    {
        id: 6,
        src: "/Images/gallery/20251107.webp",
        alt: "優木せつ菜",
        series: "虹ヶ咲",
        date: "2025-11-07",
        w: 2894,
        h: 4093,
    },
    {
        id: 7,
        src: "/Images/gallery/20260308.webp",
        alt: "山田真緑",
        series: "イキヅライブ",
        date: "2026-03-08",
        w: 2894,
        h: 4093,
    },
    {
        id: 8,
        src: "/Images/gallery/20260507.webp",
        alt: "山田真緑",
        series: "イキヅライブ",
        date: "2026-05-07",
        w: 2894,
        h: 4093,
    },
    {
        id: 9,
        src: "/Images/gallery/20260512.webp",
        alt: "名称未定",
        series: "オリジナル",
        date: "2026-05-12",
        w: 2894,
        h: 4093,
    },
    {
        id: 10,
        src: "/Images/gallery/20260513.webp",
        alt: "優木せつ菜",
        series: "虹ヶ咲",
        date: "2026-05-13",
        w: 2894,
        h: 4093,
    },
    {
        id: 11,
        src: "/Images/gallery/20260514.webp",
        alt: "中須かすみ",
        series: "虹ヶ咲",
        date: "2026-05-14",
        w: 2894,
        h: 4093,
    },
    {
        id: 12,
        src: "/Images/gallery/20260516.webp",
        alt: "山田真緑",
        series: "イキヅライブ",
        date: "2026-05-16",
        w: 2894,
        h: 4093,
    },
];