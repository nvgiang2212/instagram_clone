import { USERS } from "./user";

export const POSTS = [
    {
        imageUrl:
            "https://revelogue.com/wp-content/uploads/2019/12/Hinh-anh-dai-dien-Spirited-Away-e1576918534167.jpg",
        user: USERS[0].user,
        likes: 454,
        caption: "Spirited Away !!!",
        profile_picture: USERS[0].image,
        comments: [
            {
                user: USERS[2].user,
                comment: "qua hay ban oi",
            },
            {
                user: USERS[4].user,
                comment: "ultr",
            },
        ],
    },
    {
        imageUrl:
            "https://c4.wallpaperflare.com/wallpaper/116/943/740/the-explosion-superhero-tony-stark-tony-stark-wallpaper-preview.jpg",
        user: USERS[1].user,
        likes: 4343,
        caption: "Iron man 3",
        profile_picture: USERS[1].image,
        comments: [
            {
                user: USERS[5].user,
                comment: "phim cung hay nhung ko hay lam",
            },
            {
                user: USERS[6].user,
                comment: "3.5.0.8",
            },
        ],
    },
    {
        imageUrl:
            "https://sachhay24h.com/uploads/images/hang-xom-toi-la-totoro-my-neighbor-totoro-0.jpg",
        user: USERS[2].user,
        likes: 54,
        caption: "Totoro !!!",
        profile_picture: USERS[2].image,
        comments: [
            {
                user: USERS[1].user,
                comment: "ghilbi muon nam",
            },
            {
                user: USERS[4].user,
                comment: "ai cha cha",
            },
        ],
    },
    {
        imageUrl: "https://cdn-amz.fadoglobal.io/images/I/81Mn91Y+XyL.jpg",
        user: USERS[3].user,
        likes: 15,
        caption: "Howls moving castle !!!",
        profile_picture: USERS[3].image,
        comments: [
            {
                user: USERS[2].user,
                comment: "qua hay ban oi",
            },
            {
                user: USERS[4].user,
                comment: "ultr",
            },
        ],
    },
    {
        imageUrl: "https://i.ytimg.com/vi/1o_MjaF_E2o/maxresdefault.jpg",
        user: USERS[4].user,
        likes: 1454,
        caption: "Fantastic Beasts: The Secrets of Dumbledore",
        profile_picture: USERS[4].image,
        comments: [
            {
                user: USERS[6].user,
                comment: "da qua pepsi oi",
            },
            {
                user: USERS[1].user,
                comment: "ve xem dat vai nong",
            },
        ],
    },
    {
        imageUrl:
            "https://bloganchoi.com/wp-content/uploads/2021/11/spiderman-no-way-home-trailer-giai-thich-7.jpg",
        user: USERS[5].user,
        likes: 24854,
        caption: "Spider man: Noway home",
        profile_picture: USERS[5].image,
        comments: [
            {
                user: USERS[4].user,
                comment: "deo khau trang vao ban gi oi",
            },
            {
                user: USERS[6].user,
                comment: "bap ma anh khen ngon la bap dui em",
            },
        ],
    },
    {
        imageUrl:
            "http://static1.bestie.vn/Mlog/ImageContent/201807/nu-nhan-vat-phu-de-thuong-khong-kem-canh-gi-nhan-vat-chinh-shizuka-db2262.jpg",
        user: USERS[6].user,
        likes: 44545,
        caption: "Doreamon",
        profile_picture: USERS[6].image,
        comments: [
            {
                user: USERS[5].user,
                comment: "stop war pls",
            },
            {
                user: USERS[2].user,
                comment: "I can knockout Chaien",
            },
        ],
    },
];
