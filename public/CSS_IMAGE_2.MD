# Image CSS
## 이미지 스타일링
```
        <div>
            <a href="index.html" class="main-header__brand">
                <img src="./images/uhost-icon.png" alt="uHost">
            </a>
        </div>
```
기존 우리의 로고를 이미지로 대체해보자  
이때  `a`태그의 스타일링에 높이를 `font-size`와 같은 값으로 설정하여 높이를 제한해보자
```
.main-header__brand {
    color: #0e4f1f;
    text-decoration: none;
    font-weight: bold;
    font-size: 22px;
    height:22px
}
```  
![style.png](css_image/style.png)  
  
예상과 다르게 별다른 이미지가 여전히 크게 보여지는 것을 확인할 수 있다.  
그 이유는 `컨테이너에 높이를 지정할 때 .main-header__brand는 컨테이너지 이미지 요소가 아니기 때문이다.`  
따라서 `컨테이너에서는 높이를 지정해도 이미지는 아무런 영향을 받지 않는다.`  
  
우리는 여기서 기본 동작 방식을 기억해야한다.  
기본 동작 방식은 이미지 태그로 이미지를 가리키면 원본 이미지의 높이와 너비가 적용되어 문서에 삽입된다.  
이때 주변 요소의 너비와 높이가 어떻든지 상관하지 않는다.  
![style.png](css_image/2.style.png)  
  
그래서 이미지에도 영향을 주려면 두가지 절차를 거쳐야 한다.
* 먼저 이미지를 선택해야한다.
   * `.main-header__brand img {}`
   * 이때 height: 22px를 적용하면 이미지의 높이가 작아진것을 확인할 수 있다.(width 값도 동일)
   * 그러면 height: 100% 값을 주면 부모 컨테이너의 높이에 맞춰서 높이가 설정될까?(width 값도 동일)
     * 하지만 적용되지 않는다. 이미지에 높이 `100%`를 적용하니 다시 원본 이지파일의 높이 값이 적용되었다.
     * ![style.png](css_image/style.png)  
   * 부모 컨테이너가 블록 요소인지 확인한다.
  
이미지는 컨테이너의 높이를 따르지 않고있다.  
이유가 무엇일까??  
이는 이미지의 상위 컨테이너가 `인라인` 요소이기 때문이다.

```
.main-header__brand {
    color: #0e4f1f;
    text-decoration: none;
    font-weight: bold;
    font-size: 22px;
    height: 22px;
    display: inline-block;
}
.main-header__brand img {
    height: 100%;
}

```
![style.png](css_image/3.style.png)  
  
  
## 팁
![style.png](css_image/top.png)  
브모 컨테이너가 `inline-block`일때 `box-shadow` css를 적용했을 때  
이때 이미지 아래에 보기 싫은 여백이 나온다.  
이는 인라인 요소의 버그로 해당 이미지에 `vertical-align: bottom`,`vertical-align: top`값을 주면 밑에 여백이 사라진다.  
  
## 선형 그라데이션
`먼저 선형과 원형 그라데이션 모두 이미지로 취급한다는 것이다.`  
`linear-gradient()` 함수는 두개의 인자를 받는데 첫번째 인자로는 그라데이션 방향  
만약 첫번째 인자가 색상이라면 생략할 수 있다.  
이때 기본 방향은 수직이다.
```
#product-overview {
    background: url("freedom.jpg") left 10% top 20%/cover no-repeat border-box;
    background-image: linear-gradient(red ,blue);
    width: 100%;
    height: 528px;
    padding: 10px;
    margin-top: 43px;
    position: relative;
}
```
![style.png](css_image/gradient.png)  
  
이때 첫번재 인자로 방향을 설정할 수 있는데 예를 들어 `background-image: linear-gradient(to bottom,red ,blue);`  
당장 보면 낯설지만 CSS가 이해할 수 있는 구문이다.  
위 의미는 위에서 아래로 내려오는 방향이다.  
![style.png](css_image/2.gradient.png)  
  
`background-image: linear-gradient(to left bottom,red ,blue);`  
![style.png](css_image/2.gradient.png)  
  
