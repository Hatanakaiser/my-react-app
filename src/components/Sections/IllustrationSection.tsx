import 'igniteui-webcomponents/themes/light/bootstrap.css';
import ImageCard from "../ImageCard/ImageCard"
import { useMemo } from 'react';
import { galleryItems } from "../../data/gallery"
import styles from "./IllustrationSection.module.css"
import { Link } from 'react-router-dom';
import { ROUTES } from '../../const';
import Button from '../Buttom/Button';



export default function IllustrationSection() {
    const latest = useMemo(() => {
        return [...galleryItems]
            .sort((a, b) => (a.date < b.date ? 1 : -1))
            .slice(0, 4);
    }, []);

    return (
        <section className="greenBack">
            <h2>Illustration</h2>
            <div className={styles.gallerySpace}>
                {latest.map((item, index) => (
                    <div className={styles.galleryCards} key={index}>
                        <ImageCard {...item} />
                    </div>
                ))}
            </div>
            <Button>
                <Link to={ROUTES.ILLUST}>More</Link>
            </Button>
        </section>
    )
}
