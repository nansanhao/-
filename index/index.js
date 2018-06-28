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
                title:"岁月留声｜听一张２０世纪的老唱片",
                img_url:"http://p1.music.126.net/gM_h6qjE0iQQAwOnkXcysQ==/109951163362013434.jpg?param=140y140",
                num:"235416",
                create_date:"2018-06-27 17:12"
            },
            {
                title:"『 暴露年龄 』致那些年我们抖过的腿",
                img_url:"http://p1.music.126.net/isVUh8ZqREZFqBXk3q6Xbg==/109951163372146234.jpg?param=140y140",
                num:"235416",
                create_date:"2018-06-27 17:12"
            },
            {
                title:"小鬼-王琳凯//扑朔迷离的快乐病毒了解下？",
                img_url:"http://p1.music.126.net/x7itXXQ0c_LBCK2CIUjF_Q==/19193074975068935.jpg?param=140y140",
                num:"235416",
                create_date:"2018-06-27 17:12"
            },
            {
                title:"【大咖】作家骁骑校：生命中最重要的部分永远鲜活",
                img_url:"http://p1.music.126.net/DHQ-9Q8XSkVcZfHJKfeOYw==/109951163378543579.jpg?param=140y140",
                num:"235416",
                create_date:"2018-06-27 17:12"
            },
            {
                title:"纯音丨努力到无能为力 拼搏到感动自己",
                img_url:"http://p1.music.126.net/RO7-jpsyBH_kAIvEKsBp2A==/109951163214483552.jpg?param=140y140",
                num:"235416",
                create_date:"2018-06-27 17:12"
            },
            {
                title:"『作业党福利』‖慎入！会上瘾❤",
                img_url:"http://p1.music.126.net/J1wokjMCVWr5nK6KBIYKkA==/18931391207609246.jpg?param=140y140",
                num:"235416",
                create_date:"2018-06-27 17:12"
            },
            {
                title:"凯叔·声律启蒙·一东①",
                img_url:"http://p1.music.126.net/xAdgxgY0XJSUznvIPOCJpA==/109951163039233018.jpg?param=140y140",
                num:"235416",
                create_date:"2018-06-27 17:12"
            }
        ]
    }
})