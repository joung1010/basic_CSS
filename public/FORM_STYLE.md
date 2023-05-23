# 폼 추가 및 스타일링
1. input 태그와 button 태그의 스타일링 방법에 대해알아보자  
2. 유효성 검사 스타일 살펴보기
   1. 사용자에게 피드백을 제공
      1. 예를 들어 입력란에 빨간색 테두리가 표시되게 한다 
  
## 고급 속성 선택자 이해
* 속성 선택자
  * [type] { color: red; }
  * 이렇게 하면 `type`속성이 있는 모든 요소를 선택할 수 있습니다.
  * `<input type="text">`
  
속성 선택자를 이용하면 해당 속성을 가진 요소들의 집합을 제한할 수 있다.  
예를 들어 특정 속성 값을 가진 요소만 선택하고 싶다고 할때:  
* 특정 속성값을 선택
  * [type = "email"] { color : red; }
    * type 속성을 그냥 설정하는 게 아니라 그 값이 `email`은 속성을 특정한다.
    * 이렇게 하면 `email` 타입의 모든 `input` 요소가 **선택**됩니다.
    * `<input type="email">`
  
* 목록에서 특정 속성 값을 가진 요소를 선택하고 싶을때
  * [lang~="en-us"] { color : red; }
    * 등호 앞에 물결표(~)는 하나 이상의 값이 있는 속성을 선택하는 역할을 한다.
    * `<p lang="en-us en-gb></p>`
      * lang 속성은 en-us 와 en-gb 라는 속성 값이 있다.
  
* 특정 속성 값 또는 이 속성 값을 접두사로 사용하는 요소를 선택하고 싶을때
  * [lang|="en"] { color : red; }
  * `|`기호는 en 과 같거나 en 으로 시작해야 한다는 의미
  * `<p lang = "en-us"></p>`
  
* 특정 속성 값 접두사를 가진 요소를 선택
  * [href^="#"] { color : red; }
  * `^`기호는 `#`기호로 시작하는 모든 요소를 선택
  * `<a href="#all"></a>`
  
* 접미사로 대상을 선택
  * [href$=".de"] { color: red; }
  * `$`기호는 href 속성이 있는 요소중 .de로 끝나는 모든 요소를 선택
  * `<a href="ab.de"></a>`
  
* 특정 속성 값이 들어있는 요소를 선택
  * [src*="cdn"] { color : red; }
  * `*`기호는 src 속성이 있는 모든 요소가 대상이며 콘테츠의 일부로 cdn을 포함하는 요소를 선택
  * cdn 으로 시작할 수도 cdn으로 끝날수도 있다. 그저 들어가만 있으면 된다.
  * `<img src="1.cdn.com">`
  
* 대소문자 무시
  * [src*="cdn" i] { color: red; }
  * 대괄호를 닫기전에 `i`문자를 추가하면 대소문자를 무시하라는 의미
  * `i`를 추가하지 않으면 대소문자를 구분
  * `<img src="1.CDN.com">`


## outline
`<input type="text">` 요소 일때 해당 요소를 클릭하게되면 테두리의 색이 변경되거나 혹은 짙어진다.    
mac 에 경우는 테두리가 파란색으로 나온다.
![input](form_style/3.input.png)  
```
기본적인 CSS가 적용되서 그렇다
: focus {
  outline: -webkit-focus-rising-color auto 5px;
}
```
![input](form_style/input.png)
![input](form_style/1.input.png)  
  
그러면 이 outline(외곽선)과 border(테두리)는 뭐가 다를까??  
`outline`은 border과 아주 비슷하지만 몇가지 차이점이 있다.  
예를 들어 둘은 동시에 추가될 수 있는데 그럴때 `outline`은 늘 테두리 바깥에 그려진다.  
박스 크기에 포함되지도 박스 그림자에도 영향을 끼치지 않는다.  
`outline`을 아무리 두껍게 만들어도 박스 그림자에도 변화가 없다.
  
`outline`은 포커스를 뒀을 때 이를 표시하는 좋은 도구지만  
조금은 다른 방법은 스타일링 해보자  
```
.signup-form input:focus,
.signup-form select:focus {
    outline: none;
    background: #d8f3df;
    border-color: #2ddf5c ;
}
```
![input](form_style/4.input.png)  
  
