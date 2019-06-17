api = "https://www.notr.tech/api/v2"
appKey = "n8lAnTuBSjiDK+BgFtyFAw=="
code_success = 10000

verify = function(body) {
    if (body.code != code_success) {
        return false
    }

    return true
}

// 登录
ajaxLogin = function(ctx, onSuccess, onFail) {
    axios({
        url: api + "/user/signin",
        method: "post",
        headers:{
        "Content-Type": "application/json"
        },
        data: {
            "username": ctx.username,
            "password": ctx.password
        }
    })
    .then(function (response) {
        if (!verify(response.data)) {
            onFail(response.data.code, response.data.message)
            return
        }

        onSuccess(response.data.data)
    })
    .catch(function (error) {
        onFail(-1, error)
    });
}

// 注册
ajaxRegister = function(ctx, onSuccess, onFail) {
    axios({
        url: api + "/user/signup",
        method: "post",
        headers:{
            "Content-Type": "application/json",
            "App-Key": appKey
        },
        data: {
            "username": ctx.username,
            "email": ctx.email,
            "password": ctx.password
        }
    })
    .then(function (response) {
        if (!verify(response.data)) {
            onFail(response.data.code, response.data.message)
            return
        }
        onSuccess(response.data.data)
    })
    .catch(function (error) {
        onFail(-1, error)
    })
}

// 忘记密码
ajaxForgotPassword = function(ctx, onSuccess, onFail) {
    axios({
        url: api+"/user/password/forgot",
        method: "post",
        headers:{
            "Content-Type": "application/json"
        },
        data: {
            "email":ctx.email
        }
    })
    .then(function (response) {
        if (!verify(response.data)) {
            onFail(response.data.code, response.data.message)
            return
        }
        onSuccess(response.data.data)
    })
    .catch(function (error) {
        onFail(-1, error)
    });
}

// 重置密码
ajaxResetPassword = function(ctx, onSuccess, onFail) {
    axios({
        url: api+"/user/password/reset",
        method: "post",
        headers:{
            "Content-Type": "application/json"
        },
        data: {
            "token":ctx.token,
            "new_password": ctx.new_password
        }
    })
    .then(function (response) {
        if (!verify(response.data)) {
            onFail(response.data.code, response.data.message)
            return
        }
        onSuccess(response.data.data)
    })
    .catch(function (error) {
        onFail(-1, error)
    });
}

// 邮箱验证
ajaxEmailVerify = function(token, onSuccess, onFail) {
    axios({
        url: api+"/user/email/verify",
        method: "post",
        headers:{
            "Content-Type": "application/json",
            "AppKey": appKey,
        },
        data:{
            "token": token
        }
    })
    .then(function (response) {
        if (!verify(response.data)) {
            onFail(response.data.code, response.data.message)
            return
        }
        onSuccess(response.data.data)
    })
    .catch(function (error) {
        onFail(-1, error)
    });
}

// 获取cname列表
ajaxCnames = function(accesskey, onSuccess, onFail) {
    axios({
        url: api+"/domain/cname/list",
        method: "post",
        headers:{
            "Content-Type": "application/json",
            "Access-Token": accesskey,
        }
    })
    .then(function (response) {
        if (!verify(response.data)) {
            onFail(response.data.code, response.data.message)
            return
        }
        onSuccess(response.data.data)
    })
    .catch(function (error) {
        onFail(-1, error)
    });
}

// 添加域名
ajaxAddCnames = function(ctx, accesskey, onSuccess, onFail) {
    axios({
        url: api+"/domain/cname",
        method: "post",
        headers:{
            "Content-Type": "application/json",
            "Access-Token": accesskey,
        },
        data: {
            "cnames": ctx.cnames
        },
    })
    .then(function (response) {
        if (!verify(response.data)) {
            onFail(response.data.code, response.data.message)
            return
        }

        onSuccess(response.data.data)
    })
    .catch(function (error) {
        onFail(-1, error)
    });
}

// 删除域名
ajaxDelCname = function(name, accesskey, onSuccess, onFail) {
    axios({
        url: api + "/domain/cname/delete/"+name,
        method: "post",
        headers:{
            "Content-Type": "application/json",
            "Access-Token":  accesskey,
        }
    })
    .then(function (response) {
        if (!verify(response.data)) {
            onFail(response.data.code, response.data.message)
            return
        }

        onSuccess(response.data.data)
    })
    .catch(function (error) {
        onFail(-1, error)
    });
}

// 更新token
ajaxRefreshToken = function(accesskey, onSuccess, onFail) {
    axios({
        url: api + "/user/token/refresh",
        method: "post",
        headers:{
            "Content-Type": "application/json",
            "Access-Token":  accesskey,
        }
    })
    .then(function (response) {
        if (!verify(response.data)) {
            onFail(response.data.code, response.data.message)
            return
        }
        onSuccess(response.data.data)
    })
    .catch(function (error) {
        onFail(-1, error)
    });
}

// 获取app列表
ajaxGetAppList = function(accessKey, onSuccess, onFail) {
    axios({
        url: api + "/app/list",
        method: "get",
        headers:{
            "Content-Type": "application/json",
            "Access-Token":  accessKey
        }
    })
    .then(function (response) {
        if (!verify(response.data)) {
            onFail(response.data.code, response.data.message)
            return
        }
        onSuccess(response.data.data)
    })
    .catch(function (error) {
        onFail(-1, error)
    });
}

// 创建app
ajaxCreateApp = function(ctx, accessKey, onSuccess, onFail) {
    axios({
        url: api + "/app/create",
        method: "post",
        headers:{
            "Content-Type": "application/json",
            "Access-Token": accessKey
        },
        data: {
            "appname":  ctx.appname,
            "comment": ctx.comment
        }
    })
    .then(function (response) {
        console.log(response.data)
        if (!verify(response.data)) {
            onFail(response.data.code, response.data.message)
            return
        }
        onSuccess(response.data.data)
    })
    .catch(function (error) {
        onFail(-1, error)
    });
}

// 获取app用户列表
ajaxGetAppUserlist = function(appId, onSuccess, onFail) {
    
}

// 为app添加用户
ajaxCreateAppUser = function(ctx, accesskey, onSuccess, onFail) {
    axios({
        url: api + "/user/new",
        method: "post",
        headers:{
            "Content-Type": "application/json",
            "Access-Token": accesskey
        },
        data: {
            "app_id":  ctx.app_id,
            "rate": ctx.rate,
            "username": ctx.username
        }
    })
    .then(function (response) {
        if (!verify(response.data)) {
            onFail(response.data.code, response.data.message)
            return
        }
        onSuccess(response.data.data)
    })
    .catch(function (error) {
        onFail(-1, error)
    });
}


ajaxGetUserCreated = function(accesskey, onSuccess, onFail) {
    axios({
        url: api + "/user/created",
        method: "get",
        headers:{
            "Content-Type": "application/json",
            "Access-Token": accesskey
        }
    })
    .then(function (response) {
        if (!verify(response.data)) {
            onFail(response.data.code, response.data.message)
            return
        }
        onSuccess(response.data.data)
    })
    .catch(function (error) {
        onFail(-1, error)
    });
}

ajaxGetAppLicense = function(accesskey, appid, onSuccess, onFail) {
    axios({
        url: api + "/license/app/"+appid,
        method: "get",
        headers:{
            "Content-Type": "application/json",
            "Access-Token": accesskey
        }
    })
    .then(function (response) {
        if (!verify(response.data)) {
            onFail(response.data.code, response.data.message)
            return
        }
        onSuccess(response.data.data)
    })
    .catch(function (error) {
        onFail(-1, error)
    });
}