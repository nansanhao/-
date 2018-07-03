new Vue({
    el: '#app',
    data: {
        // form
        user:{
            id:"1",
            name:"南三号",
            img_url:"http://s4.music.126.net/style/web2/img/default/default_avatar.jpg?param=50y50",
        },
        loginFormVisible: false,
        formLabelWidth: '40px',
        search_wd:"",
        login_form: {
            account: '',
            password: '',
        },
        registerFormVisible: false,
        register_form:{
            account:"",
            password:"",
            password_repeat:"",
            verification_code:""
        },
        // nav
        menu_active_index: '1',
        carousel_items: [
            {
                image_url: "http://p1.music.126.net/Xup_vNV7Nt_x-tkA_rt9Kg==/109951163386184344.jpg",
                link_url: ""
            },
            {
                image_url: "http://p1.music.126.net/3uB-oiMF9kijh08H3V7h0g==/109951163388093787.jpg",
                link_url: ""
            },
            {
                image_url: "http://p1.music.126.net/kCpE47CGXd79Osh-GvWwzQ==/109951163377208783.jpg",
                link_url: ""
            },
            {
                image_url: "http://p1.music.126.net/w7iaYYRtXuFJpOknc--oUg==/109951163376770114.jpg",
                link_url: ""
            },
            {
                image_url:"http://p1.music.126.net/GOtYkordqsMIfkig0nrLVg==/109951163383038987.jpg",
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
        ],
        hot_albumlist:[
            {
                title:"EVERYTHING IS LOVE",
                singer:"The Carters / Beyoncé / Jay-Z",
                img_url:"http://p3.music.126.net/WcVJXehoHv1_b0GyWFCjmA==/109951163365318229.jpg?param=100y100"
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
            }
        ],
        hot_singer:[
            {
                name:"张惠妹aMEI",
                info:"台湾歌手张惠妹",
                image_url:"http://p1.music.126.net/p9U80ex1B1ciPFa125xV5A==/5931865232210340.jpg?param=62y62"
            },
            {
                name:"Fine乐团",
                info:"独立音乐人",
                image_url:"http://p1.music.126.net/1EN_iqQWU_E3DafzEOh3cA==/3302932937408956.jpg?param=62y62"
            },
            {
                name:"萬曉利",
                info:"民谣歌手、中国现代民谣的代表人物之一",
                image_url:"http://p1.music.126.net/ZuktZvjcxpYBjcWC3gmbPg==/19027048718765608.jpg?param=62y62"
            },
            {
                name:"音乐人赵雷",
                info:"民谣歌手",
                image_url:"http://p1.music.126.net/v_zYgE9kmAwVGWV2c8hFxA==/7943971513291094.jpg?param=62y62"
            }
        ]

    },
    methods:{
        fomatString:function (title,len) {
            if(title.length>=len){
                return title.slice(0,len-1)+"..."
            }else{
                return title
            }

        },
        search:function () {
            console.log("搜索")
            window.location.href="../searchResults/searchResults.html?"+`search_wd=${this.search_wd}`
        },
        login:function () {
            let that=this
            //TODO 发送请求后台如果密码正确
            let res="ok";
            if(res=="ok"){
                that.loginFormVisible=false;
                this.user={
                    id:"1",
                    name:"南三号",
                    img_url:"http://s4.music.126.net/style/web2/img/default/default_avatar.jpg?param=50y50"
                };
                setTimeout(function () {
                    that.$message({
                        message: '登录成功！',
                        type: 'success',
                        duration:2000
                    });
                },100)
            }else{
                setTimeout(function () {
                    that.$message({
                        message: '账户或密码错误！请重新输入。',
                        type: 'error',
                        duration:2000
                    });
                },100)
            }

        },
        register:function () {
            let that=this
            if(that.register_form.password==that.register_form.password_repeat){
                let user={
                    account:that.register_form.account,
                    password:that.register_form.password,
                    verification_code:that.register_form.verification_code
                }
                //TODO 提交到后台

                //成功
                that.registerFormVisible=false;
                setTimeout(function () {
                    that.$message({
                        message: '注册成功，去登录吧！',
                        type: 'success',
                        duration:2000
                    });
                },100)
            }else {
                that.$message({
                    message: '错误！前后两次密码输入不同。',
                    type: 'error',
                    duration:2000
                });
            }



        },
        toRegisterORLogin:function (type) {
            let that=this;
            if(type=="Login"){
                that.registerFormVisible=false;
                setTimeout(function () {
                    that.loginFormVisible=true;
                },200)
            }
            else if(type=="Register"){
                that.loginFormVisible=false;
                setTimeout(function () {
                    that.registerFormVisible=true;
                },200)
            }
        },
        handleCommand:function (command) {
            if(command=="logout"){
                this.user=null;
                this.$message({
                    message: '登出成功！',
                    type: 'success',
                    duration:1000
                });
            }
            if(command=="homepage"){
                window.location.href="../homepage/homepage.html?user_id="+this.user.id
            }

        }
    }
})

