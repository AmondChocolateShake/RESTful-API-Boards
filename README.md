> **2023년 9월 14일**
> 

**RESTful API 게시판 구현 (CRUD)**

/board 여러 게시판이 존재 (CRD 만 구현)

/해당 게시판에 여러 post 게시물이 존재 

GET :: /board

POST :: /board

GET :: /board/${id}

PUT :: /board/${id}

DELETE :: /board/${id}

GET :: /board/${id}/post

GET :: /board/${id}/post/${id}

POST :: /board/${id}/post

PUT :: /board/${id}/post/${id}

DELETE :: /board/${id}/post/${id}

---

# 목차
노션에만 나옴
---

# API

---

| HTTP | Path | Description | Rule |
| --- | --- | --- | --- |
| GET | /board | 게시판 리스트 가져오기 |  |
| GET | /board/:id | id에 해당하는 게시판 가져오기 |  |
| GET | /board/:id/post | 해당 게시판 게시글 리스트 가져오기 |  |
| GET | /board/:id/post/:id | 해당 게시판 내 특정 게시물 가져오기 |  |
| POST | /board | 게시판 생성 |  |
| POST | /board/:id/post | 게시판 내 게시글 생성 |  |
| PUT | /board/:id | 게시판 수정 |  |
| PUT | /board/:id/post/:id | 게시판 내 특정 게시글 수정 |  |
| DELETE | /board/:id | 게시판 삭제 |  |
| DELETE | /board/:id/post/:id | 게시판 내 특정 게시글 삭제 |  |

