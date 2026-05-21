import { useState } from "react"
import Carousel from "../Carousel/Carousel"
import CarouselItem from "../Carousel/CarouselItem"
import styles from "./AboutSection.module.css"
import SkillCard from "../Skills/SkillCard"
import { skills } from "../../data/skills"

export default function AboutSection() {

  // Carousel用
  const [count, setCount] = useState(0)
  const maxCount = skills.length;
  const setNewCount = (n: number) => {
    let newCount = count + n;
    switch (newCount) {
      case -1:
        newCount = maxCount - 1;
        break;
      case maxCount:
        newCount = 0;
        break;
    }
    setCount(newCount);
  }

  return (
    <section className="greenBack">
      <h2>About</h2>
      <figure className={styles.about}>
        <img className={styles.aboutImage} src="/Images/Profile.webp" alt="About image" />
        <figcaption className={styles.aboutCaption}>
          <h2 className={styles.aboutHeadline}>PROFILE</h2>
          <p className={styles.aboutDescription}>
            はたなか/Hatanaka<br />
            「自分が心の底から面白いと思えるもの」を原動力に、イラスト制作やWeb・ゲーム開発を行っている「おもしろクリエイター」です。<br />
            私にとってのモノづくりのゴールは、自分が楽しく作れること、そして完成したものを誰かに楽しんでもらうことです。単に作品を作って発信するだけでなく、コミュニティを通じてファンの方々と一緒に育てていくような、ワクワクするプロジェクトを作っていきたいと考えています。<br />
            イラストや同人誌、Web、ゲームプログラミングで、幅広い手段でアイデアを形にしています。
          </p>
          <h3>Skills</h3>
          <div className={styles.skillsSpace}>
            <Carousel moveLeft={() => setNewCount(-1)} moveRight={() => setNewCount(1)}>
              {skills.map((skill) => (
                <CarouselItem index={skill.id} count={count} maxCount={maxCount}><SkillCard {...skill} /></CarouselItem>
              ))}
            </Carousel>
          </div>
        </figcaption>
      </figure>
    </section>
  )
}

