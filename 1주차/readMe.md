
```html
<html>

<head>
  <title>Mission 1</title>
  <meta charset="utf-8" />
</head>

<body>
  <div id="todo-list"></div>
  <script>
    const data = [
      {
        text: 'JS 공부하기'
      },
      {
        text: 'JS 복습하기'
      }
    ]
  </script>
</body>
</html>
```

`script` 태그 내에 아래의 요구사항을 만족하는 코드를 작성합니다.

TodoList라는 이름의 컴포넌트를 작성합니다.

## 필수 구현사항 설명

- function style의 문법, class style의 문법 어느 것을 사용해도 좋습니다.
- new 키워드를 통해 생성해서 사용됩니다.
- 파라메터로 아래와 같은 형태의 data를 넘겨받습니다.
```javascript
const data = [
  {
    text: 'JS 공부하기'
  },
  {
    text: 'JS 복습하기'
  }
]
```
`const todoList = new TodoList(data);`와 같은 형태로 파라메터를 넘기고, 생성해서 사용합니다.
- 해당 컴포넌트에 `render` 함수를 작성합니다.
    - 이 함수는 파라메터로 넘겨받은 data를 순회하며 각 배열첨자의 text를 html string으로 만든 뒤, `todo-list`라는 id를 가진 div에 `innerHTML`을 이용해 렌더링 되도록 합니다.
    - 이 함수는 별도의 파라메터 없이 `todoList.render()` 형태로 실행되도록 만듭니다.

## Tip
- new 키워드와 this 키워드가 생소하신 분을 위해 간단한 샘플을 준비했습니다.
   - ```javascript
       function Band(name) {
         // 파라메터로 받은 name을 this.name으로 할당
         this.name = name;
         // Band 함수에 perform 함수를 만들고 그것을 this.perform 에 할당
         this.perform = function(){
         console.log(`${this.name} 밴드가 공연을 합니다!`);
       }
       this.performHTML = function() {
       document.querySelector('#stage').innerHTML = `<div>${this.name} 밴드가 공연을 합니다!</div>`
       }
     }

       // new 키워드를 이용해 Band 여러개를 만들기
       // new를 붙이고 함수가 실행될 때마다, 함수 내 this는 새 함수 인스턴스를 가리킵니다.
       const band1 = new Band('Cold Play'); // band1.name은 무엇일까요? band1.perform()을 실행하면 어떤 일이 일어날까요?

       // 나머지 band2, band3, band4에 대해서도 생각해봅시다.
       const band2 = new Band('Foo Fighters');
       const band3 = new Band('Crying Nut');
       const band4 = new Band('Jaurim');

       // 무슨 일이 일어날까요?
       band1.performHTML();
       // 무슨 일이 일어날까요?
       band2.performHTML();```

  
- data와 html string을 결합하기 위해 + 를 연산자를 이용하는 방법
    - `const html = '<div>' + data[0].text + </div>`;
- string template을 이용하는 방법
    - ```
        // 문자열을 '이 아닌 `(탭 위에 있는 키)로 묶는 것에 유의하세요!
        const html = `<div>${data[0].text}</div>````
- 특정한 div 내에 html을 넣으려면 아래의 문법을 활용하세요.
    - `document.querySelector('#todo-list').innerHTML = 'html string';`

## 보너스 구현사항 설명
- new 키워드로 함수의 인스턴스를 만들 때 올바른 파라메터가 넘어오지 않을 경우 에러 발생하게 하기
   - null 혹은 undefined가 넘어오면?
   - array가 아닌 형태로 넘어오면?
   - 데이터 내용이 이상하면?
- new 키워드 안 붙이고 함수 실행 시 에러 발생하게 하기
   - function 형태의 선언인 경우에만 해당
- 에러를 내야하는 상황이 생길 경우, ``throw new Error("error message")`` 문법 사용

- data의 각 object에 text외에 isCompleted 라는 필드를 추가
- 해당 값은 true, 혹은 false 값을 지정

﹡ TodoList 컴포넌트 내에 text 렌더링 시, isCompleted 값이 true인 경우 ```<s>``` 태그를 이용해 삭선처리

`TodoList` 함수에 `setState(nextData)`라는 함수 생성
- 이 함수는 해당 컴포넌트 초기 생성 시 넘겼던 data 파라메터를 nextData로 대체하고
- 컴포넌트를 다시 렌더링

해당 함수를 추가한 뒤, `new TodoList(...)` 하는 코드 이후에 해당 컴포넌트의 인스턴스에 `todoList.setState(새로운 배열)` 형태로 데이터만 다시 넣었을 때 컴포넌트가 다시 렌더링
- setState 함수 호출 후 다시 `todoList.render()`를 호출하는 것이 아니라, `setState` 함수 내에서 화면을 다시 렌더링