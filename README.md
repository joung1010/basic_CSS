# CSS(Cascading Style Sheets)  

### CSS 역사
- CSS 1 (1996년): 처음으로 웹페이지 모습을 개선할 수 있는 도구를 얻게됨
- CSS 2 (1998년)
- CSS 3 (In Development): CSS에 대한 개념, 접근법, 개발 방식이 바뀌었음

### CSS 추가하는 법
1. 인라인 스타일링
   1. html 태그의 style 속성 내부에 문자열로 CSS 선언을 적용하면 된다.
   2. 여기서 선언이란 무엇에 스타일을 지정할지와 어떻게 지정할지를 정의
   3. 여기서 무엇이란 프로퍼티를 의미한다.

```
<body>
    <main>
        <section style="background: #ff1b68">
            <h1>Get the freedom you deserve.</h1>
        </section>
    </main>
</body>
```  
여기서 `background`를 `property`라고 한다.  
이 `background` 프로퍼티에 값을 넣어 `section` 태그의 배경 스타일을 지정할 수 있다.  
  
하지만 이 방식은 추천하지 않는다.  
- 가독성이 떨어진다.
- CSS 를 수정하기 힘들다.
- 디버깅 하기 힘들다.
  

2. selector(선택자)를 이용
   1. html의 style 태그를 이용 한다.
   2. style 태그는 CSS 규칙을 따른다.
      1. CSS 규칙이란 결국 inline CSS 와 같이 프로퍼티 : 값과 같은 형태이다.

```
<head>
   <style>
      background:#ff1b68;
   </style>
</head>
<body>
    <main>
        <section style="background: #ff1b68">
            <h1>Get the freedom you deserve.</h1>
        </section>
    </main>
</body>
```  
  
`background:#ff1b68;` 는 `body` 태그의 어떤 요소에 `선언할건지` CSS 알려준다  
하지만 이때 `선택자`가 없기때문에 어떤 `body` 태그에 CSS를 적용해야 하는지 알 수 없다.  
  
```
<head>
    <style>
        section {
            background: #ff1b68;
        }
    </style>
</head>
```  
`선택자(section)`을 추가 함으로써 CSS에 어떤 태그에 CSS를 적용할지 지정해 줄 수 있다.   
  
3. 외부 스타일 시트를 이용
   1. `header` 태그에 `<link rel="stylesheet" href="main.css">` .css 파일을 추가
   2. 외부 CSS 파일을 사용하는 것을 추천
      1. HTML과 CSS 파일을 분리 할 수 있다.
      2. 재사용성이 높다.

