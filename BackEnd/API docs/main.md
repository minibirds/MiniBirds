# Introduction

## Entry Project Mini Birds API  
작성자 : huewilliams  
API 개요 : SNS 구현 프로젝트인 Mini Bird에 사용되는 API들을 정리한 문서 입니다.  
![Mini Birds logo](./images/mini.png)

# Authenticate

## Sign up

```json
[
  {
    "status": 200,
    "message": "DB에 새로운 사용자가 추가되었습니다."
  },
  {
    "id": User.id,
    "nickname": User.nickname,
    "Sns_id": User.Sns_id,
    "password": User.password,
    "intro": null,
  }
]
```

유저 회원가입. 닉네임, 아이디, 비밀번호로 회원가입한다.

### HTTP Request

`POST http://example.com/signup`

### Request Body

Parameter | Type | Description
--------- | ------- | -----------
nickname | varchar(20) | duplicate OK, 사용자가 상시적으로 변경 가능
Sns_id | varchar(20) | unique, 회원 가입 이후 변경 불가
password | varchar(30) | 사용자가 상시적으로 변경 가능

<aside class="notice">
Sns_id 는 사용자가 생성하고 로그인 시 사용되는 id 이며 유저 삭제/수정 시에 참조되는 id는 AI로 서버에서 자동으로 배정받는다.
</aside>

<aside class="success">
200 : DB에 새로운 사용자가 추가되었습니다.
</aside>

<aside class="warning">
405 : 아이디가 중복된 사용자가 존재합니다.
</aside>

## Sign in
```json
[
  {
    "status": 200,
    "message": "아이디에 맞는 사용자를 찾았습니다."
  },
  {
    "id": User.id,
    "nickname": User.nickname,
    "Sns_id": User.Sns_id,
    "password": User.password,
    "intro": User.intro,
  }
]
```

사용자의 아이디와 비밀번호를 통해 로그인한다.

### HTTP Request

`GET http://example.com/signin/:<snsId>/:<password>`

### URL Parameters

Parameter | TYPE | Description
--------- | ---- | -----------
snsId | varchar(20) | 사용자의 고유 아이디(계정 id)
password | varchar(30) | 사용자 계정의 비밀번호


<aside class="success">
200 : 아이디에 맞는 사용자를 찾았습니다.
</aside>

<aside class="warning">
404 : 아이디에 등록된 사용자가 존재하지 않습니다.
</aside>
