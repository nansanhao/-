new Vue({
    el: '#app',
    data: {
        tab_active_index:1,
        tab_list:[
            "推荐",
            "排行榜",
            "歌单",
            "主播电台",
            "歌手",
            "新碟上架"
        ],
        menu_active_index: '1',
        carousel_items: [
            {
                image_url: "http://p1.music.126.net/kCpE47CGXd79Osh-GvWwzQ==/109951163377208783.jpg",
                link_url: ""
            },
            {
                image_url: "http://p1.music.126.net/w7iaYYRtXuFJpOknc--oUg==/109951163376770114.jpg",
                link_url: ""
            },
            {
                image_url:"http://p1.music.126.net/Ez3UhanNxfXTlkPC59OfKg==/109951163378229383.jpg",
                link_url:""
            }
        ],
        hot_playlist:[
            {
                title:"华语|有颗星降落在我眼睛",
                img_url:"http://p1.music.126.net/26LPymJM-Jff9K9UVXhxSQ==/18996262393662264.jpg?param=140y140",
                num:"235416",
                create_date:"2018-06-27 17:12"
            },
            {
                title:"华语|有颗星降落在我眼睛",
                img_url:"http://p1.music.126.net/26LPymJM-Jff9K9UVXhxSQ==/18996262393662264.jpg?param=140y140",
                num:"235416",
                create_date:"2018-06-27 17:12"
            },
            {
                title:"华语|有颗星降落在我眼睛",
                img_url:"http://p1.music.126.net/26LPymJM-Jff9K9UVXhxSQ==/18996262393662264.jpg?param=140y140",
                num:"235416",
                create_date:"2018-06-27 17:12"
            },
            {
                title:"华语|有颗星降落在我眼睛",
                img_url:"http://p1.music.126.net/26LPymJM-Jff9K9UVXhxSQ==/18996262393662264.jpg?param=140y140",
                num:"235416",
                create_date:"2018-06-27 17:12"
            }
        ]
    }
})