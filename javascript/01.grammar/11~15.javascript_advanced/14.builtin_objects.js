// [14] 표준 내장 객체
// (a) string
//     - .length: 문자의 길이를 반환
        const str = 'hello world! '
//                   0123456789012
//                  -2109876543210
        console.log(str.length)
//     - .inlcudes(): 대상 문자에 주어진 문자가 포함되있는지 불린형으로 확인
        console.log(str.includes('hello', 0), str.includes('l', 0)) // 두번째 인수로 인덱싱가능
//     - .indexOf(): 대상 문자에서 주어진 문자와 일치하는 첫번째 인덱스를 반환, 없으면 -1 반환
        console.log(str.indexOf('hello'), str.indexOf('!'), str.indexOf('abc'))
//     - .padEnd(): 대상 문자의 길이가 지정된 길이보다 작으면 주어진 문자를 지정된 길이까지 붙여 새로운 문자 반환
        console.log(str.padEnd(20,'0'), str)
//     - .padStart(): padEnd()의 반대
        console.log(str.padStart(20,'0'), str)
//     - .replace(): 대상 문자에서 패턴과 일치하는 부분을 교체한 새로운 문자를 반환
        console.log(str.replace('hello', 'hi'), str.replace(/l/g, 'a'), str)
//     - .slice(): 대상 문자의 일부를 추출해 새로운 문자를 반환, 두 번째 인수 직전까지 추출, 생략하면 문자의 끝까지
        console.log(str.slice(0,5), str.slice(1,6), str.slice(6, -1), str.slice(6))
//     - .split(): 대상 문자를 주어진 구분자로 나눠 배열로 반환
        console.log(str.split(' '), str.split('').reverse().join(''));
//     - .toLowerCase(): 대상 문자를 영어 소문자로 변환해 새로운 문자로 반환
        console.log(str.toLowerCase())
//     - .toUpperCase(): 대상 문자를 영어 대문자로 변환해 새로운 문자로 반환
        console.log(str.toUpperCase())
//     - .trim(): 대상 문자의 앞뒤 공백 문자를 제거한 새로운 문자를 반환
        console.log(str.trim())

// (b) number
//     - .toFixed(): 숫자를 지정된 고정 소수점 표기 까지 표현하는 문자로 반환
        const pi = 3.141592653
        console.log(typeof pi.toFixed(2), pi.toFixed(2), typeof parseFloat(pi.toFixed(2)), parseFloat(pi.toFixed(2)))
        console.log()
//     - .toLocaleString(): 숫자를 현지 언어 형식의 문자로 반환
        console.log(pi.toLocaleString())
        console.log(`${pi.toLocaleString()}원주율`)
//     - Number.isInteger(): 숫자가 정수인지 확인
        const num = 123
        console.log(Number.isInteger(num), Number.isInteger(pi))
//     - Number.isNaN(): 주어진 값이 NaNd인지 확인
        const nan = NaN
        const nl = null
        console.log(Number.isNaN(nan), Number.isNaN(nl))
//     - Number.ParseInt(): 주어진 값을 파싱해 특정 진수의 정수로 반환
        const piStr = '3.141592653'
        console.log(parseInt(piStr, 10), parseInt(pi, 10))
//     - Number.ParseFloat(): 주어진 값을 파싱해 부동소수점 실수로 반환
        console.log(parseFloat(pi), parseFloat(piStr))

// (c) math
//     - Math.abs(): 주어진 숫자의 절대값을 반환
        console.log(Math.abs(-2), Math.abs(3));
//     - Math.ceil(): 주어진 숫자를 올림해 정수를 반환
        const pi = 3.141592653
        console.log(Math.ceil(pi))
//     - Math.floor(): 주어진 숫자를 내림해 정수를 반환
        console.log(Math.floor(pi))
//     - Math.max(): 주어진 숫자의 최대값을 반환
        console.log(Math.max(1,2,3,4))
//     - Math.min(): 주어진 숫자의 최소값을 반환
        console.log(Math.min(1,2,3,4))      
