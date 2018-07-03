let app=new Vue({
    el:"#app",
    data:{
        current_page:1,
        search_wd:"陈奕迅",
        current_tab:"单曲",
        tab_num:0,
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
        albumlist:[
            {
                title:"渐渐",
                singer:"陈奕迅",
                img_url:"http://p1.music.126.net/SGRNxyeA6_43M8oB0TuqrQ==/109951163370531309.jpg?param=180y180"
            },
            {
                title:"王牌冤家",
                singer:"李荣浩",
                img_url:"http://p3.music.126.net/ldRfSHRgtSZRsNruD54taQ==/109951163370797182.jpg?param=100y100"
            },
            {
                title:"平凡的一天",
                singer:"毛不易",
                img_url:"http://p4.music.126.net/vmCcDvD1H04e9gm97xsCqg==/109951163350929740.jpg?param=100y100"
            },
            {
                title:"Born To Be Yours",
                singer:"Kygo / Imagine Dragons",
                img_url:"http://p3.music.126.net/w84c5_ebsl9cqchrzT1pug==/109951163349702736.jpg?param=100y100"
            },
            {
                title:"F.L.Y. BOYS F.L.Y. GIRLS",
                singer:"GENERATIONS from EXILE TRIBE",
                img_url:"http://p4.music.126.net/ucsboPMm818QenSE8g-YnQ==/109951163336294560.jpg?param=100y100"
            },
            {
                title:"王牌冤家",
                singer:"李荣浩",
                img_url:"http://p3.music.126.net/ldRfSHRgtSZRsNruD54taQ==/109951163370797182.jpg?param=100y100"
            },
            {
                title:"平凡的一天",
                singer:"毛不易",
                img_url:"http://p4.music.126.net/vmCcDvD1H04e9gm97xsCqg==/109951163350929740.jpg?param=100y100"
            }
        ],
        playlists:[
            {
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
            console.log(`当前页: ${val}`);
        },
        tabClick:function (currentTab) {
            let tabs=["单曲","专辑","歌单","歌词","用户"]
            this.current_tab=tabs[currentTab.index];

            switch (this.current_tab) {
                case "单曲":this.tab_num=this.songs.length; break;
                case "专辑":this.tab_num=this.albumlist.length;break;
                case "歌单":this.tab_num=this.playlists.length;break;
                case "歌词":this.tab_num=this.lyrics.length;break;
                case "用户":this.tab_num=this.users.length;break;
            }
        },
        search:function () {
            //TODO 搜索
            console.log(this.search_wd)
        }

    },
    created:function () {
        this.tab_num=this.songs.length;
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

