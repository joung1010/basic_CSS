# 자바스크립트와 CSS
## 모달(popup)추가하기
```
    <div class="modal">
        <h1 class="modal__title">Do you want to continue?</h1>
        <div class="modal__actions">
            <a href="start-hosting/index.html" class="modal__action">Yes!</a>
            <button class="modal__action modal__action--negative" type="button">No!</button>
        </div>
    </div>
```
해당 모달창을 추가하고 새로고침을 하면 화면에 아무것도 나타나지 않는다.  
당연히 여기에는 표시하지 않았지만 display 프로퍼티가 `none `이기때문이다. 이는 `.backdrop`을 추가했을 때와 상황이 유사하다.  
따라서 우리는 모달을 보여주기 위해서는 display 프로퍼티 값을 `none`이 아니게 해주어야 한다.
![modal.png](Javascript_and_css/modal.png)  
  