//     - Math.pow(): 주어진 숫자의 거듭제곱한 값을 반환
        console.log(Math.pow(2,3)) // 8
//     - Math.random(): 0이상 1 미만의 난수를 반환
        console.log(Math.random())
        // 특정 범위의 랜덤 정수를 얻는 함수
        function ri(min = 0, max=10){ return Math.floor(Math.random() * (max-min))+min }
        console.log(ri(1, 999))
//     - Math.round(): 주어진 숫자를 반올림해 정수를 반환
        const num = 3.768
        console.log(Math.round(pi), Math.round(num))

// (c) date
//     - Date Sun Sep 03 2023 16:45:58 GMT+0900 (대한민국 표준시)
        const date = new Date()
        console.log(date)
//     - 임의 지정
        const d1 = new Date('Sun Sep 03 2023 16:45:58 GMT+0900 (대한민국 표준시)')
        console.log(d1)
        const d2 = new Date(2022, 11, 16, 12, 56, 11)
        console.log(d2)
//     - .getFullYear(), .setFullYear(): 날짜 인스턴스의 연도를 반환하거나 지정
        d2.setFullYear(1)
        console.log(d2.getFullYear(), d2)
//     -.getMonth(), .setMonth(): 날짜 인스턴스의 월을 반환하거나 지정, 제로베이스넘버링주의
        d2.setMonth(1)
        console.log(d2.getMonth(), d2)
//     - .getDate(), .setDate(): 날짜 인스턴스의 일을 반환하거나 지정
        d2.setDate(1)
        console.log(d2.getDate(), d2)
//     - .getHours(), .setHours(): 날짜 인스턴스의 시간을 반환하거나 지정
        d2.setHours(1)
        console.log(d2.getHours(), d2)
//     - .getMinutes(), .setMinutes(): 날짜 인스턴스의 분을 반환하거나 지정
        d2.setMinutes(1)
        console.log(d2.getMinutes(), d2)
//     - .getSeconds(), .setSeconds(): 날짜 인스턴스의 초를 반환하거나 지정
        d2.setSeconds(1)
        console.log(d2.getSeconds(), d2)
//     - .getDay(): 날짜 인스턴스의 요일을 반환
        const day = d2.getDay()
        console.log(day, dayKor(day))
        // 한국요일로 바꾸기
        function dayKor(day){
            switch(day){
                case 0: return '일'
                case 1: return '월'
                case 2: return '화'
                case 3: return '수'
                case 4: return '목'
                case 5: return '금'
                case 6: return '토'
            }
        }
//     - .getTime(), .setTime(): 유닉스타임으로 부터 경과한 날짜 인스턴스의 밀리초로 반환하거나 지정
        console.log(d2.getTime())
        d2.setTime(62132945211000)
        console.log(d2.getTime(), d2)
        // 시간 전과 후 판별
        Date.prototype.isAfter = function (date) {
            const a = this.getTime()
            const b = date.getTime()
            return a > b
        }
        const d3 = new Date ('Sat Jan 01 2022 00:00:00 GMT+0900 (대한민국 표준시)')
        const d4 = new Date ('Sun Jan 01 2023 00:00:00 GMT+0900 (대한민국 표준시)')
        console.log(d3.isAfter(d4), d4.isAfter(d3))
//     - .Date.now(): 유닉스타임으로부터 경과한 메소드가 호출될 때의 밀리초를 반환
        const time = new Date().getTime();
        console.log(Date.now(), time)
        setTimeout(() => {
            console.log(Date.now(), time) // Date.now()는 동적, time은 정적
        }, 1000)

// (d) array
//     - .length: 배열의 길이를 반환
        const arr1 = ['a', 'b', 'c', 'd']
        const arr2 = ['e', 'f', 'g', 'h']
        //            0    1    2    3 
        console.log(arr1.length)
//     - .at(): 배열을 인덱싱, 음수값을 사용하면 뒤에서부터 인덱싱
        console.log(arr1[0], arr1.at(1), arr1[arr1.length - 2], arr1.at(-1))
