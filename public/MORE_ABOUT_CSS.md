# CSS 좀 더 알아보기
기본 HTML
```
<body>
    <main>
        <section id="product-overview">
            <h1>Get the freedom you deserve.</h1>
        </section>
        <section id="plans">
            <h1 class="section-title">Choose Your Plan</h1>
            <p>Make sure you get the most for your money!</p>
        </section>
    </main>
</body>

```
기본 CSS
```
body {
    font-family: 'Montserrat', sans-serif;
}

#product-overview {
    background: #ff1b68;
}

.section-title {
    color: #2ddf5c;
}

#product-overview h1 {
    color: white;
    font-family: 'Anton', sans-serif;
}

/* h1 {
    font-family: sans-serif;
} */
```
## CSS 박스 모델
![box.PNG](more_about_css/box.PNG)  
빨간색 박스가 웹 페이지의 첫 요소이니까 주변 하얀 공백을 없애는 것이 보기 좋아보이고  
크기나 높이를 키운다거나 필요한 요소를 더 추가하거나 공백을 조정할 때에 `박스 모델을` 사용합니다.  
  
모든 HTML의 모든 요소는 CSS 상에서 박스로 인식된다.  
크롬의 개발자 도구에서 어떤 요소를 선택해도 맞찬가지다.
![box.PNG](more_about_css/1.box.PNG)  

![box.PNG](more_about_css/2.box.PNG)  
위의 사진과 같이 CSS는 요소를 이렇게 인식합니다.  
모든 요소에는 콘텐츠가 있는데 사진에서는 푸른색 영역이 이 영역이다.  
우리의 HTML 문서에서 `section` 에서의 콘텐츠는 바로 `h1` 태그 이다.  
`h1` 태그의 콘텐츠 영역은 바로 `텍스트` 가 된다.  

이 콘텐츠 영역이 있고 이를 감싸는 안 쪽 여벽(padding) 이 있습니다. 위의 사진에서는 초록색 부분 이다.  
`section` 영역에 padding 값을 주게 되면  내부 콘탠츠 `h1` 영역과 그다음 영역인 테두리(border) 사이에 내부적으로 공백을 둔다는 의미 입니다.  
  
각 요소에는 테두리(border)를 추가할 수 있다.  
이 테두리(border)는 요소를 감싸고 있으면 안쪽 여백(padding) 바로 다음에 위치해 있다.  
위와 마찬가지로 안쪽 여백(padding)은 콘텐츠 바로 다음에 온다.  
안쪽 여백을 추가하게 되면 그때부터 요소의 콘텐츠는 콘텐츠와 콘텐츠에 대한 모든 여백을 통칭하게 된다.  
즉, 부모의 padding(안쪽 여백)을 추가 함으로써 자식 요소의 margin(바깥쪽 여백)에 추가 됩니다.

![box.PNG](more_about_css/border.PNG)

끝으로 요소를 감싸는 여백이 필요할 때면 바깥쪽 여백(margin)을 활용합니다.  
이 바깥쪽 여백(margin)은 다른 위의 요소와 다르게 핵심 요소는 아니지만,  
요소와 다음 형제 사이에 존재하는 거리라고 할 수 있다.  

![box.PNG](more_about_css/margin.PNG)  
우리가 선택한 `h1`태그에 별도로 margin 값을 주지않아도 브라우저 기본값인 margin before, margin after가 적용 되어 있다.  
위의 margin은 section 컨테이너 바깥에 있으므로 요소의 일부가 아니다.  
즉, section 콘텐츠 부분이 아니라는 의미이다.