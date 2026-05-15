import AboutSection from "../components/Sections/AboutSection"
import BookSection from "../components/Sections/BookSection"
import Contact from "../components/Sections/Contact"
import GameSection from "../components/Sections/GameSection"
import Hero from "../components/Sections/Hero"
import IllustrationSection from "../components/Sections/IllustrationSection"
import NewsSection from "../components/Sections/NewsSection"
import '../components/Sections/Section.css'


export default function Home() {
  return (
    <div>
      <Hero />
      <AboutSection />
      <NewsSection />
      <IllustrationSection />
      <BookSection />
      <GameSection />
      <Contact />
    </div>
  )
}