위와 같이 방향으로 그라데이션 방향을 방향으로 지정할 수도 있고 각도로도 지정할 수 있다.  
`background-image: linear-gradient(30deg,red ,blue);`  
![style.png](css_image/3.gradient.png)  
  
뿐만 아니라 색상도 원하는 만큼 설정할 수 있다.  
`background-image: linear-gradient(30deg,red ,blue,green,yellow,#fa923f);`  
background-image: linear-gradient(180deg,red,transparent);  
  
또한 어떤 색상이 어디서 시작하고 어디서 끝나는지도 설정할 수 있다.  
`background-image: linear-gradient(180deg,red,blue,rgba(0,0,0,0.5));`  
![style.png](css_image/5.gradient.png)  
각 색상이 3분의 1씩이 차지하는 것을 볼 수 있다.  
`background-image: linear-gradient(180deg,red 70%,blue,rgba(0,0,0,0.5));`  
색상 옆에 해당 색상이 차지하는 비율을 값을 설정할 수 있다.  
![style.png](css_image/6.gradient.png)  
  
## 원형 그라데이션
`radial-gradient()` 는 특정한 형태로 시작해 주변으로 퍼져나가는 형식의 그라데이션이다.  
`background-image:radial-gradient(red,blue) ;`  
![style.png](css_image/7.gradient.png)  
선형 그라데이션과 다르게 첫번째 인자로 형태를 지정할 수 있다.  
`background-image:radial-gradient(circle at top left,red,blue,green);`  
`background-image:radial-gradient(circle at 20% 30%,red,blue,green) ;`  
![style.png](css_image/8.gradient.png)  
  
또한 형태의 크기를 설정할 수 있다.  
`background-image:radial-gradient(circle 20px at 20% 30%,red,blue,green) ;`  
`background-image:radial-gradient(ellipse 20px 20px at 20% 30%,red,blue,green) ;`  
`background-image:radial-gradient(ellipse farthest-side  at 20% 30%,red,blue,green) ;`  
`background-image:radial-gradient(ellipse close-side  at 20% 30%,red,blue,green) ;`  
`background-image:radial-gradient(ellipse close-coner  at 20% 30%,red,blue,green) ;`  
![style.png](css_image/9.gradient.png)  
  
  
## 다중 배경
하나의 동일 요소에 여러 배경 이미지를 설정할 수 있다.  
이런 경우에는 배경 이미지에 일종의 투명도 효과가 적용되어 있어야 한다.  
이미지에 투명한 부분이 있거나 그라데이션에 투명 색상이 있는 식으로 설정하지 않는 다면  
가장 맨위에 있는 배경만 보일 것이다.  
여기서 단색 하나만 사용이 가능한데 이는 항상 맨 아래 위치해야한다.  
```
background : 
1. url(...)
2. url(...)
3. linear-gradient(..)
4. color
```
  
`background: linear-gradient(), url("freedom.jpg") #ff1b68 left 10% top 20%/cover no-repeat border-box;`  
위에 선형 그라데이션 부분이 이미지 앞에 작성되었으니 이미지의 위에 그라데이션이 스택된다.  
기본적으로 왼쪽에서 오른쪽으로 읽어나가기 때문이다.  
이때 서로 다른 배경은 `,(쉼표)`로 구분 된다.  
근데 위의 코드를 보면 현재 `url()`함수를 통해 이미지를 그리고 뒤에 프로퍼티들을 통해 해당 이미지의 위치와 기타 설정을 지정해 주고 있다.  
따라서 배경색을 가장 마지막으로 배경 이미지 설정 뒤로 보내야한다.
`background: linear-gradient(), url("freedom.jpg")  left 10% top 20%/cover no-repeat border-box,#ff1b68;`  
  
기본 이미지
![style.png](css_image/1.multiple.png)  
  

`background: linear-gradient(to top, rgba(80,68,18,0.6),transparent), url("freedom.jpg")  left 10% top 20%/cover no-repeat border-box,#ff1b68;`  
이미지  
![style.png](css_image/2.multiple.png) 
  

