**CREATE**

**UPDATE**

**DELETE**

**READ**
* select 문(기본 검색을 위해 사용)
   * select * from x //x에 있는 데이터 전부 출력
   * select x1, x2, x3 from x //x에 있는 특정속성(x1, x2, x3)만 데이터 출력
   
* where 문(조건 검색을 위해 사용)
   * select * from tablex where x1 = '1234' //테이블 x에 있는 x1 속성값이 1234인 경우의 데이터 출력
   * select * from tablex where x1 = '1234' and x2 > '123' //테이블 x에 잇는 x1 속성값이 1234인 경우와 x2 속성값이 123보다 큰 경우의 데이터 출력
   * select * from tablex where date(x3) between '2020-07-13' and '2020-07-14' //테이블 x에 있는 x3의 속성값이 2020-07-13~14일 데이터 출력
   * select * from tablex where x4 in (2,3) //테이블 x에 잇는 x4의 속성값이 2~3사이일 데이터 출력
   * select * from tablex where x5 like '%abcd%' //테이블 x에 있는 x5 속성값 중 특정 키워드(abcd)를 포함한 데이터 출력
   * select count(distinct(x6)) from tablex //테이블 x에서 중복을 제거한 x6 속성값의 개수 추출
   * select count(x) from (select distinct * from tablex) x //전체 데이터에서 중복이 있을때 제거하고 개수 추출
   
* group by(기존 속성으로 묶는 것)
   * select x1, count(*) from tablex group by x1 //테이블 x에서 x1속성으로 묶고, 개수 추출
   * select x2, max(x3) from tablex group by x2 //테이블 x에서 x2속성으로 묶고, x3의 최대값 추출
   * select x2, round(avg(x3),2) from tablex group by x2 //테이블 x에서 x2속성으로 묶고, x3의 소숫점 둘째자리 까지의 평균값 추출
   * select x2, sum(x3) from tablex group by x2 //테이블 x에서 x2 속성으로 묶고, x3의 모든 합 추출

* order by(결과값의 정렬)
   * select x2, count(*) from tablex group by x2 order by count(*) //x2 속성값 별로 개수 집계, 오름차순 정렬(default)
   * select x2, count(*) from tablex group by x2 order by count(*) desc //x2 속성값 별로 개수 집계, 내림차순 정렬

* alias(별칭)
   * select count(*) from tablex x where x.x1 = '1234' //별칭(x)을 사용하면 추후 지정한 값이 너무 복잡해 끌어오기 힘든 상황을 방지 

* join(여러 개의 테이블을 조건에 맞게 테이블을 연결한 것)
   * select * from tablex x inner join tabley y on x.x1 = y.x1 //inner join(테이블 x, y가 있다고 가정할 때, 이 둘의 교집합만을 join) 
   * select * from tablex x left join tabley y on x.x1 = y.x1 //left join(테이블 x, y가 있다고 가정할 때, 왼쪽 테이블 x를 중심으로 join)
   * join된 테이블에서 group by, order by, where 명령을 수행

* union(두 개 이상의 쿼리문을 하나로 합쳐 보여주는 방법)
   * (~query~)union all(~query~)

* subquery(큰 쿼리문 안에 들어가 있는 쿼리문)
   * select x1, x2, x3 from tablex x where x1 in ( select x1 from tabley y where y1 = 'abcd') //테이블 y에서 속성값 y1이 abcd일 때의 테이블 x에서의 속성값 x1, x2, x3을 보임
   * select x.x1, x.x2, x.x3, (select avg(x4) from tablex where x1 = x.x1) as avg_x1 from tablex x //테이블 x에서의 각 x1별 x4값의 평균을 x테이블에 보임
    ```
    select x.x1, x.x2, y.y1 from 
     (
        select x1, count(distinct(x2)) as x2_cnt from tablex group by o1 //o1별 x2의 개수 구하기
     ) a 
     inner join (
      select y1, count(*) as tot_cnt from tabley group by o1 //o1별 총 개수 구하기
     ) b on a.o1 = b.o1 
     inner join tablez z on a.o1 = z.o1 //다른테이블의 속성값을 서브쿼리로 가져온다음 붙여서 새로운 테이블 작성 
     ```
* with(깔끔한 쿼리문 정리)
    ```
    with table1 as
    (
       select x1, count(distinct(x2)) as x2_cnt from tablex group by o1 //o1별 x2의 개수 구하기
    ), table2 as (
       select y1, count(*) as tot_cnt from tabley group by o1 //o1별 총 개수 구하기
    ) 
    select c.z1,
           a.x1,
           b.y1
    from table1 a
    inner join table2 b on a.o1 = b.o1
    inner join table3 c on a.o1 = c.o1
    ```
    
* SUBSTRING_INDEX(문자열 쪼개기)
   * select x1, x2, SUBSTRING_INDEX(x2, '@', 1) from tablex //x2 속성값을 @기준으로 텍스트를 쪼개고, 그 중 첫 번째 조각을 가져옴
   * select x1, x2, SUBSTRING_INDEX(x2, '@', -1) from tablex //x2 속성값을 @기준으로 텍스트를 쪼개고, 그 중 마지막 조각을 가져옴
   
* SUBSTRING(문자열 일부만 출력하기)
   * select x1, x3, substring(x3,1,10) as date from tablex //substring(문자열, 출력을 하고싶은 첫 글자의 위치(1), 몇개의 글자를 출력(10))

* CASE(경우에 따라 원하는 값을 새 필드에 출력)
  ```
  select X1, count(*) as cnt from (
	  select x.x2, x.x3,
	  case 
	  when x.x3 > 10000 then '1만 이상'
	  when x.x3 > 5000 then '5천 이상'
	  else '5천 미만'
	  END as lv
	  from tablex x
  ) a group by lv
  ```




