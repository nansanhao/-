new Vue({
    el:"#app",
    data:{
        //nav
        menu_active_index:1,

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
        user:{
            id:"1",
            name:"南三号",
            img_url:"http://s4.music.126.net/style/web2/img/default/default_avatar.jpg?param=50y50",
            likes_count:15,
            listen_count:26,
            playlist_count:4,
            location:"湖北省 - 武汉市"
        },
        //page
        songs_count:56,
        songs:[]
    },
    methods:{
        search:function () {
            console.log("搜索")
            window.location.href="../searchResults/searchResults.html?"+`search_wd=${this.search_wd}`
        },
        login:function () {
            //TODO 发送请求后台如果密码正确
            this.loginFormVisible=false;
        },
        register:function () {
            //TODO 提交到后台
            let that=this
            this.registerFormVisible=false;
            setTimeout(function () {
                that.$message({
                    message: '注册成功，去登录吧！',
                    type: 'success',
                    duration:2000
                });
            },100)


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
                window.location.href="../index/index.html"
            }
            if(command=="homepage"){
                window.location.href="../homepage/homepage.html?user_id="+this.user.id
            }

        }
    },
    created:function () {
        let type=GetQueryString("type");
        if(type=="mine"){
            //获得我的主页
        }else {
            //获得其他人的主页
        }
    }
})