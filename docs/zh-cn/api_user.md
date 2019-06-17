
## 用户管理

### 添加用户
#### url
`https://www.notr.tech/api/v2/organization/user -H "Access-Token: 0/fo2ynxTiSfJ55QrIGUOA==" --insecure -d '{"username": "ajkefi", "rate": 100}'`

#### 请求方式
POST

#### 请求头部
Access-Token: $token

#### 请求参数
```
{
    "username": $username,
    "rate": $rate
}
```

|   名称   |  类型  |  含义  |
| :-----: | :----: | :----: |
|  username  | string  | 用户名 |
|  rate | int |限速(mbps) |


#### 响应示例
`curl https://www.notr.tech/api/v2/organization/user -H "Access-Token: 0/fo2ynxTiSfJ5uiQrIGUOA==" --insecure -d '{"username": "ajkefi", "rate": 100}'`

```

{
  "code": 10000,
  "data": {
    "id": "5cfb2869328287682fe4d",
    "app_id": "5cdb7a4333a7f5eb580a4",
    "created_at": 1559963753,
    "updated_at": 1559963753,
    "invalid": false,
    "invalid_at": 0,
    "type": 30,
    "username": "ajkefi1",
    "access_key": "q9+8IlZGYOhAjngDFIQ==",
    "expired_in": 0,
    "email": "",
    "email_verified": false,
    "mobile": "",
    "mobile_verified": false,
    "approved": false,
    "locked": false,
    "blacklist": false,
    "rate": 100
  },
  "message": "success"
}

```

|   名称   |  说明  |
| :-----: | :----: | 
| id | 用户id | 
| app_id | 应用id |
| username | 用户名 |
| rate | 限速大小 |
| access_key | 用户授权码 |

### 删除用户
#### url
`https://www.notr.tech/api/v2/organization/user/{userid}`

#### 请求方式
DELETE

#### 请求头部
Access-Token: $token

#### 请求参数
无

#### 响应示例

`curl https://www.notr.tech/api/v2/organization/user/5cfb2869328287682fe4d -H "Access-Token: o2ynxTQrIGUOA==" -X "DELETE" --insecure`
```

{
  "code": 10000,
  "data": null,
  "message": "success"
}

```

### 获取某个用户信息
#### url
`https://www.notr.tech/api/v2/organization/user/{userid}`

#### 请求方式
GET

#### 请求头部
Access-Token: $token

#### 请求参数
无

#### 响应示例
`curl https://www.notr.tech/api/v2/organization/user/acfa894233a7282395c6dce8 -H "Access-Token: 0/fo2ynxTiSfJ55QrIGUOA==`

```

{
  "code": 10000,
  "data": {
    "id": "5cfb285a33a728287682fe4c",
    "app_id": "5cdb7a4333a7286f5eb580a4",
    "created_at": 1559963738,
    "updated_at": 1559963738,
    "invalid": false,
    "invalid_at": 0,
    "type": 30,
    "username": "ajkefi",
    "access_key": "dwsF9b8ZQF2BUAldVTnvYg==",
    "expired_in": 0,
    "email": "",
    "email_verified": false,
    "mobile": "",
    "mobile_verified": false,
    "approved": false,
    "locked": false,
    "blacklist": false,
    "rate": 100
  },
  "message": "success"
}

```

### 获取应用用户列表
#### url
`https://www.notr.tech/api/v2/organization/users`

#### 请求方式
GET

#### 请求头部
Access-Token: $token

#### 请求参数
无

#### 响应示例
`https://www.notr.tech/api/v2/organization/users -H "Access-Token: 0/fo2ynxTiSfJ55QrIGUOA==" --insecure`
```

{
  "code": 10000,
  "data": [
    {
      "id": "5cdb993333a7286f5eb580a5",
      "app_id": "5cdb7a4333a7286f5eb580a4",
      "created_at": 1557895475,
      "updated_at": 1557895475,
      "invalid": false,
      "invalid_at": 0,
      "type": 30,
      "username": "fsdfsdf",
      "access_key": "aJZF5d2aSBFAaW/A==",
      "expired_in": 0,
      "email": "",
      "email_verified": false,
      "mobile": "",
      "mobile_verified": false,
      "approved": false,
      "locked": false,
      "blacklist": false,
      "rate": 1
    },
    {
      "id": "5cdbc4c433a7280d2ae42a78",
      "app_id": "5cdb7a4333a7286f5eb580a4",
      "created_at": 1557906628,
      "updated_at": 1557906628,
      "invalid": false,
      "invalid_at": 0,
      "type": 30,
      "username": "hahaha",
      "access_key": "Qo6yuGBRRseaupV==",
      "expired_in": 0,
      "email": "",
      "email_verified": false,
      "mobile": "",
      "mobile_verified": false,
      "approved": false,
      "locked": false,
      "blacklist": false,
      "rate": 10
    }
  ],
  "message": "success"
}

```
关键字段说明

|   名称   |  含义  |
| :-----: | :----: | 
| id | 用户id |
| app_id | 应用id |
| access_key | 客户端授权码 |
| rate | 客户端限速(mbps) |
