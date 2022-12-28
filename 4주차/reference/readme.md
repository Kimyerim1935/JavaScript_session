TodoApp에 API 연동하기
이번에는 Mission1, Mission2에 했던 TodoApp에 제가 간단하게 만든 API를 연동하여 좀 더 생명력 있는 웹앱을 만들어보는 시간을 가져보겠습니다.

API 사용법
Missin 3에 했던 fetch를 통해 이디어츠 검색 데이터를 불러왔던 걸 기억하시나요? 이번에도 fetch를 이용해 Todo 목록 data를 불러오고, 특정 Todo를 삭제하고, 완료처리를 하는 것에 도전해봅니다.

데이터 형태
```javascript
{
    "_id": 할 일의 고유값. 숫자와 문자가 섞여있는 문자로 되어있음,
    "content": 할 일 text,
    "isCompleted": 할 일의 완료여부
}
```

할 일 목록 불러오기
API Url: https://todo-api.roto.codes/:username
모든 API에는 username이 들어가게 되어있습니다. 본인의 username을 적당히 넣으시면 됩니다.
사용예시
```javascript
fetch('https://todo-api.roto.codes/roto').then()...
```
할 일 추가하기
API Url: https://todo-api.roto.codes/:username
```javascript
fetch('https://todo-api.roto.codes/roto', {
method: 'POST',
headers: {
  'Content-Type': 'application/json'
},
body: JSON.stringify({
  content: '자바스크립트 공부하기'
  })
}).then(function(){
....
})
```

할 일 삭제하기
API url: https://todo-api.roto.codes/:username/:todo_id
서버에서 불러온 todo 데이터는 _id 라는 이름으로 해당 todo의 id가 있습니다.
이것을 url의 <todo_id> 부분에 넣으면 됩니다.
```javascript
fetch('https://todo-api.roto.codes/roto/5d11cf671e050d3f7c583166', {
method: 'DELETE'
}).then(function(){
....
})
```

특정 사용자의 할 일 전체 삭제하기
API url: https://todo-api.roto.codes/:username/all
미션2에서 했던 전체 목록 삭제 기능을 구현할 경우 사용하세요.

```javascript
fetch('https://todo-api.roto.codes/roto/all', {
method: 'DELETE'
}).then(function(){
....
})
```

할 일 완료여부 토글하기
API url: https://todo-api.roto.codes/:username/:todo_id/toggle
todo_id에 해당하는 todo가 완료상태인 경우 미완료처리, 미완료 상태인 경우 완료처리를 합니다.
```javascript
fetch('https://todo-api.roto.codes/roto/5d11cf671e050d3f7c583166/toggle', {
method: 'PUT'
}).then(function(){
```

기본 요구사항
mission4/18th에 만들어둔 코드를 사용하실 경우, 전체적으로 중복된 코드들이 있습니다. 중복된 코드들을 다듬을 수 있는만큼 다듬어주세요.
fetch를 쓰고 있는 코드들을 하나로 모아 api.js 라는 이름으로 만들고, 실제 쓰는 쪽에선 fetch 대신에 api.js에서 제공해주는 코드를 사용하도록 합니다.
그외 원하는 API 기능이 있다면 메세지 주세요! API를 추가해드리겠습니다.

## 보너스 구현 사항
https://todo-api.roto.codes/users 를 fetch 해오면 username 목록을 얻을 수 있습니다.
Users 컴포넌트를 만들어서 사용자 목록을 보여주고 특정 사용자를 클릭하여 그 사용자의 todos를 불러와서 화면에 뿌려지게 합니다.
현재 뿌려진 todos가 누구의 todos인지 표시하는 부분이 들어가는 것도 좋겠죠?

리스트를 조회하는 API 뒤에 파라메터로 delay=숫자값을 넣으면 해당 숫자값만큼 API 결과가 지연 되어서 내려옵니다.

예를 들어 https://todo-api.roto.codes/roto?delay=5000 라고 요청을 하면, roto에 대한 todo list 데이터가 5초(숫자 단위는 1000이 1초입니다) 뒤에 내려오는 것이죠.

이것을 API에 delay를 줘서 일부러 느리게 만들고, 로딩 중임을 사용자에게 알리는 처리 및 오작동하지 않게 하는 각종 처리를 고안해봅니다.

TodoList 컴포넌트를 두개를 렌더링 합니다.
하나에는 isCompleted가 false인 todo 목록을, 하나에는 isCompleted가 true인 todo 목록을 뿌립니다.
드래그&드랍을 이용해 todo를 두 컴포넌트 사이에서 옮길 수 있게 만듭니다.
드래그를 통한 재정렬 등은 우선 신경쓰지 말고, TodoList간 옮길 수 있는 것을 신경 써서 처리합니다.
https://developer.mozilla.org/ko/docs/Web/API/HTML_%EB%93%9C%EB%9E%98%EA%B7%B8_%EC%95%A4_%EB%93%9C%EB%A1%AD_API

favorite 기능을 추가합니다. 유저 목록을 렌더링 하면서 이름 옆에 버튼을 추가합니다.
text는 자유롭게 넣습니다. 즐겨찾기, Favorite, 혹은 ❤️ 같은 emoji도요.
특정 user가 favorite되었음을 나타내는 데이터는 local storage를 이용합니다.
데이터의 형태는 자유롭게 하나 데이터 구조가 잘 생각나지 않으시면 아래의 구조를 참고합니다.
```javascript
[
  {
    // userId를 키로 하고, true, false로 구분.
    // 실제 쓸 때는 해당 key의 값이 true인 경우에만 favorite 되었다고 판단해서 처리
    [userId]: true
  }
]
```

유저 목록 위에 favorite한 유저만 필터해서 렌더링하는 체크박스를 추가하고, 해당 체크박스를 체크하면 favorite한 유저만 나오게 합니다.