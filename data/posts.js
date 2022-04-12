import { USERS } from "./user";

export const POSTS = [
    {
        imageUrl:
            "https://revelogue.com/wp-content/uploads/2019/12/Hinh-anh-dai-dien-Spirited-Away-e1576918534167.jpg",
        user: USERS[0].user,
        likes: 99454,
        caption:
            "Spirited Away !!! Spirited Away (Japanese: 千と千尋の神隠し, Hepburn: Sen to Chihiro no Kamikakushi, 'Sen and Chihiro's Spiriting Away') is a 2001 Japanese animated fantasy film written and directed by Hayao Miyazaki, animated by Studio Ghibli for Tokuma Shoten, Nippon Television Network, Dentsu, Buena Vista Home Entertainment, Tohokushinsha Film, and Mitsubishi and distributed by Toho",
        profile_picture: USERS[0].image,
        comments: [
            {
                user: USERS[2].user,
                comment:
                    "Những câu nói trên đầu môi, phải chăng người trao cho riêng mình tôi",
            },
            {
                user: USERS[4].user,
                comment: "Dẫu đã biết anh không hề yêu",
            },
            {
                user: USERS[3].user,
                comment: "Nhưng vẫn mơ mộng nhiều (vẫn mơ mộng nhiều)",
            },
            {
                user: USERS[5].user,
                comment: "Vì anh lạnh lùng băng giá, còn tôi con tim thật thà",
            },
            {
                user: USERS[1].user,
                comment: "Nên mình tôi ôm lòng đêm nhức nhối",
            },
        ],
        time: "10 phút trước",
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
                comment: "fim cung~ hay nhg toi o thik",
            },
        ],
        time: "56 phút trước",
    },
    {
        imageUrl:
            "https://sachhay24h.com/uploads/images/hang-xom-toi-la-totoro-my-neighbor-totoro-0.jpg",
        user: USERS[2].user,
        likes: 854,
        caption: "Totoro !!!",
        profile_picture: USERS[2].image,
        comments: [],
        time: "2 giờ trước",
    },
    {
        imageUrl: "https://cdn-amz.fadoglobal.io/images/I/81Mn91Y+XyL.jpg",
        user: USERS[3].user,
        likes: 1012515,
        caption: "Howls moving castle !!!",
        profile_picture: USERS[3].image,
        comments: [
            {
                user: USERS[2].user,
                comment: "bạn yếu là do bạn không chơi đồ đấy",
            },
            {
                user: USERS[4].user,
                comment: "ultr",
            },
        ],
        time: "3 giờ trước",
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
                comment: "ve' re? vai~",
            },
        ],
        time: "3 giờ trước",
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
        time: "4 giờ trước",
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
        time: "5 giờ trước",
    },
];
