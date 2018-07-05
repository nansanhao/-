new Vue({
    el:"#app",
    data:{
        comment_textarea:"",
        user_pic_url:"http://s4.music.126.net/style/web2/img/default/default_avatar.jpg?param=50y50",
        song:{
            name:"青柠",                          //歌名
            singer:"徐秉龙 / 桃十五",                    //歌手名
            album:"青柠",                         //专辑名
            collect_count:113,                    //收藏量
            download_count:222,                   //下载量
            play_count:6324,                      //播放次数
            ablum_picture_src:"http://p1.music.126.net/WoR2LbM1IFauFpvhBWOjqA==/6642149743396577.jpg?param=130y130",
            song_bar:'90',
            song_alltime:'03:58',
            song_realtime:"02:20",
            song_src:'http://music.163.com/song/media/outer/url?id=504624714.mp3',
        },
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
        ],
        fans:[
            {
                user_id:"",
                img_url:"http://p1.music.126.net/wADOVhTcVqz5QE2mSXWsvw==/109951163156968576.jpg?param=40y40"
            },
            {
                user_id:"",
                img_url:"http://p1.music.126.net/cnOasuJeITjMXLdEpLlIYg==/109951163188627683.jpg?param=40y40"
            },
            {
                user_id:"",
                img_url:"http://p1.music.126.net/XRPbiATAJb22_eWGbvp90Q==/18735678139079848.jpg?param=40y40"
            },
            {
                user_id:"",
                img_url:"http://p1.music.126.net/g-RIpfoxBdN-JB7JQ6_fnw==/3394192412338121.jpg?param=40y40"
            },
            {
                user_id:"",
                img_url:"http://p1.music.126.net/wADOVhTcVqz5QE2mSXWsvw==/109951163156968576.jpg?param=40y40"
            },
            {
                user_id:"",
                img_url:"http://p1.music.126.net/cnOasuJeITjMXLdEpLlIYg==/109951163188627683.jpg?param=40y40"
            },
            {
                user_id:"",
                img_url:"http://p1.music.126.net/XRPbiATAJb22_eWGbvp90Q==/18735678139079848.jpg?param=40y40"
            },
            {
                user_id:"",
                img_url:"http://p1.music.126.net/g-RIpfoxBdN-JB7JQ6_fnw==/3394192412338121.jpg?param=40y40"
            }
        ],
        // form
        user: {
            id: "1",
            name: "南三号",
            img_url: "http://s4.music.126.net/style/web2/img/default/default_avatar.jpg?param=50y50",
        },
        loginFormVisible: false,
        formLabelWidth: '40px',
        search_wd: "",
        login_form: {
            account: '',
            password: '',
        },
        registerFormVisible: false,
        register_form: {
            account: "",
            password: "",
            password_repeat: "",
            verification_code: ""
        },
        // nav
        menu_active_index: '1'
    },
    created:function () {
        let type=GetQueryString("type");
        if(type=="playlist"){
            this.isPlaylist=true;
        }else {
            this.isPlaylist=false;
        }
    },
    methods:{
        search: function () {
            console.log("搜索")
            window.location.href = "../searchResults/searchResults.html?" + `search_wd=${this.search_wd}`
        },
        login: function () {
            let that = this
            //TODO 发送请求后台如果密码正确
            let res = "no";
            if (res == "ok") {
                that.loginFormVisible = false;
                this.user = {
                    id: "1",
                    name: "南三号",
                    img_url: "http://s4.music.126.net/style/web2/img/default/default_avatar.jpg?param=50y50"
                };
                setTimeout(function () {
                    that.$message({
                        message: '登录成功！',
                        type: 'success',
                        duration: 2000
                    });
                }, 100)
            } else {
                setTimeout(function () {
                    that.$message({
                        message: '账户或密码错误！请重新输入。',
                        type: 'error',
                        duration: 2000
                    });
                }, 100)
            }

        },
        register: function () {
            let that = this
            if (that.register_form.password == that.register_form.password_repeat) {
                let user = {
                    account: that.register_form.account,
                    password: that.register_form.password,
                    verification_code: that.register_form.verification_code
                }
                //TODO 提交到后台

                //成功
                that.registerFormVisible = false;
                setTimeout(function () {
                    that.$message({
                        message: '注册成功，去登录吧！',
                        type: 'success',
                        duration: 2000
                    });
                }, 100)
            } else {
                that.$message({
                    message: '错误！前后两次密码输入不同。',
                    type: 'error',
                    duration: 2000
                });
            }


        },
        toRegisterORLogin: function (type) {
            let that = this;
            if (type == "Login") {
                that.registerFormVisible = false;
                setTimeout(function () {
                    that.loginFormVisible = true;
                }, 200)
            }
            else if (type == "Register") {
                that.loginFormVisible = false;
                setTimeout(function () {
                    that.registerFormVisible = true;
                }, 200)
            }
        },
        handleCommand: function (command) {
            if (command == "logout") {
                this.user = null;
                this.$message({
                    message: '登出成功！',
                    type: 'success',
                    duration: 1000
                });
            }
            if (command == "homepage") {
                window.location.href = "../homepage/homepage.html?type=mine&id=" + this.user.id
            }

        }
    }

})

