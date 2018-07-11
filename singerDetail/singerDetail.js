new Vue({
	el: "#app",
	data:{
		play_list_num: "10",
		singer:{
			singer_name:"张子琦",
			singer_pic_src: "http://p4.music.126.net/nILBk4DaE3yV__25uq-5GQ==/18641120139241412.jpg?param=640y300",
            singer_intorduction_content: "中国台湾著名女歌手，亚洲流行歌坛重量级天后，台湾原住民歌手。张惠妹于华人世界名气极高，于海外（尤美、日等地）也有一定的知名度，已囊括多项华语圈重要的音乐奖项。也是台湾首位接受美国CNN专访的歌手（并且在2011年第二度接受此媒体《Talk Asia》节目专访）。阿妹在1996年三月被著名台湾音乐人陈志远、陈复明发现并签约丰华唱片。并在同年7月在带自己入行的恩师张雨生的《两伊战争－红色热情》专辑中与张雨生男女对唱《最爱的人伤我最深》。同年12月13日，张惠妹在张雨生的协助下发行第一张个人专辑《姐妹》。1998年 举办第一场个人大型户外售票演唱会“妹力四射”，创下台湾歌手有史以来最快举行大型演唱会的纪录。2009年发行的《阿密特》专辑至今仍是金曲奖史上获得最大成功的作品，曾于第21届时擒下包括专辑、制作人、歌手等六项大奖。代表作品：《姐妹》、《我可以抱你吗》、《记得》、《火》、《如果你也听说》、《掉了》、《我最亲爱的》。",
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
        albumlist:[
            {
                title:"Are You Ready (Live)",
                publish_time:"2018.6.15",
                img_url:"http://p4.music.126.net/8OgokCKVR_0CXq968-KCrw==/109951163354580981.jpg?param=120y120",
                album_url: "https://music.163.com/album?id=39707049",
            },
            {
                title:"偷故事的人 ",
                publish_time:"2017.12.12",
                img_url:"http://p4.music.126.net/SbJdGLDz9V1_sLffpjMU8g==/109951163079119875.jpg?param=120y120",
                album_url:"https://music.163.com/album?id=36941045",
            },
            {
                title:"姊妹2016 (平行宇宙版)",
                publish_time:"2016.12.13",
                img_url:"http://p4.music.126.net/1ewGPlNaOczku3USsGWrsw==/18566353348178818.jpg?param=120y120",
                album_url: "https://music.163.com/album?id=35045434",
            },
            {
                title:"灵魂尽头",
                publish_time:"2015.5.19",
                img_url:"http://p3.music.126.net/eKdKVXUd0x6YnOAf2BtNTw==/2942293117490979.jpg?param=120y120",
                album_url:"https://music.163.com/album?id=3152332",
            },
            {
                title:"偏执面",
                publish_time:"2016.03.06",
                img_url:"http://p3.music.126.net/ADtuKwIN1n64E_DX8-N4ew==/109951163188720331.jpg?param=120y120",
                album_url:"https://music.163.com/album?id=2878422",
            },
            {
                title:"灵魂尽头",
                publish_time:"2015.5.19",
                img_url:"http://p3.music.126.net/eKdKVXUd0x6YnOAf2BtNTw==/2942293117490979.jpg?param=120y120",
                album_url:"https://music.163.com/album?id=3152332",
            },
            {
                title:"偏执面",
                publish_time:"2015.2.3",
                img_url:"http://p3.music.126.net/ADtuKwIN1n64E_DX8-N4ew==/109951163188720331.jpg?param=120y120",
                album_url:"https://music.163.com/album?id=2878422",
            },
        ],	
        other_singers: [
            {
                pic_src:"http://p3.music.126.net/ADtuKwIN1n64E_DX8-N4ew==/109951163188720331.jpg?param=120y120",
                name:"陈霁璇",
            },
            {
                pic_src:"http://p3.music.126.net/ADtuKwIN1n64E_DX8-N4ew==/109951163188720331.jpg?param=120y120",
                name:"蔡寒均",
            },
            {
                pic_src:"http://p3.music.126.net/ADtuKwIN1n64E_DX8-N4ew==/109951163188720331.jpg?param=120y120",
                name:"胡兴球",
            },
            {
                pic_src:"http://p3.music.126.net/ADtuKwIN1n64E_DX8-N4ew==/109951163188720331.jpg?param=120y120",
                name:"梁静茹",
            },
            {
                pic_src:"http://p3.music.126.net/ADtuKwIN1n64E_DX8-N4ew==/109951163188720331.jpg?param=120y120",
                name:"王啸川",
            },
            {
                pic_src:"http://p3.music.126.net/ADtuKwIN1n64E_DX8-N4ew==/109951163188720331.jpg?param=120y120",
                name:"肖志强",
            },
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
        menu_active_index: '1',
	},
	methods:{
        fomatString:function (title,len) {
        	console.log(title,title.length)
            if(title.length>=len){

                return title.slice(0,len-1)+"..."
            }else{
                return title
            }
        },
        search: function () {
            console.log("搜索")
            window.location.href = "../searchResults/searchResults.html?" + `search_wd=${this.search_wd}`
        },
        login: function () {
            let that = this
            //TODO 发送请求后台如果密码正确
            let bigMusic = JSON.parse(localStorage.getItem("bigmusic")) || [];
            let res, user;
            for (let i = 0; i < bigMusic.length; i++) {
                if (bigMusic[i].account == this.login_form.account &&
                    bigMusic[i].password == this.login_form.password) {
                    res = "yes"
                    user = bigMusic[i]
                } else {
                    res = "no"
                }
            }

            if (res == "yes") {
                that.loginFormVisible = false;
                that.user = {
                    id: user.id,
                    name: user.account,
                    img_url: "http://s4.music.126.net/style/web2/img/default/default_avatar.jpg?param=50y50"
                };
                sessionStorage.setItem('bigmusic_user',JSON.stringify(user))
                that.login_form= {
                    account: '',
                    password: ''
                }
                registerFormVisible: false,
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
                let bigMusic = JSON.parse(localStorage.getItem("bigmusic")) || [];
                let user = {
                    id: bigMusic.length + 1,
                    account: that.register_form.account,
                    password: that.register_form.password,
                    verification_code: that.register_form.verification_code
                }
                bigMusic.push(user)
                //TODO 提交到后台
                localStorage.setItem('bigmusic', JSON.stringify(bigMusic));

                //成功
                that.registerFormVisible = false;
                that.register_form = {
                    account: "",
                    password: "",
                    password_repeat: "",
                    verification_code: ""
                }
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
                sessionStorage.removeItem("bigmusic_user")
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
        let that = this
        if(user=JSON.parse(sessionStorage.getItem("bigmusic_user"))){
            console.log(user)
            that.user = {
                id: user.id,
                name: user.account,
                img_url: "http://s4.music.126.net/style/web2/img/default/default_avatar.jpg?param=50y50"
            };
        }
    }
	

 //        },
 //        handleCurrentChange:function (val) {
 //            console.log(`当前页: ${val}`);
 //        },
 //        tabClick:function (currentTab) {
 //            let tabs=["单曲","专辑","歌单","歌词","用户"]
 //            this.current_tab=tabs[currentTab.index];

 //            switch (this.current_tab) {
 //                case "单曲":this.tab_num=this.songs.length; break;
 //                case "专辑":this.tab_num=this.albumlist.length;break;
 //                case "歌单":this.tab_num=this.playlists.length;break;
 //                case "歌词":this.tab_num=this.lyrics.length;break;
 //                case "用户":this.tab_num=this.users.length;break;
 //            }
 //        },
})