[게시판 예시](https://www.notion.so/c590d3c113624672a7cff61fd765ca4d?pvs=21)

# GET :: /board

---

⇒ 게시판 목록 가져오기

## Parameter ::None

---

⇒None

## Return :: [board:object]

---

⇒ 게시글 목록

**[board]**

| Name | Data Type | Description | Rule |
| --- | --- | --- | --- |
| name | string | 게시판 이름 |  |
| id | number | 게시판 id |  |

**[fail]**

| Name | Data Type | Description | Rule |
| --- | --- | --- | --- |
| status | string | 성공/실패 상태 |  |
| message | string | 상세 메세지 |  |

### Example)

```jsx
{
	boardList:[
		{
			name:'자유게시판',
			id:1
		},
		{
			name:'음악게시판',
			id:2
		},
		{
			name:'중고거래게시판',
			id:3
		}
	]
}
```

# GET :: /board/${id}/post

---

⇒ 게시판 내 게시글 리스트 조회

## Parameter :: None

---

⇒ None

## Return :: board:object [post:object]

---

⇒ 해당 게시판 데이터와 게시글 목록 객체 형태로 반환

| Name | Data Type | Description | Rule |
| --- | --- | --- | --- |
| title | string | 게시글 제목 |  |
| author | string | 게시글 작성자 |  |
| date | string | 작성 날짜 |  |
| id | number | 게시글 id |  |

### Example)

```jsx
{
	board:{
		title:"자유게시판",
		id:1
	},
	posts:[{
			title:"쫄병 맛있다.",
			author:"김동주",
			date:"2023-09-14",
			id:1
		},
		{
			title:"인생이란",
			author:"김동주",
			date:"2023-09-14",
			id:2
		},
		{
			title:"쫄병보다 양파링",
			author:"너누구",
			date:"2023-09-14",
			id:3
		},
	]
}
```

# GET :: /board/${id}/post/${id}

---

⇒ 게시판 내 특정 게시글 조회

## Parameter :: None

---

⇒ None

## Return ::  post:object

---

⇒ 게시글 데이터

**[post]**

| Name | Data Type | Description | Rule |
| --- | --- | --- | --- |
| title | string | 제목 |  |
| date | string | 날짜 |  |
| author | string | 작성자 |  |
| context | string | 본문 |  |
| id | number | id |  |

### Example)

```jsx
{
	title:"쫄병 맛있다.",
	date:"2023-09-14",
	author:"김동주",
	context:"이거 엄청 맛있네요",
	id:1
}
```

# GET :: /board/${id}

---

⇒ id에 해당하는 게시판 조회

## Parameter :: None

---

⇒ None

## Return :: board:object

---

⇒ 게시판 데이터를 객체형태로 반환

| Name | Data Type | Description | Rule |
| --- | --- | --- | --- |
| name | string | 게시판 이름 |  |
| id | number | 게시판 id |  |

### Example)

```jsx
{
	name:'자유게시판',
	id:1
}
```

# POST :: /board

---

⇒ 게시판 생성

## Parameter :: board:object

---

⇒ 생성할 게시판 이름을 전달

**[board]**

| Name | Data Type | Description | Rule |
| --- | --- | --- | --- |
| name | string | 게시판 이름 |  |

### Example)

```jsx
{
	name:"구직게시판"
}
```

## Return :: object

---

⇒ 생성 성공 유무 데이터

| Name | Data Type | Description | Rule |
| --- | --- | --- | --- |
| status | string | 성공/실패 상태 |  |
| message | string | 상세 메세지 |  |

### Example)

```jsx
{
	status:"successed",
	message:"게시판 생성에 성공했습니다.",
}
```

# POST :: /board/${id}/post

---

⇒ 게시판 내 게시글 작성

## Parameter :: post:object

---

⇒

**[post]**

| Name | Data Type | Description | Rule |
| --- | --- | --- | --- |
| title | string | 게시글 제목 |  |
| context | string | 게시글 본문 |  |

⇒ 작성자는 인증 완료를 전제로 서버가 자동으로 작성

### Example)

```jsx
{
	title:"쫄병 맛있다.",
	context:"이거 엄청 맛있네요"
}
```

## Return ::

---

⇒ 게시글 생성 성공 유무

| Name | Data Type | Description | Rule |
| --- | --- | --- | --- |
| status | string | 성공 유무 |  |
| message | string | 상세 메세지 |  |

### Example)

```jsx
{
	status:"successed",
	message:"게시글 생성에 성공했습니다."
}
```

# PUT :: /board/${id}

---

⇒ 게시판 수정

## Parameter :: board:object

---

⇒ 수정할 데이터를 게시판 폼에 맞게 객체로 전송

| Name | Data Type | Description | Rule |
| --- | --- | --- | --- |
| name | string | 게시판 이름 |  |

### Example)

```jsx
{
	name:"게임게시판"
}
```

## Return ::

---

⇒ 수정 성공 유무

| Name | Data Type | Description | Rule |
| --- | --- | --- | --- |
| status | string | 성공 유무 |  |
| message | string | 상세 메세지 |  |

### Example)

```jsx
{
	status:"successed",
	message:"게시판 수정에 성공했습니다.",
}
```

# PUT :: /board/${id}/post/${id}

---

⇒ 게시판 내 특정 게시글 수정

## Parameter ::

---

⇒ 수정할 내용을 게시글 데이터 폼에 맞춰 전송

| Name | Data Type | Description | Rule |
| --- | --- | --- | --- |
| title | string | 게시글 제목 |  |
| context | string | 본문 |  |

⇒ 작성자는 인증을 마쳤다는 전제로 서버내에서 자동으로 바꿈

### Example)

```jsx
{
	title:"쫄병 맛없다",
	context:"계속 먹으니까 맛없더라고"
}
```

## Return ::

---

⇒ 게시글 수정 유무

| Name | Data Type | Description | Rule |
| --- | --- | --- | --- |
| status | string | 성공 유무 |  |
| message | string | 상세 메세지 |  |
| title | string | 게시글 제목 |  |
| id | number | 게시글 id |  |

### Example)

```jsx
{
	status:"successed",
	message:"게시글 수정에 성공했습니다.",
	title:"쫄병 맛없더라",
	id:1
}
```

# DELETE :: /board/${id}

---

⇒게시판 삭제

## Parameter :: None

---

⇒ None

## Return ::

---

⇒ 게시판 삭제 유무

| Name | Data Type | Description | Rule |
| --- | --- | --- | --- |
| status | string | 성공 유무 |  |
| message | string | 상세 메세지 |  |
| id | number | 게시판 id |  |

### Example)

```jsx
{
	status:"status",
	message:"게시판 삭제에 성공했습니다.",
	id:1
}
```

# DELETE :: /board/${id}/post/${id}

---

⇒게시글 삭제

## Parameter ::

---

⇒

## Return ::

---

⇒ 게시글 삭제 성공 유무

| Name | Data Type | Description | Rule |
| --- | --- | --- | --- |
| status | string | 성공 유무 |  |
| message | string | 상세 메세지 |  |
| board_name | string | 게시판 이름 |  |
| board_id | number | 게시판 id |  |
| post_title | string | 게시글 제목 |  |
| post_id | number | 게시글 id |  |

### Example)

```jsx
{
	status:"successed",
	message:"해당 게시글 삭제가 완료되었습니다.",
	board_name:"자유게시판",
	board_id:1,
	post_title:"쫄병 맛있다.",
	post_id: 1
}
```