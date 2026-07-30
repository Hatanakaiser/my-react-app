export default async function handler(req, res) {
  try {
    const { query, mangaOnly } = req.query;

    const applicationId = "6c9fd622-4f9a-43ad-a508-6e173c5f31e6";
    const accessKey = "pk_xyHmhRDapKZR8Kk0qFa0AcbbWR0w4rs3eldSZRROOFW";
    const genreParam = mangaOnly === "true" ? "&booksGenreId=001001" : "";

    const targetUrl = `https://openapi.rakuten.co.jp/services/api/BooksBook/Search/20170404?applicationId=${applicationId}&accessKey=${accessKey}&title=${encodeURIComponent(query || "")}&hits=15&formatVersion=2${genreParam}`;

    const response = await fetch(targetUrl, {
      headers: {
        "Accept": "application/json",
        "Referer": "https://www.rakuten.co.jp/",
        "Origin": "https://www.rakuten.co.jp/"
      }
    });

    const data = await response.json();
    return res.status(200).json(data);

  } catch (error) {
    // サーバー側で起きたエラーの詳細をそのまま返す
    return res.status(500).json({ error: error.message, stack: error.stack });
  }
}