
## 域名管理

### 为用户添加域名
#### url
`https://www.notr.tech/api/v2/organization/domain`

#### 请求方式
POST

#### 请求头部
Access-Token: $token
#### 请求参数
{
    "user_id": 用户id,
    "cname": 自定义域名
}
#### 响应示例
`curl https://www.notr.tech/api/v2/organization/domain -H "Access-Token: 0/fo2ynxTiSfJ55QrIGUOA=="  --insecure -d '{"user_id":"5cfa887933a7282395c6dce7", "cname": "abc.abc.ccb"}'`

```
{
  "code": 10000,
  "data": {
    "id": "5cfabb1d33a72826080ab33a",
    "app_id": "5cdb7a4333a7286f5eb580a4",
    "created_at": 1559935773,
    "updated_at": 1559935773,
    "invalid": false,
    "invalid_at": 0,
    "name": "",
    "cname": [
      "abc.abc.com",
      "abc.abc.cc",
      "abc.abc.ccb"
    ],
    "user_id": "5cfa887933a7282395c6dce7"
  },
  "message": "success"
}
```

### 删除用户域名
#### url
`https://www.notr.tech/api/v2/organization/domain`

#### 请求方式
DELETE

#### 请求头部
Access-Token: $token

#### 请求参数

```
{
    "user_id": 用户id,
    "cname": 用户自定义的域名
}
```

#### 响应示例
`curl https://www.notr.tech/api/v2/organization/domain -H "Access-Token: 0/fo2ynxTiSfJ55QrIGUOA=="  --insecure -d '{"user_id":"5cfa887933a7282395c6dce7", "cname": "abc.abc.ccb"}' -X "DELETE"`

```
{
  "code": 10000,
  "data": {
    "id": "5cfabb1d33a72826080ab33a",
    "app_id": "5cdb7a4333a7286f5eb580a4",
    "created_at": 1559935773,
    "updated_at": 1559935773,
    "invalid": false,
    "invalid_at": 0,
    "name": "",
    "cname": [
      "abc.abc.com",
      "abc.abc.cc"
    ],
    "user_id": "5cfa887933a7282395c6dce7"
  },
  "message": "success"
}
```

返回删除成功之后用户自定义域名信息

### 获取用户域名信息
#### url
`https://www.notr.tech/api/v2/organization/domain/{userid}`

#### 请求方式
GET

#### 请求头部
Access-Token: $token

#### 请求参数
无

#### 响应示例
`curl https://www.notr.tech/api/v2/organization/domain/5cfa887933a7282395c6dce7 -H "Access-Token: 0/fo2ynxTiSfJ55QrIGUOA==" --insecure -X "GET"|jq`

```
{
  "code": 10000,
  "data": {
    "id": "5cfabb1d33a72826080ab33a",
    "app_id": "5cdb7a4333a7286f5eb580a4",
    "created_at": 1559935773,
    "updated_at": 1559935773,
    "invalid": false,
    "invalid_at": 0,
    "name": "",
    "cname": [
      "abc.abc.com",
      "abc.abc.cc"
    ],
    "user_id": "5cfa887933a7282395c6dce7"
  },
  "message": "success"
}

```
cname为用户自定义的域名
