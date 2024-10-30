// [15] DOM
// (a) Node vs element
//     - DOM이란 HTML문서를 객체로 표현한것으로 JS에서 HTML 제어가능
        const element = document.querySelector('h1')        
        console.log(element.textContent)
//     - Node: HTML요소, 텍스트, 주석 등 "모든 것!"
//     - Element: HTML요소를 의미, 노드를 상속함!
        const parent = document.querySelector('.parent')
        console.log(parent.childNodes)
        console.log(parent.children)
        console.dir(parent)
        class N {}
        class E extends N {}
        console.dir(E, N, E.__proto__)
        console.dir(Element, Node, Node.__proto__)

// (b) 검색과 탐색
//     - document.getElementById(): HTML `id`속성값으로 검색한 요소를 반환, 여러 요소 검색시 먼저 찾은 요소만 반환, 없으면 null
        console.log(document.getElementById('child2'))
//     - document.querySelector(): CSS 선택자로 검색한 요소를 하나 반환, 여러 요소 검색시 먼저 찾은 요소만 반환, 없으면 null
        console.log(document.querySelector('.child:first-child'))
//     - document.querySelectorAll(): CSS 선택자로 검색한 모든 요소를 NodeList로 반환, 노드리스트 객체는 forEach를 사용가능
        const nodeList = document.querySelectorAll('.child')
        console.log(nodeList, Array.from(nodeList))
        nodeList.forEach(item => console.log(item.textContent))
//     - N.ParentElement: 노드의 부모 요소를 반환
        console.log(document.querySelector('.child').parentElement)
//     - E.closest(): 자신을 포함한 조상 요소 중 CSS 선택자와 일치하는 가장 가까운 요소를 반환, 없으면 null
        const el = document.querySelector('.child')
        console.log(el.closest('div'))
        console.log(el.closest('body'))
//     - N.previousSibling, N.nextSibling: 노드의 이전 형제 혹은 다음 형제 노드를 반환
        console.log(el.previousSibling, el.previousSibling.parentElement, el.nextSibling)
//     - N.previousElementSibling, N.nextElementSibling: 요소의 이전 형제 혹은 다음 형제 요소를 반환
        console.log(el.previousElementSibling, el.nextElementSibling)
//     - E.children: 요소의 모든 자식 요소를 반환
        console.log(document.querySelector('.parent').children)
//     - E.firstElementChild, E.lastElementChild: 요소의 첫 번째 자식 혹은 마지막 자식요소를 반환
        console.log(document.querySelector('.parent').firstElementChild)
        console.log(document.querySelector('.parent').lastElementChild)

// (c) 생성, 조회, 수정
//     - document.createElement(): 메모리에만 존재하는 새로운 HTML 요소를 생성해 봔환
        const divEl = document.createElement('div')
        console.log(divEl)
        const inputEl = document.createElement('input')
        console.log(inputEl)
//     - E.prepend(), E.append(): 노드를 요소의 첫 번째 혹은 마지막 자식으로 삽입
        const parentEl =  document.querySelector('.parent')
        const divEl1 = document.createElement('div')
        divEl1.textContent = 'Hello'
        parentEl.prepend(new Comment('주석'))
        parentEl.append(divEl1, 'Text')
//     - E.remove(): 요소를 제거함
        const childEl = document.querySelector('.child')
        el.remove()
//     - E.insertAdjacentElement(): 대상 요소의 지정한 위치에 새로운 요소를 삽입, (위치, 새로운요소)
        const childEl1 = document.querySelector('.child')
        const newEl = document.createElement('span')
        newEl.textContent = 'hello'
        // beforebegin
        // <div class = "target">
        // afterbegin
        // source
        // beforeend
        // </div>
        // afterend
        childEl1.insertAdjacentElement('beforebegin', newEl)
//     - N.insertBefore(): 부모노드의 자식인 참조 노드의 이전 형제로 노드를 삽입 (노드, 참조노드)
        const parentEl2 = document.querySelector('.parent')
        const childEl2 = document.querySelector('.child')
        const newEl2 = document.createElement('span')
        newEl2.textContent = 'hello2'
        parentEl2.insertBefore(newEl2, childEl2)
//     - N.contains(): 주어진 노드가 노드 자신을 포함한 후손인지 확인
        const parentEl3 = document.querySelector('.parent')
        const childEl3 = document.querySelector('.child')
        console.log(document.body.contains(document.body))
        console.log(document.body.contains(parentEl3))
        console.log(parentEl3.contains(parentEl3))
        console.log(parentEl3.contains(childEl3))
//     - N.textContent(): 노드의 모든 텍스트를 얻거나 변경
        const childEl4 = document.querySelector('.child')
        childEl4.textContent = '111111'
        console.log(childEl4.textContent)
