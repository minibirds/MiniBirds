# Introduction

## Entry Project Mini Birds API  
작성자 : huewilliams  
API 개요 : SNS 구현 프로젝트인 Mini Bird에 사용되는 API들을 정리한 문서 입니다.  
![Mini Birds logo](./images/Logo.png)

# Authenticate

## Sign up

```json
[
  {
       "result": {
            "intro": "자기소개가 없습니다. 자신을 다른 사람들에게 소개해보세요",
            "id": "사용자의 SNS 계정 id",
            "password": "사용자의 SNS 계정 password",
            "nickname": "사용자의 SNS nickname"
       }
  }
]
```

유저 회원가입. 닉네임, 아이디, 비밀번호로 회원가입한다.  
회원가입 후 바로 토큰을 발급해주지 않기 때문에 회원가입 이후 로그인 해야한다.

### HTTP Request

`POST http://example.com/auth/signup`

### Request Body

Parameter | Type | Description
--------- | ------- | -----------
nickname | varchar(20) | duplicate OK, 사용자가 상시적으로 변경 가능
id | varchar(20) | unique, 회원 가입 이후 변경 불가
password | varchar(30) | 사용자가 상시적으로 변경 가능

### Status Code

Status | Description
------ | -----------
200 | DB에 새로운 사용자가 추가되었습니다.
405 | 아이디가 중복된 사용자가 존재합니다.

## Sign in
```json
[
  {
    "id": "사용자의 고유 아이디",
    "nickname": "사용자의 닉네임",
    "Sns_id": "사용자의 sns 아이디",
    "password": "계정의 패스워드",
    "intro": "사용자의 한줄소개"
  }
]

```

사용자의 아이디와 비밀번호를 통해 로그인한다.  
JWT를 발급받아 요청 객체의 쿠키에 보관한다.  
로그인 이후의 요청은 쿠키의 JWT와 함께 전달된다.

### HTTP Request

`GET http://example.com/auth/signIn/:<id>/:<password>`

### URL Parameters

Parameter | TYPE | Description
--------- | ---- | -----------
id | varchar(20) | 사용자의 고유 아이디(계정 id)
password | varchar(30) | 사용자 계정의 비밀번호

### Status Code

Status | Description
------ | -----------
200 | 로그인에 성공하여 JWT 토큰을 발급받았습니다.
401 | JWT의 만료시간이 지났습니다.
401 | 유효하지 않은 JWT 입니다.(secret key 오류) 

# Edit  

## edit  
```json
[
  {
    "id": "사용자의 고유 아이디",
    "nickname": "사용자 닉네임",
    "Sns_id": "사용자 sns 아이디",
    "password": "계정 패스워드",
    "intro": "사용자 한줄소개"
  }
]
```

사용자의 아이디와 비밀번호를 통해 사용자 정보를 수정한다.

### HTTP Request

`PUT http://example.com/edit/:<id>`

### URL Parameters
Parameter | Type | Description
--------- | ---- | -----------
id | varchar(20) | 토큰과의 비교를 위해 필요한 정보(사용자 SNS id)

### Request Body

Parameter | Type | Description
--------- | ---- | -----------
nickname | varchar(20) | 사용자의 변경할 닉네임 
password | varchar(30) | 사용자의 변경할 비밀번호
intro | varchar(30) | 사용자의 변경할 한줄소개

### Status Code

Status | Description
------ | -----------
200 | 사용자의 정보를 수정했습니다.
401 | 토큰 만료/ 검증되지 않은 토큰
403 | 다른 사람의 정보는 수정할 수 없습니다
404 | 아이디에 해당하는 사용자를 찾을 수 없습니다

# twit  

## post twit
```json
[
  {
    "id": "(게시물 고유의 id)",
    "userId": "(게시물 작성자의 id)",
    "content": "(게시물의 텍스트 내용)",
    "img": "(게시물의 이미지가 저장된 경로)",
    "created_At": "(게시물이 작성된 날짜)"
  }
]
```

사용자의 id로 식별하여 트윗을 게시한다.

### HTTP Request

`POST http://example.com/twit/`

### Request Body

Parameter | Type | Description
--------- | ------- | -----------
content | varchar(1000) | 게시물의 텍스트 내용(1000자 제한)
img | varchar(500) | 게시물의 이미지가 저장된 경로
id | varchar(20) | 게시물을 업로드한 사용자의 id 정보  

### Status Code

Status | Description
------ | -----------
201 | 트윗을 게시했습니다.
404 | 아이디에 등록된 사용자가 존재하지 않습니다.

<aside class="notice">
img는 업로드 시 AWS S3의 uploads 폴더에 보관되며 DB에는 이미지가 저장된 경로가 varchar(500)으로 저장되어 있다.
</aside>

## post img

```json
{
  "img": "(이미지가 저장된 경로)"
}
```

이미지를 업로드 하면 서버의 로컬 디스크에 이미지를 저장한다.  
트윗 업로드에 사용되는 이미지 경로를 반환한다.

### HTTP Request

`POST http://example.com/twit/img`

### Request Body

Parameter | Type | Description
--------- | ------- | -----------
img | multipart-formdata | 게시물의 이미지 내용(1장 제한)

### Status Code

Status | Description
------ | -----------
201 | 이미지를 업로드했습니다.

