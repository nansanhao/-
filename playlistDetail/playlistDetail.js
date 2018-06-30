new Vue({
    el:"#app",
    data:{
        isPlaylist:false,
        comment_textarea:"",
        playlist:{
            title:"韵律中邂逅惊艳女嗓，美到心醉",
            play_count:6324,
            collect_count:511,
            download_count:322,
            create_date:"2018-05-14",
            img_url:"http://p3.music.126.net/2-04ThxCahYBMbkXzFHwfw==/19161189137853511.jpg?param=200y200",
            introduction:"五月，会有始料不及的运气，会有突如其来的欢喜，放空的心，是最好的礼物； 独走的路，是最美的风景；好听的女声那么多，而我却偏偏喜欢你。♥这么好听的女声你确定要错过？",
            author:{
                name:"南三号",
                img_url:"http://p1.music.126.net/0btwtKKf0L162zX2WKQbBQ==/109951163379831126.jpg?param=40y40"
            },
            tags:["欧美","流行","电子"]
        },
        songs:[
            {
                title:"Safe ",
                duration:"03:20",
                album:"Safe",
                singer:"Daya"
            },
            {
                title:"Only You",
                duration:"03:09",
                album:"Only You",
                singer:"Cheat Codes"
            },{
                title:"You",
                duration:"03:20",
                album:"Odyssey",
                singer:"Matlda"
            },{
                title:"Need You Right Now",
                duration:"03:25",
                album:"Safe",
                singer:"Hedegaard"
            },{
                title:"Cruel",
                duration:"03:31",
                album:"Cruel",
                singer:"Tobu"
            },{
                title:"Horizon",
                duration:"03:00",
                album:"Horizon",
                singer:"Kill The Noise"
            },{
                title:"Your Place or Mine",
                duration:"03:14",
                album:"Your Place or Mine",
                singer:"Zay"
            },
            {
                title:"California",
                duration:"03:20",
                album:"California",
                singer:"Hot Shade"
            }
            ,{
                title:"Big Words",
                duration:"03:16",
                album:"Big Words",
                singer:"Klaas"
            }
            ,{
                title:"Because Of You",
                duration:"04:01",
                album:"Because Of You",
                singer:"Steve Void"
            }
        ],
        comments:[
            {
                user_name:"地狱的深海巨兽",
                img_url:"http://p1.music.126.net/tsiAFgtel-UR4HhqaD9CpA==/109951163369024323.jpg?param=50y50",
                content:"每一首都很好听，超喜欢。每一首都很好听，超喜欢。",
                create_date:"5月26日 06:57",
                likes:"21"

            },
            {
                user_name:"关机大魔王",
                img_url:"http://p1.music.126.net/GU2MEdzuwyXvfVt3-dTK2g==/109951163095495030.jpg?param=50y50",
                content:"菲律宾网红吧...我觉得或许是",
                create_date:"5月27日 08:12",
                likes:"37"

            },
            {
                user_name:"版泉sao的网易",
                img_url:"http://p1.music.126.net/dSmu4ZZoCnJDdvQlOiRI3g==/19040242858348690.jpg?param=50y50",
                content:"哎，我看到不是999+一般喜欢跳过",
                create_date:"5月28日 12:07",
                likes:"31"

            },
            {
                user_name:"缪泽客",
                img_url:"http://p1.music.126.net/YZxL6aNc_Ovx75SRjOwBPA==/2537672838261836.jpg?param=50y50",
                content:"堂堂一个音乐软件，让我下的图片比音乐还多可还行",
                create_date:"5月30日 06:42",
                likes:"251"

            },
            {
                user_name:"偏科的傲娇小橘猫",
                img_url:"http://p1.music.126.net/et2lHN9nEc0a_driAPy2cA==/109951163326964648.jpg?param=50y50",
                content:"坐等🔥",
                create_date:"6月10日 07:27",
                likes:"81"

            },
            {
                user_name:"整个森林的蘑菇",
                img_url:"http://p1.music.126.net/wIss2a5FJJLtBlaQAzz_RQ==/109951163112627226.jpg?param=50y50",
                content:"tobu是不是女孩子！",
                create_date:"6月17日 17:67",
                likes:"3"

            }
        ]
    }
})