//     - E.innerHTML: 요소의 모든 HTML 내용을 하나의 문자로 얻거나, 새로운 HTML을 지정
        const parentEl4 = document.querySelector('.parent')
        console.log(parentEl4.innerHTML)
        parentEl4.innerHTML = `<div style="border: 1px solid black">
            <span style="color:red;">yeah!</span>
            <span style="color:red;">yeah!</span>
            </div>`
        console.log(parentEl4.innerHTML)

// (d) 생성, 조회, 수정2
//     - E.dataset: 요소의 각 data- 속성 값을 얻거나 지정함
        const childEl = document.querySelector('.child')
        const str = 'hello world!'
        const obj = {a: 1, b:2}
        childEl.dataset.helloworld = str
        childEl.dataset.object = JSON.stringify(obj)
        console.log(childEl.dataset.helloworld, childEl.dataset.object, JSON.parse(childEl.dataset.object))
//     - E.tagName: 요소의 태그 이름을 반환
        const parentEl = document.querySelector('.parent')
        const spanEl = document.createElement('span')
        console.log(parentEl.tagName, childEl.tagName, spanEl.tagName, document.body.tagName)
//     - E.id: 요소의 id 속성 값을 얻거나 지정
        childEl.id = 'child1'
        console.log(childEl.id, childEl)
//     - E.className: 요소의 class 속성 값을 얻거나 지정
        childEl.className += ' child1 active' // 띄어쓰기 주의
        console.log(childEl.className, childEl)
//     - E.classList: 요소의 class 속성 값을 제어, add(), remove(), toggle(), contains()
        childEl.classList.add('active')        
        console.log(childEl.classList.contains('active'))
        childEl.classList.remove('active')        
        console.log(childEl.classList.contains('active'))
        childEl.addEventListener('click', () =>{
            childEl.classList.toggle('active')
            console.log(childEl.classList.contains('active'))
        })
//     - E.style: 요소의 style 속성의 css 속성 값을 얻거나 지정
        Object.assign(childEl.style, {
            width: '100px',
            fontsize: '20px',
            backgroundColor:'green',
            border: '1px solid black'
        })
//     - window.getComputedStyle(): 요소에 적용된 스타일 객체를 반환
        const styles = window.getComputedStyle(childEl)
        console.log(styles.width, styles.fontsize, styles.backgroundColor, styles.border)
//     - E.getAttribute(), E.setAttribute(): 요소에서 특정 속성 값을 얻거나 지정
//       HTML에서 속성은 Attribute CSS, JS에서 속성은 Property
        childEl.setAttribute('title', 'hello hello')
        console.log(childEl.getAttribute('title'))
//     - E.hasAttribute(), E.removeAttribute(): 요소에서 특정 속성을 확인하거나 지정
        console.log(childEl.hasAttribute('class'))
        childEl.removeAttribute('class')
        console.log(childEl.hasAttribute('class'))

// (e) 크기와 좌표
//     - window.scrollX, window.scrollY: 페이지의 좌상단기준, 현재 화면의 수평, 수직 스크롤 위치를 얻음
        console.log(window.scrollX, window.scrollY)
//     - window.scrollTo(), E.scrollTo(): 지정된 좌표로 대상을 스크롤
        setTimeout(() => { window.scrollTo(0, 200, 'smooth') }, 1000)
        const parentEl =  document.querySelector('.parent')
        // setTimeout(() => { parentEl.scrollTo(0, 500, 'smooth') }, 2000);
//     - E.clientWidth, E.clientHeight: 테두리 선을 제외한 요소의 크기를 얻음
        const childEl = document.querySelector('.child')
        console.log(parentEl.clientWidth, parentEl.clientHeight) // scroll바의 너비가 제거되서나옴
        console.log(childEl.clientWidth, childEl.clientHeight)
//     - E.offsetWidth, E.offsetHeight: 테두리 선을 포함한 요소의 크기를 얻음
        console.log(parentEl.offsetWidth, parentEl.offsetHeight)
        console.log(childEl.offsetWidth, childEl.offsetHeight)
//     - E.scrollLeft, E.scrollTop: 스크롤 요소의 좌상단기준, 현재 스크롤 요소의 수평, 수직 스크롤 위치를 얻음
        window.parentEl1 = document.querySelector('.parent')
        console.log(parentEl1.scrollLeft, parentEl1.scrollHeight)
//     - E.offsetLeft, E.offsetTop: 페이지의 좌상단기준, 요소의 위치를 얻음
        console.log(parentEl.offsetLeft, parentEl.offsetTop)
        console.log(childEl.offsetLeft, childEl.offsetTop)
//     - E.getBoundingClientRec(): 테두리 선을 포함한 요소의 크기와 화면에서의 상대 위치 정보를 얻음
        console.log(parentEl.getBoundingClientRect())
        console.log(childEl.getBoundingClientRect())