//     - .concat(): 배열과 주어진 배열을 병합해 새로운 배열을 반환
        const arr3 = arr1.concat(arr2)
        console.log(arr3, arr3.length)
        // 전개 연산자 사용법
        const arr4 = [...arr1, ...arr2]
        console.log(arr4, arr4.length)
//     - .every(): 배열의 모든 요소가 콜백 테스트에서 참을 반환하는지 확인
        // const isValid = arr4.every(item => { return item < 'i' })
        const isValid = arr4.every(item => item < 'i')
        console.log(isValid)
//     - .filter(): 주어진 콜백테스트를 통과하는 모든 요소를 새로운 배열로 반환, 모든 요소가 통과하지 못하면 빈 배열을 반환
        const filterArr = arr4.filter(item => item < 'e')
        console.log(filterArr)
        // 활용
        const users = [
            {name: 'a', age: 10},
            {name: 'b', age: 20},
            {name: 'c', age: 30}
        ]
        const adults = users.filter(user => user.age >= 19)
        console.log(users, adults)
//     - .find(): 배열에서 콜백 테스트를 통과하는 첫 번째 요소를 반환
        const arr5 = [5, 10, 100, 300, 4000]
        const foundData = arr5.find(item => item > 10)
        console.log(foundData)
//     - .findIndex(): 배열에서 콜백 테스트를 통과하는 첫 번째 요소의 인덱스를 반환
        const index = arr5.findIndex(item => item > 100)
        console.log(index)
//     - .flat(): 배열의 모든 하위 배열을 지정한 깊이까지 이어붙인 새로운 배열을 생성, 기본값은 1
        const arr6 = [1, 2, [3, 4, [5, 6]]]
        console.log(arr6.flat(3))
//     - .forEach(): 배열의 깊이만큼 주어진 콜백을 실행
        const arr7 = ['a', 'b', 'c']
        // for(let i = 0; i < arr7.length; i++) { console.log(arr7[i]) }
        arr7.forEach(item => console.log(item)) // 조건문은 쓸 수 없음
//     - .includes(): 배열이 특정 요소를 포함하고 있는지 확인, boolean
        console.log(arr7.includes('a'))
//     - .join(): 배열의 모든 요소를 구분자로 연결한 문자를 반환
        const arr8 = ['how', 'are', 'u']
        console.log(arr8.join(' '), arr8.join(', '), arr8.join('/'))
//     - .map(): 배열의 길이만큼 주어진 콜백을 실행하고, 콜백의 반환 값을 모아 새로운 배열을 반환
        const num1 = [1,2,3,4]
        const numNew = num1.map(item => item *6 )
        console.log(numNew)
        // 활용
        const users1 = [
            {name: 'a', age: 10},
            {name: 'b', age: 20},
            {name: 'c', age: 30}
        ]
        const newUsers1 = users1.map(user => { return{ ...user, invalid: true, email: null } })
        console.log(newUsers1)
//     - .pop(): 배열에서 마지막 요소를 제거하고 그 요소를 반환, 배열 원본이 변경!!!
        console.log(arr8.pop(), arr8)
//     - .push(): 배열의 마지막에 하나 이상의 요소를 추가하고, 배열의 새로운 길이를 반환, 배열 원본이 변경
        console.log(arr8.push('u'), arr8)
//     - .reduce(): 배열의 길이만큼 주어진 콜백을 실행, 마지막 콜백의 반환값 반환, 각콜백의 반환값은 다음 콜백에 전달
        const sum = num1.reduce((acc, cur) => acc+ cur, 0)
        console.log(sum)
        // 활용 + 메서드 체이닝
        const totalAge = users1.reduce((acc, cur) => acc + cur.age, 0)
        console.log(totalAge)
        const names = users1
        .reduce((acc, cur) => {
            acc.push(cur.name)
            return acc
        }, [])
        .join(',')
        console.log(names)
//     - .reverse(): 배열의 순서를 반전, 원본 변경
        const arr9 = ['a', 'b', 'c']
        console.log(arr9.reverse())
//     - .shift(): 배열에서 처음 요소를 제거하고, 제거된 요소를 반환, 원본 변경
        console.log(arr9.shift(), arr9)
