new Vue({
    el:"#app",
    data:{// form
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
        menu_active_index: '1',


        isPlaylist:true,
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
        album:{
            title:"渐渐",
            play_count:6324,
            collect_count:511,
            download_count:322,
            publish_date:"2018-05-14",
            publish_company: "环球唱片",
            img_url:"http://p3.music.126.net/SGRNxyeA6_43M8oB0TuqrQ==/109951163370531309.jpg?param=177y177",
            introduction:"陈奕迅(Eason)在2010-2012年间举行《DUO》世界巡回演唱会时，希望完成世界巡演后，一班演唱会成员可以共同创作一张专辑，作为团队大家庭之间的一次珍贵留念。事隔几年，这个愿望终于在今年成真，将会推出以「爱」为出发的专辑《L.O.V.E.》，将这段和团队的美好时光透过这张专辑记录下来，每一首歌都是一份来自Eason的「爱」。",
            singer:{
                id:"",
                name:"陈奕迅",
            }
        },
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
        ]
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
    },
    created:function () {
        let that=this
        let type=GetQueryString("type");
        let id=GetQueryString("id");
        if(type=="playlist"){
            this.isPlaylist=true;
        }else {
            this.isPlaylist=false;
        }
        if(this.isPlaylist){

            //访问后台得到playlist的数据
            axios.get('/playlist', {
                params: {
                    p_id: id
                }
            })
                .then(function (response) {
                    let data = response.data;
                    that.playlist=formatPlaylist(data);
                })
                .catch(function (error) {
                    console.log("获取歌单失败");
                });
        }else {
            //获得album的数据
            axios.get('/album', {
                params: {
                    a_id: id
                }
            })
                .then(function (response) {
                    let data = response.data;
                    that.album=formatAlbum(data);
                    console.log("获取专辑成功");
                })
                .catch(function (error) {
                    console.log("获取专辑失败");
                });
        }
    }
})
function GetQueryString(name)
{
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)
        return  decodeURI(r[2]);
    return null;
}
function formatPlaylist(playlist) {
    let playlist_f={
        title:playlist.playlistName,
        play_count:playlist.song_count,
        collect_count:511,
        download_count:322,
        create_date:playlist.creat_time,
        img_url:playlist.photo,
        introduction:"五月，会有始料不及的运气，会有突如其来的欢喜，放空的心，是最好的礼物； 独走的路，是最美的风景；好听的女声那么多，而我却偏偏喜欢你。♥这么好听的女声你确定要错过？",
        author:{
            name:playlist.creator_id,
            img_url:"http://p1.music.126.net/0btwtKKf0L162zX2WKQbBQ==/109951163379831126.jpg?param=40y40"
        },
        tags:["欧美","流行","电子"]
    }
    return playlist_f;
}
function formatAlbum(album) {
    let album_f={
        title:album.albumName,
        play_count:album.song_count,
        collect_count:11,
        download_count:32,
        publish_date:album.publish_time,
        publish_company: "环球唱片",
        img_url:album.photo,
        introduction:album.introduction,
        singer:{
            id:album.singer_id,
            name:album.singer_name,
        }
    }
    return album_f;
}
