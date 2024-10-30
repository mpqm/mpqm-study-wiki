// [4] Window Object
// (a) window 객체란?
//     - 브라우저의 객체이며 브라우저에 의해 자동으로 생성, javascript 객체가 아님
//     - window 객체를 이용해 브라우저 창의 정보를 알고, 제어 가능
//     - var 키워드로 변수를 선언하거나 함수를 선언하면 이 window 객체의 property가 됨
        console.log(window.innerWidth, window.innerHeight);
        console.log(window.outerWidth, window.outerHeight);
        console.log(window.scrollX, window.scrollY);
        console.log(window.history);
        console.log(window.navigator.userAgent, window.navigator.language);
        // const input = prompt('이동하려는 홈페이지 url을 작성');
        // alert(input);
        // window.location.href = input