## delete  
```json
{
 "status": 200,
 "message": "게시물을 삭제했습니다."
}
```

사용자의 아이디와 비밀번호를 통해 게시물을 삭제한다.

### HTTP Request

`DELETE http://example.com/twit/:userId/:postId`

### URL Parameters
Parameter | Type | Description
--------- | ---- | -----------
postId | int | 삭제할 게시물의 고유 id
userId | varchar(20) | 삭제할 게시물 작성자의 고유 id

### Status Code

Status | Description
------ | -----------
200 | 게시물을 삭제했습니다.
404 | 삭제하려는 게시물을 찾을 수 없습니다

# mention  

## get

```json
[
  {
    "mentId": "(멘션 고유의 id)",
    "userId": "(멘션 작성자의 id)",
    "postId": "(멘션이 소속된 게시물의 id)",
    "content": "(멘션의 텍스트 내용)"
  }
]
```

게시물의 id로 식별하여 게시물에 달린 모든 멘션을 가져온다.  
멘션이 속한 게시물의 id, 멘션을 작성한 작성자의 id도 반환한다.  

### HTTP Request

`POST http://example.com/ment/:<postId>`

### Request Body

Parameter | Type | Description
--------- | ------- | -----------
postId | int | 멘션이 소속된 게시물의 id  

### Status Code

Status | Description
------ | -----------
201 | 멘션을 등록했습니다.
404 | 아이디에 등록된 사용자가 존재하지 않습니다.

## post

```json
[
  {
    "id": "(게시물 고유의 id)",
    "user_id": "(게시물 작성자의 id)",
    "content": "(게시물의 텍스트 내용)",
    "img": "(게시물 이미지가 저장된 경로)"
  }
]
```

사용자의 id로 식별하여 트윗을 게시한다.

### HTTP Request

`POST http://example.com/ment/:<id>`

### Request Body

Parameter | Type | Description
--------- | ------- | -----------
content | varchar(1000) | 게시물의 텍스트 내용(1000자 제한)
img | multipart-formdata | 게시물의 이미지 내용(1장 제한)
id | int | 멘션을 업로드한 사용자의 id 정보  

### Status Code

Status | Description
------ | -----------
200 | 트윗을 게시했습니다.
404 | 아이디에 등록된 사용자가 존재하지 않습니다.

## delete  

```json
{
   "status": 200,
   "message": "멘션을 삭제했습니다."
}
```

### HTTP Request

`DELETE http://example.com/ment/:<id>/:<user_id>`

### URL Parameters
Parameter | Type | Description
--------- | ---- | -----------
id | int | 삭제할 멘션의 고유 id
user_id | int | 삭제할 게시물 작성자의 고유 id

### Status Code

Status | Description
------ | -----------
200 | 멘션을 삭제했습니다.
404 | 사용자가 일치하지 않습니다.
  
# following  

## get 
```json
[
  {
    "num": "(현재 팔로잉 한 사람의 수)"
  },
  {
    "id": "(팔로잉 id)",
    "img":"(팔로잉 한 사람의 프로필 이미지 저장 경로)",
    "intro":"(팔로잉 한 사람의 한줄소개)"  
  }
]
```

### HTTP Request

`GET http://example.com/following/:<id>`

### URL Parameters
Parameter | Type | Description
--------- | ---- | -----------
id | int | 리스트를 가져올 유저의 고유 id

### Status Code

Status | Description
------ | -----------
200 | 팔로잉 리스트를 가져왔습니다.
404 | 사용자 정보가 존재하지 않습니다.  

## post  
```json
[
  {
    "num": "현재 팔로잉 한 사람의 수",
    "nick": "(지금 팔로우 한 사람의 nick)" 
  }
]
```

### HTTP Request
`POST http://example.com/following`  

### Request Body

Parameter | Type | Description
--------- | ------- | -----------
userId | int | 팔로우을 한 사용자의 고유 id  
targetId | int | 팔로우를 당한 유저의 고유 id  


### Status Code
Status | Description
------ | -----------
201 | 유저를 팔로잉 했습니다.
404 | 사용자 정보가 존재하지 않습니다.  
409 | 이미 팔로우 중인 유저입니다.

## delete  
```json
{
    "message": "팔로우를 취소 했습니다"
}
```

### HTTP Request
`DELETE http://example.com/following/:<userId>/:<targetId>`

### Status Code
Status | Description
------ | -----------
200 | 팔로잉을 취소 했습니다.
401 | 토큰 만료/ 인증되지 않은 토큰
404 | 사용자 정보가 존재하지 않습니다.  

# follower  

## get  
```json
[
  {
    "status": 200,
    "message": "팔로우 리스트를 가져왔습니다",
    "num": "(현재 팔로우의 수)"
  },
  {
    "id": "(팔로우 id)",
    "img":"(팔로우 한 사람의 프로필 이미지 저장 경로)",
    "intro":"(팔로우 한 사람의 한줄소개)"  
  }
]
```
### HTTP Request

`GET http://example.com/follower/:<id>`

### URL Parameters
Parameter | Type | Description
--------- | ---- | -----------
id | int | 리스트를 가져올 유저의 고유 id

### Status Code

Status | Description
------ | -----------
200 | 팔로우 리스트를 가져왔습니다.
404 | 사용자 정보가 존재하지 않습니다.  