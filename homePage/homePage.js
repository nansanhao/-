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
        let type=GetQueryString("type");
        let id=GetQueryString("id")
        if(type=="mine"){
            //获得我的主页
            let user=JSON.parse(sessionStorage.getItem("bigmusic_user"));
            console.log(user)
            this.user.name=user.account;
            this.user.id=user.id;
        }else {
            //获得其他人的主页
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