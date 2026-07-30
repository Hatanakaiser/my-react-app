export default async function handler(req, res) {
    // アプリから送られてくる検索キーワードを受け取る
    const { query, mangaOnly } = req.query;

    const applicationId = "6c9fd622-4f9a-43ad-a508-6e173c5f31e6";
    const accessKey = "pk_xyHmhRDapKZR8Kk0qFa0AcbbWR0w4rs3eldSZRROOFW";
    const genreParam = mangaOnly === "true" ? "&booksGenreId=001001" : "";

    // 楽天APIのエンドポイント
    const targetUrl = `https://openapi.rakuten.co.jp/services/api/BooksBook/Search/20170404?applicationId=${applicationId}&accessKey=${accessKey}&title=${encodeURIComponent(query)}&hits=15&formatVersion=2${genreParam}`;

    try {
        // Webサイト（自分自身）のサーバーから楽天APIを叩くため、
        // 楽天側からは「登録されたWebサイトからの正当なアクセス」として完璧に認識されます
        const response = await fetch(targetUrl, {
            headers: {
                "Referer": "https://my-portfolio-sepia-beta-23.vercel.app"
            }
        });

        const data = await response.json();

        // 取得した結果をそのままアプリに返す
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json({ error: "Failed to fetch from Rakuten" });
    }
}