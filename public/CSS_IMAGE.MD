#Background & Images
## Background Property
### background-image (배경이미지)
기존에 우리가 적용했던 `background` 프로퍼티는 축약 프로퍼티이다.  
`background: url("freedom.jpg");`  -> ` background-image: url("freedom.jpg");` 변경해도 동일한 결과를 얻을 수 있다.  
![background.png](css_image/background.png)
### background-color (배경색)
배경의 색상을 변경할 수 있다.  
`background-color:red;`  
![background.png](css_image/2.background.png)  
  
### background-size (배경 사이즈)
`background` 크기를 지정한다.  
`background-size`는 여러값을 가진다.
```
#product-overview {
    /*background: url("freedom.jpg");*/
    background-image: url("freedom.jpg");
    background-size: 100px;
    width: 100%;
    height: 528px;
    padding: 10px;
    margin-top: 43px;
    position: relative;
}
```

![background.png](css_image/3.background.png)  
새로고침 하고 화면을 확인해보니 작은 이미지가 굉장히 많이 나오는 것을 확인할 수 있다.  
`background-size `값으로 `100px` 값 하나만 설정 했을때 그의미는 이미지 너비를 `100px`로 설정한 것이다.  
따라서 이게 자동으로 반복된다.  
만약, 이 반복을 끄거나 제어하려면 `background-repeat`프로퍼티를 사용해서 제어하면 된다.  

`background-size`값에 두번째 값을 주게 되면 예를 들어 `background-size: 300px 100px` 이런식으로 값을 주게되면  
이미지의 너비(width)와 높이(height) 둘 다 설정한 샘 이다.  
만약 높이를 설정하지 않으면 너비에 맞춰 자동으로 비율을 유지한다.  
![background.png](css_image/6.background.png)  
  
물론 픽셀값 외에 백분율도 가능하다. `background-size: 50%` , `background-size: auto 100%`  
`width`값을 `auto`로 주면 이미지가 컨테이너 전체를 차지하지 않는다.
![background.png](css_image/7.background.png)  
왜냐하면 컨테이너는 앱에서 다른 비율을 갖기 때문이다.  
대다수 웹 프로젝트가 이런 경우일 것이다. 즉, 컨테이너와 이미지가 일치할 경우는 거의 없다.  
이럴때 만약 `width:100%` 높이 값을 정하지 않거나 `auto`값을 주게 되면  
이미지가 컨테이너 너비의 전체를 차지하게 된다.  
왼쪽이나 오른쪽이 겹치지 않고 위나 아래도 겹치지 않는다.  
이미지 높이가 컨테이너와 일치하지 않아도 전체를 차지하게 된다.  
`이는 이미지가 자동으로 잘린것이다.` 이또한 우리가 조정할 수 있다.  
자르는 방식을 조정할 수 있다. 이역시 `background-size`에서 정의할 수 있다.  

### 이미지를 자르는 방식 cover
`background-size`값으로 `cover`이라는 값을 주면 `background-size: 100%`와 완벽하게 똑같다.  
즉, 컨테이너 너비에 맞추는 것이다.  
사실 `cover`의 정확한 기능은 컨테이너의 너비 또는 높이 중에서 어떤 것이 이미지 정렬에 더 중요한지 알아내는 것이다.  
다시말해서, 이미지의 비율은 너비가 높이보다 크다. 즉, 가로 모드이다. 이는 컨테이너도 마찬가지이다.  
그래서 `cover`는 너비가 100%여야 한다는 사실을 알 수 있다.  
만약 세로 모드라면 그 반대가 된다.  
  
쉽게 말해서 `cover`는 언제나 이미지가 컨테이너를 채우게 설정한다.  
따라서 컨테이너에 여백이 없게 만드는 가장 좋은 설정중 하나이다.
![background.png](css_image/8.background.png)
### 이미지를 자르는 방식 contain
`contain`은 전체 이미지가 컨테이너에 나타나게 만든다.  
오른쪽 여백이 있는데 이는 `contain`은 이미지가 컨테이너 전체를 채우지 않기 때문이다.  
전체를 채우는 것이 아니라 이미지 전체를 컨테이너에 표시하도록 하기 때문이다.
![background.png](css_image/9.background.png)

  

### background-repeat (배경 반복)
![background.png](css_image/4.background.png)  
`background-repeat: no-repeat;`값을 설정하면 반복되는 이미지가 사라지는 것을 확인할 수 있다.  

![background.png](css_image/5.background.png)  
혹은 `repeat-x`라는 값을 주게 된다면 이미지가 x축으로 반복해서 출력한다.  
반대로 `repeat-y`라는 값을 주면 y축으로 반복해서 출력된다.
  
## background-position (배경 위치)
`background-position` 프로퍼티의 여러 사용법이 있지만 먼저 간단하게 값으로 `px`값을 지정해 보자  
`background-position: 20px`  
![background.png](css_image/1.position.png)  
위에서 볼 수 있듯이 이미지가 오른쪽으로 20px 이동한 것을 확인할 수 있다.  
이로소 우리는 첫번째 값을 지정해주면 `x축`값을 정의한다는 것을 확인할 수 있다.  
이는 이미지 및 컨테이너의 왼쪽 모서리를 기준으로 `20px` 떨어진 곳으로 이동한다.  
  
