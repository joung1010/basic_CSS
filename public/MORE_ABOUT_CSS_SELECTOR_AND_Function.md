# CSS 선택자 심화
## 추가사항
```
.class1 {...}
.class2 {...}
a.active {...}
```
```
    <div class="class1 class2">
    <a href="#" class="active">
```
위의 HTML에서 첫번째 요소는 두 개 이상의 클래스를 적용했다.  
`class1` 과 `class2` 있고 두 클래스는 공백으로 간단히 구분된다.
두번째 요소는 클래스가 하나만 있는 일반 요소이지만 특별한 방법으로 선택한다.  
  
따라서 첫 번째 요소의 중요 부분은 하나의 요소에 여러 클래스를 사용할 수 있다는 것이다.  
하나의 요소에 두개의 클래스가 있으므로 각각 독립적으로 스타일이 적용된다.  
이때 우연히 두 `클래스` 모두 같은 스타일을 설정한 경우 명시도 규칙 순서에 따라서 CSS파일에서 나중에 정의된 클래스가 적용된다.    
  
두번째 요소는 결합자를 이용해서 접근하고 있다.  
사실 공식적으로 경합자는 아니자만 어지됐건 선택자를 결합해서 접근하고 있다.(a.active)  
`a.active` 는 태그 선택자와 클래스 선택자가 있는데  
`자세히 보면 두 선택자 사이`에 어떠한 결합자도 존재하지 않는다.(공백, +,>,~ ....)  
  
`마치 한단어 처럼 사용한다. `a`태그에 `class`가 `active`인 요소를 대상으로 한다는 의미 이다.`  
이러한 방식은 `태그` `클래스` 선택자 조합 뿐만아니라 `두 개의 클래스`가 있을 수도 있고  
`클래스`에 `ID`가 있을 수도 있다.  
  
즉, 선택자를 하나의 선택자로 연결해서 선택하려는 항목을 보다 구체적으로 지정할 수 있다.
  
## 클래스 VS ID

우리가 클래스를 사용할때 클래스 선택자를 한 번만 사용하는 경우가 있다.  
그럼 이때 클래스 선택자를 써야 할까 아니면 ID 선택자를 써야 할까??  
언제 어떤 선택자를 써야 할까??  
  
### 정의
클래스 선택자  
```
.some-class {....}
```
ID 선택자
```
#some-id {....}
```
  
### 비교
CSS 클래스 선택자  
* 재사용성이 높다
* 스타일을 목적으로 생성
  * 스타일을 목적으로 이름을 지정하고 생성하기 때문에 특정 스타일을 적용하기 위해서만 클래스를 생성한다.

따라서 클래스는 CSS와 강력하게 연결되어 있기 때문에 스타일을 적용하는 목적이 대부분이다.  
  
CSS ID 선택자  
* 페이지당 한 번만 사용할 수 있다.
  * 페이지의 한 요소에만 영향을 주고 더 이상 영향을 미치지 않아야 한다.
* 스타일을 목적으로만 사용하지 않는다
  * 스타일을 추가하기 위해서만 ID를 추가하지 않는 것이 좋다.
  
`따라서 한번만 사용하더라도 스타일을 목적으로 사용한다면 클래스를 사용하는 것을 추천한다.`  
  
## !important(권장하지 않음)
예시
```
div {
    color: red !imporant;
}
```
사용법은 프로퍼티의 값 끝에 세미콜론 뒤에 위치하고 있으면 된다.  
의미는 Overwrites specificity and all other selectors  
`즉, 명시도와 다른 모든 선택자를 떺어쓰겠다는 것을 알려주는 주석이다.`
  
그래서 사용하지 않는 것을 권장한다.  
대부분의 경우 CSS에 내장된 내용을 덮어쓰므로 사용하지 않는 것이 좋다.  
드물게 사용하는 경우는 JS 를 이용해서 일시적으로 스타일을 바꿔야 하는 경우나  
잘못된 방식으로 작성된 스타일을 덮어써야 하는 경우가 아니면 사용하지 말자  
  
## :not() 의사 클래스  
해당 의사클래스는 특정 규칙을 뒤집거나 특정 선택자를 제외할 수 있게 해준다.  
예제  

`p`요소가 아닌 항목에 특정 스타일을 적용 시킨다.
```
:not(p){
  color: blue;
}
```
```
a:not(.active) {
    color: blue;
}
``` 
* 적용전
  * ![not.PNG](more_about_css_selector/not.PNG)
* 적용후
  * ![not.PNG](more_about_css_selector/2.not.PNG)

  
이렇게 `:not()` 의사 클래스를 사용하면 편리하지만  
종종 이런 규칙에 꼭 `not` 의사 클래스가 필요한지 생각해봐야한다.  
예를 들어 여기에서 모든 링크에 대해 파란색을 기본 스타일로 지정하려면  
```
a.active {
color: #521751;
}
a {
  color: blue;
}
```
  
이런식으로 스타일 작성해도 결과적으로 동일한 스타일로 이어진다.  
차이점이라고는 `.active` 클래스가 있는 `a` 태그가 명시도에 의해 다른 색으로 덮어쓴다는  
기술적인 차이만 있지 결과적으로는 같다.  
  
그리고 성능 관점에서도 CSS 코드를 분석하고 적용해야 하는데  
`not` 의사 클래스는 부정이라는 키워드 이기때문에 일반코드보다는 확인하기가 어렵다.  
따라서 해당 의사 클래스를 사용할때는 반드시 꼭 필요한 상황에서만 사용하는 것을 추천한다.
  
## CSS 와 브라우저 지원
CSS에서 어떤 기능을 사용할때 특정 유형의 선택자, 프로퍼티, 스타일이 대상이 되는 브라우저가 해당 기능을 지원하는지 먼저 확인해 봐야한다.  
만약 지원을 하지 않는다면 해당 기능을 사용할 수없다.  
브라우저가 해당 CSS를 지원하는지는 간단하게 MDN의 모든 페이지 끝 부분에 브라우저의 지원 여부를 확인할 수 있다.  
![browser.PNG](more_about_css_selector/browser.PNG)  
  
이후에 확인할 고급 기능을 위해서는 이부분을 확인하는 것이 중요하다.  
왜냐하면 모든 사용자가 `Chrome` 이나 `Firefox`를 사용하는 것은 아니기 때문이다.  
[caniuse.com](https://caniuse.com/)이라는 페이지에서도 브라우저 지원 여부를 확인할 수 있다.