//     - .slice(): 배열의 일부를 추출해 새로운 배열을 반환, 두 번째 인수 직전까지 추출하고, 생략시 끝까지 추출
        const arr10 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']
        console.log(arr10.slice(0,3), arr10.slice(4, -1))
//     - .some(): 배열의 어떤 요소라도 콜백 테스트를 통과하는지 확인
        const isValid1 = arr10.some(item => item > 'h')
        console.log(isValid1)
//     - .sort(): 배열을 정렬, 콜백은 없고 요소를 문자열로 반환하고 유니코드 코드 순서로 정렬, 배열 원본이 변경됨
        const num2 = [5, 7, 1, 2, 4, 3, 6]
        console.log(num2.sort((a,b) => a - b)) // 정순
        console.log(num2.sort((a,b) => b - a)) // 역순
        // 활용
        users1.sort((a,b) => b.age - a.age)
        console.log(users1)
//     - .splice(): 배열에 요소를 추가, 삭제, 교체, 원본변경
        const arr11 = ['a', 'b', 'c', 'd', 'e']
        arr11.splice(2, 2, 'X', 'Y') // 추가, 2번부터 2개의 아이템을 추가
        console.log(arr11)
        arr11.splice(1, 2) // 제거, 1번부터 2개의 아이템을 삭제
        console.log(arr11)
        arr11.splice(0,1, 'X') // 교체, 0번부터 1개의 아이템을 삭제하고 X추가
        console.log(arr11)
//     - .unshift(): 새로운 요소를 배열의 맨 앞에 추가하고 새로운 배열의 길이를 반환, 원본 변경
        console.log(arr11.unshift('X'), arr11)
//     - Array.from(): 유사 배열을 실제 배열로 반환
        const arr = ['a', 'b', 'c']
        const arrLike = {
            0: 'a',
            1: 'b',
            2: 'c',
            length: 3
        } // 배열데이터처럼 보임 하지만 객체임
        console.log(arrLike.constructro === Array, arrLike.constructro === Object)
        Array.from(arrLike).forEach(item => console.log(item))
//     - Array.isArray(): 배열데이터인지 확인함
        console.log(Array.isArray(arr), Array.isArray(arrLike))

// (e) object
//     - Object.assign(): 하나 이상의 출처 객체로부터 대상 객체로 속성을 복사(덮어쓰기)하고 대상 객체를 반환
        const target = {a:1, b:2}
        const source1 = {b:3, c:4}
        const source2 = {c:7, d:5}
        // const result = Object.assign(target, source1, source2)
        const result = {
            ...target,
            ...source1,
            ...source2
        }
        console.log(result)
//     - Object.entries(): 주어진 객체의 각 속성과 값으로 하나의 배열을 만들어 요소를 추가한 2차원 배열을 반환
        const user = {name: 'jone', age: '20', isValid: true, email: 'jone@email.com'}
        console.log(Object.entries(user))
        for(const [k, v] of Object.entries(user)){console.log(k,v)}
//     - Object.keys(): 주어진 객체의 속성 이름을 나열한 배열을 반환
        console.log(Object.keys(user))
//     - Object.values(): 주어진 객체의 속성 값을 나열한 배열을 반환
        console.log(Object.values(user))
// (f) JSON
//     - 데이터 전달을 위한 표준 포맷, 문자(""), 숫자, 불린, Null, 객체, 배열만 사용, 후행 쉼표 x, .json
//     - JSON.stringify(): 데이터를 JSON문자로 변환
        console.log(JSON.stringify('hello'), JSON.stringify(123), JSON.stringify(false))
        console.log(JSON.stringify(null), JSON.stringify({name: 'jone', age: 20}), JSON.stringify([1,2,3]))
//     - JSON.parse(): JSON 문자를 분석해 데이터로 변환
        console.log(JSON.parse('"hello"'), JSON.parse('123'), JSON.parse('false'))
        console.log(JSON.parse('null'), JSON.parse('{"name": "jone", "age": 20}'), JSON.parse('[1,2,3]'))