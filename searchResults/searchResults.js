let app=new Vue({
    el:"#app",
    data:{
        limit:10,
        total:100,
        current_page:1,
        search_wd:"陈奕迅",

        current_tab:"首单曲",

        song_current_page:2,
        song_total:100,

        album_current_page:3,
        album_total:200,

        playlist_current_page:1,
        playlist_total:100,

        lyric_current_page:5,
        lyric_total:500,

        user_current_page:4,
        user_total:400,
        songs:[
            {
                id:2,
                title:"Safe ",
                duration:"03:20",
                album:{
                    id:"1",
                    name:"Safe"
                },
                singer:{
                    id:1,
                    name:"Daya"
                }
            },
            {
                id:2,
                title:"Only You",
                duration:"03:09",
                album:{
                    id:"1",
                    name:"Safe"
                },
                singer:{
                    id:1,
                    name:"Daya"
                }
            },{
                id:2,
                title:"You",
                duration:"03:20",
                album:{
                    id:"1",
                    name:"Safe"
                },
                singer:{
                    id:1,
                    name:"Daya"
                }
            },{
                id:2,
                title:"Need You Right Now",
                duration:"03:25",
                album:{
                    id:"1",
                    name:"Safe"
                },
                singer:{
                    id:1,
                    name:"Daya"
                }
            },{
                id:2,
                title:"Cruel",
                duration:"03:31",
                album:{
                    id:"1",
                    name:"Safe"
                },
                singer:{
                    id:1,
                    name:"Daya"
                }
            },{
                id:2,
                title:"Horizon",
                duration:"03:00",
                album:{
                    id:"1",
                    name:"Safe"
                },
                singer:{
                    id:1,
                    name:"Daya"
                }
            },{
                id:2,
                title:"Your Place or Mine",
                duration:"03:14",
                album:{
                    id:"1",
                    name:"Safe"
                },
                singer:{
                    id:1,
                    name:"Daya"
                }
            },
            {
                id:2,
                title:"California",
                duration:"03:20",
                album:{
                    id:"1",
                    name:"Safe"
                },
                singer:{
                    id:1,
                    name:"Daya"
                }
            }
            ,{
                id:2,
                title:"Big Words",
                duration:"03:16",
                album:{
                    id:"1",
                    name:"Safe"
                },
                singer:{
                    id:1,
                    name:"Daya"
                }
            }
            ,{
                id:2,
                title:"Because Of You",
                duration:"04:01",
                album:{
                    id:"1",
                    name:"Safe"
                },
                singer:{
                    id:1,
                    name:"Daya"
                }
            }
        ],
        albumlist:[
            {
                id: "1",
                title: "EVERYTHING IS LOVE",
                singer: {
                    id:1,
                    name:"The Carters / Beyoncé / Jay-Z"
                },
                img_url: "http://p3.music.126.net/WcVJXehoHv1_b0GyWFCjmA==/109951163365318229.jpg?param=100y100"
            },
            {
                id: "2",
                title: "王牌冤家",
                singer: {
                    id:1,
                    name:"李荣浩"
                },
                img_url: "http://p3.music.126.net/ldRfSHRgtSZRsNruD54taQ==/109951163370797182.jpg?param=100y100"
            },
            {
                id: "3",
                title: "平凡的一天",
                singer: {
                    id:2,
                    name:"毛不易"
                },
                img_url: "http://p4.music.126.net/vmCcDvD1H04e9gm97xsCqg==/109951163350929740.jpg?param=100y100"
            },
            {
                id: "4",
                title: "Born To Be Yours",
                singer: {
                    id:3,
                    name:"Kygo / Imagine Dragons"
                },
                img_url: "http://p3.music.126.net/w84c5_ebsl9cqchrzT1pug==/109951163349702736.jpg?param=100y100"
            },
            {
                id: "5",
                title: "F.L.Y. BOYS F.L.Y. GIRLS",
                singer: {
                    id:6,
                    name:"GENERATIONS from EXILE TRIBE"
                },
                img_url: "http://p4.music.126.net/ucsboPMm818QenSE8g-YnQ==/109951163336294560.jpg?param=100y100"
            }
        ],
        playlists:[
            {
                id:1,
                title:"华语|有颗星降落在我眼睛",
                img_url:"http://p1.music.126.net/26LPymJM-Jff9K9UVXhxSQ==/18996262393662264.jpg?param=140y140",
                play_count:12316,
                num:51,
                create_date:"2018-06-27 17:12",
                author:{
                    id:"1",
                    name:"南三号",
                }
            },
            {
                id:1,
                title:"岁月留声｜听一张２０世纪的老唱片",
                img_url:"http://p1.music.126.net/gM_h6qjE0iQQAwOnkXcysQ==/109951163362013434.jpg?param=140y140",
                play_count:12316,
                num:51,
                create_date:"2018-06-27 17:12",
                author:{
                    id:"1",
                    name:"南三号",
                }
            },
            {
                id:1,
                title:"『 暴露年龄 』致那些年我们抖过的腿",
                img_url:"http://p1.music.126.net/isVUh8ZqREZFqBXk3q6Xbg==/109951163372146234.jpg?param=140y140",
                play_count:12316,
                num:51,
                create_date:"2018-06-27 17:12",
                author:{
                    id:"1",
                    name:"南三号",
                }
            },
            {
                id:1,
                title:"小鬼-王琳凯//扑朔迷离的快乐病毒了解下？",
                img_url:"http://p1.music.126.net/x7itXXQ0c_LBCK2CIUjF_Q==/19193074975068935.jpg?param=140y140",
                play_count:12316,
                num:51,
                create_date:"2018-06-27 17:12",
                author:{
                    id:"1",
                    name:"南三号",
                }
            },
            {
                id:1,
                title:"【大咖】作家骁骑校：生命中最重要的部分永远鲜活",
                img_url:"http://p1.music.126.net/DHQ-9Q8XSkVcZfHJKfeOYw==/109951163378543579.jpg?param=140y140",
                play_count:12316,
                num:51,
                create_date:"2018-06-27 17:12",
                author:{
                    id:"1",
                    name:"南三号南三号南三号南三号南三号",
                }
            },
            {
                id:1,
                title:"纯音丨努力到无能为力 拼搏到感动自己",
                img_url:"http://p1.music.126.net/RO7-jpsyBH_kAIvEKsBp2A==/109951163214483552.jpg?param=140y140",
                play_count:12316,
                num:51,
                create_date:"2018-06-27 17:12",
                author:{
                    id:"1",
                    name:"南三号",
                }
            },
            {
                id:1,
                title:"『作业党福利』‖慎入！会上瘾❤",
                img_url:"http://p1.music.126.net/J1wokjMCVWr5nK6KBIYKkA==/18931391207609246.jpg?param=140y140",
                play_count:12316,
                num:51,
                create_date:"2018-06-27 17:12",
                author:{
                    id:"1",
                    name:"南三号",
                }
            },
            {
                id:1,
                title:"凯叔·声律启蒙·一东①",
                img_url:"http://p1.music.126.net/xAdgxgY0XJSUznvIPOCJpA==/109951163039233018.jpg?param=140y140",
                play_count:12316,
                num:51,
                create_date:"2018-06-27 17:12",
                author:{
                    id:"1",
                    name:"南三号",
                }
            }
        ],
        lyrics:[],
        users:[]
    },
    watch:{
        current_page:function () {
            //TODO 请求某一页的数据
        }
    },
    methods:{
        fomatString:function (title,len) {
            if(title.length>=len){
                return title.slice(0,len-1)+"..."
            }else{
                return title
            }

        },
        handleCurrentChange:function (val) {
            let that=this;
            let current_tab=that.current_tab;
            let offset=(val-1)*that.limit+1;
            let limit=that.limit;
            console.log(`当前页: ${val}`);
            if(current_tab=="song"){
                //访问后台从offset开始limit个song
            }else if(current_tab=="album"){

            }
        },
        tabClick:function (currentTab) {
            let tabs=["首单曲","张专辑","张歌单","份歌词","个用户"]
            this.current_tab=tabs[currentTab.index];

            switch (this.current_tab) {
                case "首单曲":
                    this.total=this.song_total;
                    this.current_page=this.song_current_page;
                    break;
                case "张专辑":
                    this.total=this.album_total;
                    this.current_page=this.album_current_page;
                    break;
                case "张歌单":
                    this.total=this.playlist_total;
                    this.current_page=this.playlist_current_page;
                    break;
                case "份歌词":
                    this.total=this.lyric_total;
                    this.current_page=this.lyric_current_page;
                    break;
                case "个用户":
                    this.total=this.user_total;
                    this.current_page=this.user_current_page;
                    break;
            }
        },
        search:function () {
            //TODO 搜索
            console.log(this.search_wd)
        }

    },
    created:function () {
        this.tab_num=this.song_total;
        this.search_wd=getQueryString("search_wd")
    }

})
function getQueryString(name)
{
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)
        return  decodeURI(r[2]);
    return null;
}

