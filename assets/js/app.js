

    // Select all links with hashes
    $('.mainmenu-area a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function () {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });

const CODE_SUCCESS = 10000
const CODE_FAIL = 90000

$('#login').bind("click", function(){  
    username = $("#txt_username").val()
    password = $("#txt_password").val()
    signin(username, password)
}); 
function signin(username, password) {
    axios({
        url: "/api/v2/user/signin",
        method: "post",
        headers:{
        "Content-Type": "application/json"
        },
        data: {
            "username": username,
            "password": password
        }
    })
    .then(function (response) {
        data = response.data
        if(data != null && data.code == CODE_SUCCESS) {
            Cookies.set("uid", data.data.id,{ expires: 1 })
            Cookies.set("utk", data.data.access_key,{ expires: 1 })
            Cookies.set("uname", data.data.username,{ expires: 1 })
            Cookies.set("expired", data.data.expired_in,{ expires: 1 })
            window.location.href="/v2/dashboard.html"
        } else {
            alert("登录失败: "+ data.message)
        }
    })
    .catch(function (error) {
        alert("登录失败：" + error)
    });
}

$('#newuser').bind("click", function() {
    username = $("#signup_txt_username").val()
    password = $("#signup_txt_password").val()
    email = $("#signup_txt_email").val()

    signup(username, email, password)
})
function signup(username, email, password) {
    axios({
        url: "/api/v2/user/signup",
        method: "post",
        headers:{
        "Content-Type": "application/json"
        },
        data: {
            "username": username,
            "email": email,
            "password": password
        }
    })
    .then(function (response) {
        data = response.data
        if(data != null && data.code == CODE_SUCCESS) {
            alert("注册成功")
            tosignin()
        } else {
            alert("注册失败:"+data.message)
        }
    })
    .catch(function (error) {
        alert("注册失败:"+ error)
    });
}

$('#logout').bind("click", logout)
function logout() {
    Cookies.remove("uid")
    Cookies.remove("utk")
    Cookies.remove("uname")
    window.location.href="/"
}

$('#advice').bind("click", function(){  
    name = $("#advicer_name").val()
    email = $("#advicer_email").val()
    title = $("#advicer_title").val()
    content = $("#advicer_content").val()
    advice(name, email, title, content)
}); 
function advice(name, email, title, content) {
    axios({
        url: "/api/v2/user/advice",
        method: "post",
        headers:{
        "Content-Type": "application/json"
        },
        data: {
            "advicer_name": name,
            "advicer_email": email,
            "advicer_title": title,
            "advicer_content": content
        }
    })
    .then(function (response) {
        data = response.data
        if(data != null && data.code == CODE_SUCCESS) {
            alert("感谢您的来信，我们会尽快处理")
        } else {
            alert("提交信息失败:"+data.message)
        }
    })
    .catch(function (error) {
        alert("提交信息失败:"+ error)
    });
}

function islogin() {
    if (Cookies.get("uid") == undefined && Cookies.get("utk") == undefined)
        return false
    return true
}

$('#signpannel').bind("click", tosignin); 
function tosignin() {
    uppannel = document.getElementById("signup_pannel")
    uppannel.style.display = "none"
    inpannel = document.getElementById("signin_pannel")
    inpannel.style.display = "block"
}

$('#signuppannel').bind("click", tosignup); 
function tosignup() {
    inpannel = document.getElementById("signin_pannel")
    inpannel.style.display="none"
    uppannel = document.getElementById("signup_pannel")
    uppannel.style.display = "block"
}

$('#btnAddCName').bind("click", function() {
    cname = $("#cnameval").val()
    token = Cookies.get("utk")
    addCName(token, cname)
});
function addCName(token, name) {
    axios({
        url: "/api/v2/domain/cname",
        method: "post",
        headers:{
        "Content-Type": "application/json",
        "Access-Token": token,
        },
        data: {
            "cnames": [name]
        }
    })
    .then(function (response) {
        data = response.data
        if(data != null && data.code == CODE_SUCCESS) {
            alert("添加成功")
            getCNameList()
        } else {
            alert("添加域名信息失败："+data.message)
        }
        $('#btnCancel').click()
    })
    .catch(function (error) {
        alert("提交失败:"+ error)
        $('#btnCancel').click()
    });
}

function delCName(name) {
    axios({
        url: "/api/v2/domain/cname/delete/"+name,
        method: "post",
        headers:{
        "Content-Type": "application/json",
        "Access-Token":  Cookies.get("utk"),
        }
    })
    .then(function (response) {
        data = response.data
        if(data != null && data.code == CODE_SUCCESS) {
            alert("删除成功")
            getCNameList()
        } else {
            alert("删除域名失败:"+data.message)
        }
    })
    .catch(function (error) {
        alert("提交失败:"+ error)
    });
}

function getCNameList() {
    axios({
        url: "/api/v2/domain/cname/list",
        method: "post",
        headers:{
        "Content-Type": "application/json",
        "Access-Token": Cookies.get("utk"),
        }
    })
    .then(function (response) {
        data = response.data
        if(data != null && data.code == CODE_SUCCESS && data.data != null) {
            $("table tbody tr").remove()
            if (data.data.cname != null) {
                for(i = 0; i < data.data.cname.length; i++) {
                    $("table tbody").append('<tr><td>'+(i+1)+'</td><td>'+data.data.cname[i]+'</td><td>'+Cookies.get("uname")+'.notr.tech</td><td><a href="#delete" id="'+data.data.cname[i]+'" onClick="delCName(this.id)">删除</a></td></tr>')
                }
            }
        } else {
            alert("获取域名列表失败："+data.message)
        }
    })
    .catch(function (error) {
        alert("获取域名列表失败:"+ error)
    });
}

function refreshToken() {
    axios({
        url: "/api/v2/user/token/refresh",
        method: "post",
        headers:{
        "Content-Type": "application/json",
        "Access-Token":  Cookies.get("utk"),
        }
    })
    .then(function (response) {
        data = response.data
        if(data != null && data.code == CODE_SUCCESS) {
            alert("刷新授权码成功")
            Cookies.set("uid", data.data.id,{ expires: 1 })
            Cookies.set("utk", data.data.access_key,{ expires: 1 })
            Cookies.set("uname", data.data.username,{ expires: 1 })
            Cookies.set("expired", data.data.expired_in,{ expires: 1 })
            window.location.href="/v2/dashboard.html"
        } else {
           alert("刷新授权码失败:", data.message)
        }
    })
    .catch(function (error) {
        alert("提交失败:"+ error)
    });
}

$("#btnForgotPassword").bind("click", function() {
    email = $("#txtEmail").val()
    forgotPassword(email)
})

function forgotPassword(email) {
    axios({
        url: "/api/v2/user/password/forgot",
        method: "post",
        headers:{
            "Content-Type": "application/json"
        },
        data: {
            "email":email
        }
    })
    .then(function (response) {
        data = response.data
        if(data != null && data.code == CODE_SUCCESS && data.data != null) {
            document.getElementById("hint").innerHTML = "申请成功，请注意查收邮件"
        } else {
            alert("修改密码失败"+data.message)
        }
    })
    .catch(function (error) {
        alert("修改密码失败:"+ error)
    });
}

$("#btnNewPassword").bind("click", function() {
    token = getQueryString("token")
    newpassword = $("#txtNewPassword").val()
    resetPassword(token, newpassword)
})

function resetPassword(token, new_password) {
    axios({
        url: "/api/v2/user/password/reset",
        method: "post",
        headers:{
            "Content-Type": "application/json"
        },
        data: {
            "token":token,
            "new_password": new_password
        }
    })
    .then(function (response) {
        data = response.data
        if(data != null && data.code == CODE_SUCCESS && data.data != null) {
            alert("修改密码成功")
            window.location.href="/"
        } else {
            alert("修改密码失败"+data.message)
        }
    })
    .catch(function (error) {
        alert("修改密码失败:"+ error)
    });
}

function getReverse(username, email, password) {
    axios({
        url: "/api/v2/user/reverse",
        method: "post",
        headers:{
            "Content-Type": "application/json",
            "Access-Token": Cookies.get("utk")
        },
        data: {
           
        }
    })
    .then(function (response) {
        data = response.data
        console.log(data)
    })
    .catch(function (error) {
        alert("获取信息失败:"+ error)
    });
}

function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);  //获取url中"?"符后的字符串并正则匹配
    var context = "";
    if (r != null)
        context = r[2];
    reg = null;
    r = null;
    return context == null || context == "" || context == "undefined" ? "" : context;
}