function GetQueryString(name)
{
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  unescape(r[2]);
    return null;
}

/*---------歌词模块：显示歌词，滚动歌词*/
/*将歌词拼成p标签*/
        //var myMusic 自定义一个变量 myMusic来存储audio标签元素 
        // 在 document 文档下通过ID名获取元素（document.getElementById（））
        var myMusic = document.getElementById("myMusic");
        var btn = document.querySelector(".play_wrap .btn2");//获取btn标签
        var txt = document.querySelector(".song_lyric");//获取textarea标签
        var con = document.getElementById("lyric_content");//获取id为content的标签 
        var onoff = true;//控制音乐的播放与暂停       
        var html = '';//定义一个空变量来存储歌词文本
        // 为btn标签绑定鼠标点击事件   click:经过封装的事件函数 ； onclick：原生（未经过封装）的事件函数
        // btn.onclick = function(){
        //     console.log("1312");
        //     if(onoff){
        //         myMusic.play();//播放音乐
                
        //         onoff = false;
        //     }else{
        //         myMusic.pause();//暂停播放
                
        //         onoff = true;
        //     }
        // }
        //获取歌词
        // console.log(txt.value);在控制台输出
        // 循环遍历到每句歌词
         var lrc = txt.value.split("[");//获取歌词并从[切割开,并记录[前的信息(到前一个[为止),并形成一个数组
         for(var i = 0;i<lrc.length;i++){

            var arr = lrc[i].split("]");//再次切割将时间和歌词分割开
            // console.log(arr[0]);
            //将上面切割出来的歌词时间进行切割
            var times = arr[0].split(".");
            // console.log(times[0]);
            var time  = times[0].split(":");
            // console.log(time);
            //将00:00转换为秒钟
            var ct = time[0]*60+time[1]*1;//将time[0]和time[1]字符转换成数字再相加
            // console.log(ct);
            //判断是否存在歌词
            if(arr[1]){
                html+="<p id="+ct+">"+arr[1]+"</p>"//拼接成p标签
            }
         }
         //console.log(html);
         con.innerHTML = html;//把歌词内容添加到歌词盒子
         var aP = document.getElementsByTagName("p");//获得所有的p标签
         var n = 0;

         //歌词同步
         //为歌曲添加监听事件，监听时间的更新(歌曲播放的进度)
         myMusic.addEventListener("timeupdate",function(){
            //输出当前时间
             console.log(parseInt(this.currentTime)); //parseInt()--取整，丢弃小数部分，保留整数部分
            var cur = parseInt(this.currentTime);//存储当前时间

            if(document.getElementById(cur)){
                //先把所有的p标签内容改成原来的颜色，再把当前的p改成红色
                for(var i=0;i<aP.length;i++){
                    aP[i].style.color = "#625959";
                    aP[i].style.fontSize= "14px";
                }
                document.getElementById(cur).style.color ="red";//即时更改字体颜色
                document.getElementById(cur).style.fontSize = "18px";//将当前歌词变大
                if(aP[n+7].id==cur){
                    con.style.top = -20*n+"px";
                    n++;
                }
            }

         });