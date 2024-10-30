// [5] Document OBject Model
// (a) DOM 이란?
//     - 브라우저에서 UI를 볼 수 있는 것은 HTML을 분석해서 보여주며, HTML은 Element들로 구성
//     - DOM은 메모리에 웹 페이지 문서 구조를 트리구조로 표현해 브라우저가 HTML 페이지를 인식하게 해줌 
//     - 웹 페이지를 이루는 요소들을 자바스크립트가 이용할 수 있게 브라우저가 트리구조로 만든 객체 모델
//     - DOM 트리를 DOM에서 제공하는 API를 이용해 DOM구조에 접근하거나 원하는 요소를 수정, 삭제 가능
//
// (b) 웹페이지 빌드 과정(Critical Rendering Path CRP)
//     - DOM tree 생성: 렌더 엔진이 문서를 읽어들여 파싱하고 어떤 내용을 페이지에 렌더링할지 결정 
//     - Render tree 생성: 이 단계는 브라우저가 DOM과 CSSOM을 결합하는 곳이며 이 프로세스는 화면에 보이는 모든 트리 노드의 콘텐츠 및 스타일 정보 포함하는 최종 렌더링 트리를 출력
//     - Layout(reflow): 브라우저가 페이지에 표시되는 각 요소의 크기와 위치를 계산하는 단계
//     - Paint: 셀제 화면에 그리기?
//     - Render tree, layout, Paint 부분은 자원을 많이 소모함 최소화하는게 성능 향상에 도움, 리액트에선 VirtualDom으로 성능향상
//
// (c) Document Object
//     - document 객체 추출
        let doc = document; // document 객체 가져옴
        console.log(doc);
        let docUri = document.baseURI // 웹 페이지의 절대경로 URI 반환
        console.log(docUri);
        let docHead = document.head; // <head> 태그 반환
        console.log(docHead);
        let docBody = document.body; // <body> 태그 반환
        console.log(docBody);
        let docForm = document.forms; // <form> 태그 반환
        console.log(docForm, '\n', docForm[0].id, '\n', docForm[0].classList, '\n', docForm[0].className);
        let docScripts = document.scripts; // <script> 태그 반환
        console.log(docScripts, '\n', docScripts[1].getAttribute('src'));
//     - document 객체의 메서드를 사용해 하나의 요소에 접근해 스타일 변경해보기
        const docHeaderContainer = document.getElementById('header-container')// id값이 header-container인 객체에 접근
        console.log(docHeaderContainer);
        // docHeaderContainer.style.display = 'none'; 
        // docHeaderContainer.textContent = 'Text content' 
        // docHeaderContainer.innerText= 'Inner Text'
        docHeaderContainer.innerHTML = '<span> Inner HTML </span>'
//     - document 객체의 메서드를 사용해 여러개의 요소에 접근해 스타일 변경해보기
        const docListGrops = document.getElementsByClassName('list-group-item'); // className값이 list-group-item인 객체들에 접근
        console.log(docListGrops);
        docListGrops[0].style.color = 'blue';
        docListGrops[3].style.color = 'red';
        docListGrops[1].textContent = 'bbb'
        let docLis = document.getElementsByTagName('li'); // tag값이 li인 객체들에 접근
        console.log(docLis);
        docLis = Array.from(docLis) // html collection엔 forEach사용이 안되므로 배열러 변환
        console.log(docLis);
        docLis.forEach((docLi) => { console.log(docLi) })
        docLis.forEach((docLi, index) => { docLi.textContent = `${index}. docLi ` })
        const docOddLis = document.querySelectorAll('li:nth-child(odd)'); // li객체에서 홀수들만 반환
        docOddLis.forEach((docOddLi) => { docOddLi.style.background = 'gray' })


