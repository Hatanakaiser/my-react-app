export const ROUTES = {
    HOME: "/",
    ILLUST: "/illustrations",
    GAME: "/games",
    BOOKS: "/books",
    BOOK: "/book",
    NEWS: "/news"
}

export type PageList = {
    list: string;
    link: string;
};

export const PAGE_LIST: PageList[] = [
    {
        list: "Home",
        link: "/"
    },
    {
        list: "News",
        link: "/news"
    },
    {
        list: "Illustrations",
        link: "/illustrations"
    },
    {
        list: "Books",
        link: "/books"
    },
    {
        list: "Games",
        link: "/games"
    },
]

