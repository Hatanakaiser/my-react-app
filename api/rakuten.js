export default async function handler(req, res) {
    try {
        const { query, mangaOnly } = req.query;

        const applicationId = "6c9fd622-4f9a-43ad-a508-6e173c5f31e6";
        const accessKey = "pk_xyHmhRDapKZR8Kk0qFa0AcbbWR0w4rs3eldSZRROOFW";
        const genreParam = mangaOnly === "true" ? "&booksGenreId=001001" : "";

        const targetUrl = `https://openapi.rakuten.co.jp/services/api/BooksBook/Search/20170404?applicationId=${applicationId}&accessKey=${accessKey}&title=${encodeURIComponent(query || "")}&hits=15&formatVersion=2${genreParam}`;

        // ★ ご自身のVercelサイトのURLをRefererに指定する
        const response = await fetch(targetUrl, {
            headers: {
                "Accept": "application/json",
                "Referer": "https://my-portfolio-sepia-beta-23.vercel.app",
                "Origin": "https://my-portfolio-sepia-beta-23.vercel.app"
            }
        });

        const data = await response.json();
        
        res.setHeader('Access-Control-Allow-Origin', '*');
        return res.status(200).json(data);

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}