import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import { ROUTES } from './const';
import Home from "./pages/Home";
import Illustrations from './pages/Illustrations';
import Games from './pages/Games';
import News from './pages/News';
import AllNews from './pages/AllNews';
import Books from './pages/Books';
import Book from './pages/Book';
import ScrollToTop from './components/ScrollToTop';


function App() {

  return (
    <BrowserRouter>
      <Header></Header>
      <ScrollToTop />
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.ILLUST} element={<Illustrations />} />
        <Route path={ROUTES.GAME} element={<Games />} />
        <Route path={ROUTES.NEWS} element={<AllNews />} />
        <Route path={`${ROUTES.NEWS}/:slug`} element={<News />} />
        <Route path={ROUTES.BOOKS} element={<Books />} />
        <Route path={`${ROUTES.BOOK}/:slug`} element={<Book />} />
      </Routes>

      <Footer></Footer>
    </BrowserRouter>
  )
}

export default App