이상태에서 두번째 값을 지정하게 되면, `background-position: 20px 50px`  
우리는 첫번째 값이 x축을 변경하였으니 `y축`값이 변경될거라고 예측할 수 있다.  
![background.png](css_image/2.position.png)  
역시 이미지 및 컨테이너의 위쪽을 기준으로 50px 떨어진 곳으로 이동한다.  
  
`background-position`의 값으로 백분율 값을 지정하면 어떻게 될까??  
`background-position: 10%` 값을 지정하게되면  
![background.png](css_image/3.position.png)  
왼쪽을 기준으로 `10%` 떨어진 곳으로 이동하는 것이 아니라 `왼쪽 여백`이 사라진 것을 확인할 수 있다.  
`백문율 값`의 경우 조금 다르게 적용하기 때문이다.  
`백문율 값`을 사용하게 되면 이미지가 컨테이너에 포함되지 않고  
초과되는 부분이 얼마나 되는지 정의한다.  
예를 들어 `background-position: 0% 10%;`이렇게 설정하면 `x축으로` 초과되는 부분은 없고  
`y축으로 10%`만큼 이미지가 초과되는데 자세히보면 사진이 살짝 아래로 내려간 것을 확인할 수 있다.  
즉, 이미지를 초과되는 영역을 조정함으로써 컨테이너 안에서의 위치를 조정할 수 있다.  
위와 같은 방식으로 수동으로 `이미지`의 위치를 지정할 수 있고   

`background-position: center(50% 50%)`처럼 사전에 정의된 값을 사용할 수도 있다.  
`background-position: left top 0 0`  
`background-position: left 10% top 20% ;`  
![background.png](css_image/4.position.png)  
  
  
## background 축약  
background 축약형에 포함된 것들  
* background-image
  * 한개 이상의 배경이미지를 설정한다.
* background-color
  * 배경 색을 지정
* background-position
  * 초기 위치를 설정하는데 배경 위치 레이어를 기준으로 설정
* background-size
  * 배경 이미지의 사이즈를 설정
* background-repeat
  * 배경 이미지의 반복을 정의
* background-origin
  * 배경의 배치 영역을 설정
* background-clip
  * 배경이 테두리 밑으로 확장될 수 있는지 여부를 정의
* background-attachment
  * 이미지 내 스크롤 동작을 정의  
  
## background-origin
`background-origin` 은 `box-sizing`가 비슷하다.  
할당할 수 있는 값이 꽤 비슷하고 거기에 추가적인 값이 있다.  
먼저 `background-origin`을 좀더 이해하기 쉽게 하기위해서 `border: 5px dashed red` 값을 주고 시작할 것이다.  
![background.png](css_image/1.origin.png)  
위에 처리 테두리에 점선 테두리가 생겼다.  
자세히 보면 왼쪽과 오른쪽 테두리 안에 여백이 있는 것을 확인할 수 있고 위아래는 이미지에 닿아 있다.  
잘 보면 테두리는 컨테이너 너비와 동일하지 않은 것 같아 보인다.  
위아래 역시 컨테이너 높이와 같지 않은데 이미지 위아래 테두리를 넘어간 것이다.  
  
`background-origin`은 이러한 부분을 조정할 수 있다.  
`background-origin: border-box`값을 주게되면
![background.png](css_image/3.origin.png)  
이미지 좌우 부분도 테두리의 뒤로 들어간 것을 확인할 수 있다.  
이를 통해서 `background` 프로퍼티에 대해 컨테이너 크기를 정의한 것이다.  
기본값이 `border-box`가 아니기 때문에 여백이 생기는 것이다.  
  
이번에는 `background-origin: content-box`값을 주게 되면 좌우에 여백이 생긴것을 확인할 수 있고  
이는 `section`을 확인해보면 `padding`값임을 확인할 수 있다.  
즉, `content-box`는 `box-sizing`처럼 테두리 밑 안쪽 여백이 없는 콘텐츠영역를 뜻한다.  
따라서 우리 이미지의 너비와 높이를 정의하는 컨테이너는 테두리와 안쪽 여백이 없는 컨테이너가 됩니다.  
  
그래서 `background-origin`의 기본값은 `box-sizing`에서 설정할 수 없는 `padding-box`가 기본값이다.  
이는 컨테이너에 콘텐츠와 padding은 있지만 테두리는 없는 것이다.
![background.png](css_image/4.origin.png)  

## background-clip
`background-clip`은 초과되는 부분에 대해서 처리하는 것이다.  
`background-clip: padding-box`값을 주게되면 기존 `border-origin:border-box`와 차이가 없는데
`background-clip: padding-box`값을 주게되면 그 차이점을 확인할 수 있다.  
![background.png](css_image/5.origin.png)  
위에서 확인할 수 있듯이 테두리뒤에 이미지가 없다.  
즉 `background-clip`은 어디를 자를지 정의한다.  
`background-clip: content-box`  
![background.png](css_image/6.origin.png)  
  
## background-attachment
`background-attachment`사용하면 배경이미지에 스크롤을 추가할 수 있다.





