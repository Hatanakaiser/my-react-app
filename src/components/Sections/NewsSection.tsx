import { Link } from "react-router-dom"
import { ROUTES } from "../../const"
import { useMemo } from "react"
import { newsItems } from "../../data/news"
import LatestNews from "../NewsList/LatestNews"
import Button from "../Buttom/Button"

export default function NewsSection() {
    const latest = useMemo(() => {
        return [...newsItems]
            .sort((a, b) => (a.date < b.date ? 1 : -1))
            .slice(0, 5);
    }, []);

    return (
        <section className="whiteBack">
            <h2>news</h2>
            {latest.map((item) => (
                <div key={item.id}>
                    <LatestNews {...item} />
                </div>
            ))}
            <Button>
                <Link to={ROUTES.NEWS}>More</Link>
            </Button>
        </section>
    )
}
