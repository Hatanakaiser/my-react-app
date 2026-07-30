module.exports = async (req, res) => {
    const { query, mangaOnly } = req.query;

    const applicationId = "6c9fd622-4f9a-43ad-a508-6e173c5f31e6";
    const accessKey = "pk_xyHmhRDapKZR8Kk0qFa0AcbbWR0w4rs3eldSZRROOFW";

    let url = `https://openapi.rakuten.co.jp/services/api/BooksBook/Search/20170404?applicationId=${applicationId}&accessKey=${accessKey}&title=${encodeURIComponent(query || '')}&hits=15&formatVersion=2`;

    if (mangaOnly === 'true') {
        url += `&booksGenreId=001001`;
    }

    try {
        // ★ Originヘッダーを追加し、Refererを楽天のドメイン等に合わせる
        const response = await fetch(url, {
            headers: {
                "Accept": "application/json",
                "Referer": "https://www.rakuten.co.jp/",
                "Origin": "https://www.rakuten.co.jp/"
            }
        });

        const data = await response.json();

        res.setHeader('Access-Control-Allow-Origin', '*');
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};