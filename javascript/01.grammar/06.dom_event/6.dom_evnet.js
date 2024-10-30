// [6] DOM EVENT
// (a) EventListener
//     - 웹페이지에서 마우스로 버튼을 클릭했을때, 클릭이벤트가 발생하고 다음 행동을 위한 함수
//     - 자바스크립트 코드에서 프로퍼티로 등록 on~
        window.onload = function() { // 문서가 load시에 이 함수를 실행
            let docText = document.getElementById('text'); // id값이 text인 요소를 가져옴
            docText.innerText = 'HTML 문서가 로드 됬습니다.'
        }
//     - HTML 태그에 속성으로 등록: 6.dom_event.html 15줄 참조
        // <button class="btn-1" onclick="alert('버튼 클릭!')"> 버튼 </button>
//     - addEventListner메소드 사용: element.addEventListener(이벤트명, 실행할함수명(Listener), 옵션);
        const docBtn2 = document.querySelector('.btn-2');
        docBtn2.addEventListener('click', () => {alert("버튼 클릭!")})
//     - event 객체 보기
        const docBtn3 = document.querySelector('.btn-3');
        docBtn3.addEventListener('click', (event) => {
            console.log(event);
            // 객체 클래스이름, 클래스리스트, 이벤트 타입, 윈도우로부터의 거리, 요소로부터의 거리
            alert( `${event.target.className} \n ${event.target.classList} \n ${event.type} \n ${event.clientY} \n ${event.offsetY}`); 
        })

// (b) Event종류
//     - UI 이벤트: load, change, resize, scroll, error
//     - 마우스 이벤트: click, dblclick, mousedown, mouseout, mouseover, mousemove, mouseup
        const docBtnSubmit = document.querySelector('.btn-submit');
        docBtnSubmit.addEventListener('click', handleEvent1);
        docBtnSubmit.addEventListener('dblclick', handleEvent1);
        docBtnSubmit.addEventListener('mousedown', handleEvent1);
        docBtnSubmit.addEventListener('mouseenter', handleEvent1);
        docBtnSubmit.addEventListener('mouseleave', handleEvent1);
        docBtnSubmit.addEventListener('mousemove', handleEvent1);
        function handleEvent1(e){
            e.preventDefault();
            docInput.textContent = `MouseX: ${e.offsetX}, MouseY: ${e.offsetY}`;
            docEvent.textContent = e.type
        }
//     - 폼 이벤트: input, change, select, reset, submit, cut/copy/paste
//     - 키보드 이벤트: keydown, keyup, keypress
//     - 포커스 이벤트: focus, blur
        const docForm = document.querySelector('form');
        const docInput = document.getElementById('input');
        const docEvent = document.getElementById('event');
        const docEmail = document.getElementById('email');
        docForm.addEventListener('submit', handleEvent2)
        docEmail.addEventListener('keydown', handleEvent2)
        docEmail.addEventListener('keypress', handleEvent2)
        docEmail.addEventListener('keytup', handleEvent2)
        docEmail.addEventListener('focus', handleEvent2)
        docEmail.addEventListener('blur', handleEvent2);
        docEmail.addEventListener('cut', handleEvent2);
        docEmail.addEventListener('paste', handleEvent2);
        function handleEvent2(e){
            if(e.type === 'submit'){
                e.preventDefault();
            }
            docInput.textContent = e.target.value;
            docEvent.textContent = e.type
        }
