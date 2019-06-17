
## 授权管理

### 授权请求
针对合作组织开放的接口都需要通过授权请求拿到access-token之后才能进行操作，授权请求成功获得$token之后，后续所有接口都需要在http请求头部带上`Access-Token: your-token`

#### url
`https://www.notr.tech/api/v2/organization/authorize`

#### 请求方式
POST

#### 请求头部
App-Key: appkey

#### 请求参数
无

#### 响应示例

```
{
  "code": 10000,
  "data": {
    "id": "5cfb244b44a728287682fe4b",
    "app_id": "5cdb7a4344a7286f5eb580a4",
    "created_at": 0,
    "updated_at": 0,
    "invalid": false,
    "invalid_at": 0,
    "user_id": "5cd597db44a7286f5eb5807d",
    "token": "orGd0HVLRP2BmybF4orFWQ==",
    "expired_in": 1560049099
  },
  "message": "success"
}

```

- 授权成功之后，需要保存token值，在之后所有接口操作中，需要设置http头部，Access-Token: token
- token有过期时间expired_in，为防止token失效，需要定期调用接口获取最新的token
