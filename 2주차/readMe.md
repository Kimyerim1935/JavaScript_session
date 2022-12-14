
# 필수 구현사항 설명

- 기존 미션1 에서 진행했던, `index.html` 안에 있던 `TodoList` 함수는 `TodoList.js` 라는 이름의 스크립트로 분리합니다.
- `new TodoList()` 를 실행했던 코드 구문은 `index.js` 라는 이름의 스크립트로 분리합니다.
- 미션1을 참고하여 `index.html` 파일을 생성한 뒤, 위에서 분리한 두 스크립트를 로딩하도록 합니다.

## TodoList의 data

- Todo를 나타내는 데이터는 아래와 같이 생각하고 만듭니다.

```javascript
[{
  text: 'todo text',  // 할 일 이름
  isCompleted: false, // 완료 여부
}]
```

## input 사용하기

- 변수 선언은 `var` 대신 `let`, `const`로만 사용해주세요.
- `<input type="text">` input에 할 일을 입력하여 `TodoList` 컴포넌트의 데이터에 추가하도록 합니다.
    - 별도의 입력 버튼을 만들어서 버튼 클릭 시 추가 되게 하거나
    - 엔터키 입력으로 처리하거나 하는 건 자유롭게 합니다.
- `TodoList`로 그려지는 할 일 목록에 아래의 기능을 추가합니다.
    - 할 일 텍스트 뒤에 버튼을 하나 추가합니다. 해당 버튼을 클릭하여 할 일이 삭제되게 만듭니다.
    - 할 일 텍스트를 클릭하면 해당 Todo의 `isCompleted` 값을 `true`로 만듭니다.
        - `isCompleted`가 `true`인 경우와 `false`인 경우를 구분할 수 있도록 `TodoList`의 html string을 작성합니다.
            - Todo Text 앞에 `(완료)` 라는 텍스트를 붙이는 방법
            - 삭선 처리 하는 방법(`<s>`태그로 감싸기)
            - 그외 본인이 생각하기에 좋아보이는 방법을 써봅시다.
- https://developer.mozilla.org/ko/docs/Web/API/EventTarget/addEventListener 문서를 참고하여 DOM 객체의 `addEventListener` 함수를 통해 이벤트를 등록합니다.

# 생각해봐야 할 부분

- UX를 고려했을 때 Todo를 막힘없이 추가하려고 한다면 어떤 처리를 해주면 좋을까요?
    - input에 입력해서 추가 후에, 추가적인 조작없이 바로 새로운 Todo를 입력받을 수 있으면 좋겠죠?

# 보너스 구현사항
- 할 일을 추가하는 부분을 컴포넌트화 시켜보세요.
    - 이름은 `TodoInput`으로 합시다.
- `App` 이라는 컴포넌트를 만든 뒤, 이 `App`이 `TodoInput`과 `TodoList`를 관리하는 구조가 되게 만듭니다.
- `TodoCount` 라는 컴포넌트를 만듭니다.
- 해당 컴포넌트는 총 Todo의 갯수, 완료처리된 Todo의 갯수를 표시합니다.
- `TodoList` 컴포넌트 아래에 렌더링 되도록 합니다.
  todo 데이터의 변동에 따라 해당 아이템을 렌더링하는 DOM이 늘어나고, 삭제되면 해당 todo DOM의 각종 이벤트를 매번 다시 걸어야합니다.

﹡ 이를 Event delegate 기법을 이용하면 쉽게 처리할 수 있습니다.

---
## 참고 링크

- https://joshua1988.github.io/web-development/javascript/event-propagation-delegation/
- https://poiemaweb.com/js-event 요기 8번에 설명되어 있습니다.

---
- 입력하는 곳 옆에 버튼을 하나 만듭니다. 이 버튼을 누르면 Todo가 모두 삭제됩니다.
    - 버튼 클릭 시 removeAll 이벤트가 발생하도록 합니다.
    - App에서 removeAll 이라는 이벤트를 받도록 합니다.
    - 해당 이벤트를 수신하면 현재 TodoList에 있는 모든 데이터를 삭제합니다.

﹡ 커스텀 이벤트는 https://developer.mozilla.org/ko/docs/Web/API/CustomEvent/CustomEvent 이 글을 참고하시면 됩니다.

- todo 데이터를 하드코딩 해놓은 부분을 삭제합니다.
- `localStorage`를 활용해 todo data가 변경될 때마다 localStorage에 저장하게 합시다.
- 프로그램 초기 기동 시 todo는 localStorage에 저장해둔 todo가 있다면 그걸 사용하고, 없으면 빈 배열로 만듭니다.
- 새로고침 시 입력해둔 todo가 유지해되도록 `localStorage`를 활용해봅시다.

﹡ localStorage 관련문서는 https://developer.mozilla.org/ko/docs/Web/API/Window/localStorage 를 참고합니다.
