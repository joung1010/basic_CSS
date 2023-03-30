# Practice CSS
```
<section id="plans">
            <h1 class="section-title">Choose Your Plan</h1>
            <div>
                <article class="plan">
                    <h1>FREE</h1>
                    <h2>$0/month</h2>
                    <h3>For hobby projects or small teams.</h3>
                    <ul>
                        <li>1 Workspace</li>
                        <li>Unlimited Traffic</li>
                        <li>10GB Storage</li>
                        <li>Basic Support</li>
                    </ul>
                    <div>
                        <button>CHOOSE PLAN</button>
                    </div>
                </article>
                <article class="plan plan--highlighted">
                    <h1 class="plan__annotation">RECOMMENDED</h1>
                    <h1>PLUS</h1>
                    <h2>$29/month</h2>
                    <h3>For ambitious projects.</h3>
                    <ul>
                        <li>5 Workspaces</li>
                        <li>Unlimited Traffic</li>
                        <li>100GB Storage</li>
                        <li>Plus Support</li>
                    </ul>
                    <div>
                        <button>CHOOSE PLAN</button>
                    </div>
                </article>
                <article class="plan">
                    <h1>PREMIUM</h1>
                    <h2>$99/month</h2>
                    <h3>Your enterprise solution.</h3>
                    <ul>
                        <li>10 Workspaces</li>
                        <li>Unlimited Traffic</li>
                        <li>Unlimited Storage</li>
                        <li>Priority Support</li>
                    </ul>
                    <div>
                        <button>CHOOSE PLAN</button>
                    </div>
                </article>
            </div>
        </section>
```
위의 해당 HTML을 이제 CSS 작업을 시작할 것이다.  
먼저  
```
.plan {
    background: #d5ffdc;
    text-align: center;
    padding: 16px;
    margin: 8px;
    display: inline-block;
    width: 30%;
    vertical-align: middle;
}
```
### 기본 CSS 추가
`text-alin` 프로퍼티에 `center`라는 값을 주면 모든 인라인 요소  
즉, 박스 안의 모든 텍스트를 한가운데로 정렬할 수 있다.  
`padding`을 설정함으로써 border 영역과 콘텐트 영역 사이에 여백을 좀 주고  
`margin`을 통해서 요소들 끼리 너무 붙어 보이지 않게 바깥쪽 여백을 설정합니다.  
마지막으로 `.plan` 클래스를 한줄에 보고싶기 때문에 `display:inline-block`으로 스타일링 한다.  
![practice.PNG](practice_basic_css/practice.PNG)  
  
`display:inline-block`이기 때문에 콘텐츠 영역에 맞게 width 가 설정되지만  
너무 넓어질 수 있으니 `width`의 값을 `30%`로 제한한다.  
  
자세히 살펴보자면 현재 `id="plans"`의 너비는 별도의 스타일이 없기때문에  
`main` 과 마찬가지로 최대 너비를 가질 수 있을 것이고 우리가 스타일을 지정한 `.plan`은 `div`로 묶여있어서  
기본 값으로 최대 너비를 가진다.  
따라서 `article.plan`의 `width:30%`를 주면 상위 요소에 아무 제약도 설정하지 않았기에 `페이지 전체의 30%` 너비를 얻을 수 있다.  
  
하지만 현재 상태에서는 화면이 너무 작거나 크면 CSS가 조금 이상해진다.  
이는 추후에 반응형 디자인 파트에서 좀더 자세히 다룰 것이다.


### 특정 요금제 강조
기존 HTML 에서 강조하고 싶은 부분에 새로운 CSS 를 추가했다.  
```
<article class="plan plan--highlighted">
<h1 class="plan__annotation">RECOMMENDED</h1>
```
```
.plan {
    background: #d5ffdc;
    text-align: center;
    padding: 16px;
    margin: 8px;
    display: inline-block;
    width: 30%;
    vertical-align: middle;
}
.plan--highlighted {
    background: #19b84c;
    color: white;
    box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.5);
}
```
  
이렇게 기존에 이미 `plan`에서 `plan--highlighted`CSS를 추가하고 만약 같은 부분의 스타일을 수정한다면  
문서상 더 늦게 정의된 것으로 덮어쓴다.  
따라서 `plan--highlighted` 의 `background` 프로퍼티의 값이 적용된다.  
  
아직 배우진 않았지만 `box-shadow` 프로퍼티를 추가하여 그림자를 만들어 볼것이다.  
첫번쨰 키워드로 `inset`을 넣으면 안쪽에 그림자 효과를 주고 그다음으로 그림자가 위차할 `x,y`값을 설정해주면 된다.  
이때 설정된 `x, y`값은 박스의 우측 아래쪽을 기준으로 2px 떨어진 곳에 그림자가 생성된다.  
그다음으로 그림자의 흐릿함 정도와 확산 정도, 색을 지정할 수 있다.    
[MDN box-shadow](https://developer.mozilla.org/ko/docs/Web/CSS/box-shadow),[box-shadow generator](https://cssgenerator.org/box-shadow-css-generator.html)  
  
### rgb(), rgba()
지금 까지 색을 지정할 때 단어(red)나 해시태그(#19b84c)를 썼다.  
사실 다른 방법도 많은데 그중하나가 컬러 함수를 사용하는 방법이다.  
`rgb()` 함수를 통해 red, green, blue 값을 0_255까지 숫자를 이용해서 사용할 수 있다.  
예를 들어 rgb(255,255,255) 이런식으로 사용한다.  
또다른 함수로 `rgba`가 있는데 `rgba`는 마지막 인자로 색의 투명도를 지정할 수 있다.