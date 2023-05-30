# Flex Box
* Flex 컨테이너란 무엇인가??
  * display: flex 를 선언하는 요소로 특별한 flexbox 프로퍼티를 적용
* 기본 축과 교차 축의 차이
* flex items  

관한여 자세하게 살펴보자
  
## 개선점
현재 지금까지 작성한 CSS 파일에서 개선해야 사항을 한번 살펴보자  
1. nav 에서 width 값을 계산하기 위해 사용한 width: `calc(100% - 44px)`
   1. 매번 네비게이션의 내용이 바뀔때 마다 수동으로 너비 값을 계산해 줘야한다.
2. 거의 대부분 코드에 `display:inline-block`이 중복되어 사용
3. 화면에서 간격과 같은 것이 안맞는 사소한 문제들
  
## FlexBox 이해하기
`FlexBox`를 사용하면 요소 배치를 바꿀 수 있다. 생각보다 사용방법은 꽤 간단하다.  
요소에 특정 프로퍼티를 추가하기만 하면 된다.  
* display : `flex`  

여기서 필요한 프로퍼티가 display 프로퍼티이다.  
이 프로퍼티는 디스플레이 블럭을 인라인 또는 블록으로 설정해 요소들의 동작을 변경할 수 있다.  
이 display 프로퍼티에 flex 값을 연결해서 사용하면 **Flex 컨테이너를 생성**하게 된다.  
  
### Flex 컨테이너
**display: flex**를 요소에 적용하면 해당 요소가 이른바 `flex 컨테이너`로 바뀐다.  
여기서 컨테이너는 그 이름에서 알 수 있듯이 무언가를 담는 것인데 flex 컨테이너도 마찬가지 이다.  
  
flex 컨테이너 내부에는 다른 중첩 요소가 들어갑니다.. 이러한 요소는 `children` 또는 `flex items`이라고 불린다.  
먼저 이 개념을 이해해야 하는데 display 프로퍼티에 `flex`선언이 있는 부모 요소가 있고  
이 선언이 적용되면 이 **부모는 이른바 flex 컨테이너**가 된다.  
이 flex 컨테이너 내부의 **모든 요소는 부모 요소의 자식 요소가 되며** 동시에 `flex items`항목이 된다.  
이 개념이 첫 번째 단계이다.  
  
두 번째 단계는 요소들을 `flexBox` 구조로 변환하는 것이다.  
**부모인 flex 컨테이너 와 자식인 flex items 에는 서로 다른 프로퍼티를 적용할 수 있다.**  
* 부모 요소 flex 컨테이너에 적용할 수 있는 프로퍼티
  * flex-flow
  * justify-content
  * align-content
  * align-items
  
* 자식 요소 flex items 에 적용할 수 있는 프로퍼티
  * order
  * flex
  * align-self
