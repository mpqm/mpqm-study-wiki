<template>
    <div class="footer">
        <div class="footer-top">
            <div class="footer-top-left">
                <div>
                    고객 센터 1644-0560운영시간 : 평일 10:00 ~ 17:00 (점심시간 12:30 ~
                    13:30 제외 / 주말 및 공휴일 제외)
                </div>
                <div class="customer-service-btns">
                    <a class="customer-service-btn" href="#">
                        FAQ
                        <i class="fa-solid fa-chevron-right"></i></a>
                    <a class="customer-service-btn" href="#">1:1 문의 <i class="fa-solid fa-chevron-right"></i></a>
                </div>
            </div>
            <div class="footer-top-right">
                <div class="footer-icon">
                    <a href="#">
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                </div>
                <div class="footer-icon">
                    <a href="#">
                        <i class="fa-brands fa-youtube"></i>
                    </a>
                </div>
                <div class="footer-icon">
                    <a href="#">
                        <i class="fa-brands fa-apple"></i>
                    </a>
                </div>
                <div class="footer-icon">
                    <a href="#">
                        <i class="fa-brands fa-google-play"></i>
                    </a>
                </div>
            </div>
        </div>
        <div class="footer-middle">
            <div class="footer-middle-left">
                <h2 class="css-7wha64 e1k5vzjb1">NOTICE</h2>
                <ul>
                    <li class="css-1jn05mz e1k5vzjb2">
                        <a class="css-1w8ypd0 e1k5vzjb3" href="#">[공지] 29CM 개인정보 처리방침 개정 사전 안내 (시행일 : 2024년
                            1월 24일)</a>
                    </li>
                    <li class="css-8b30vy e1k5vzjb2">
                        <a class="css-1w8ypd0 e1k5vzjb3" href="#">[공지] 29CM 개인정보 처리방침 개정 사전 안내</a>
                    </li>
                    <li class="css-8b30vy e1k5vzjb2">
                        <a class="css-1w8ypd0 e1k5vzjb3" href="#">[공지] 현대카드 청구할인 혜택 제외 카드 안내</a>
                    </li>
                </ul>
            </div>
            <div class="footer-middle-right">
                <ul class="footer-middle-right-list">
                    <li class="footer-middle-right-list-item">
                        <h2 class="footer-middle-right-list-item-title">ABOUT US</h2>
                        <a href="#">29CM 소개</a>
                        <a href="#">인재채용</a>
                        <a href="#">상시 할인 혜택</a>
                    </li>

                    <li class="footer-middle-right-list-item">
                        <h2 class="footer-middle-right-list-item-title">MY ORDER</h2>
                        <a href="#">주문배송</a>
                        <a href="#">취소/교환/반품 내역</a>
                        <a href="#">상품리뷰 내역</a>
                        <a href="#">증빙서류발급</a>
                    </li>

                    <li class="footer-middle-right-list-item">
                        <h2 class="footer-middle-right-list-item-title">MY ACCOUNT</h2>
                        <a href="#">회원 정보 수정</a>
                        <a href="#">회원 등급</a>
                        <a href="#">마일리지 현황</a>
                        <a href="#">쿠폰</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="footer-bottom-left">
                <div>
                    <a href="#">
                        <strong>개인정보처리방침</strong>
                    </a>
                    <a href="#"> 이용약관 </a>
                </div>

                <div class="bottom-info">
                    상호명(주)무신사사업장소재지서울특별시 성동구 아차산로 13길 11, 1층
                    (성수동2가, 무신사캠퍼스
                    엔1)팩스070-8622-7737사업자등록번호211-88-79575 <br />
                    통신판매업신고2022-서울성동-01952<br />
                    전화번호1644-0560이메일customer@29cm.co.kr대표이사한문일개인정보
                    보호책임자이인섭호스팅서비스(주)무신사<br />
                    일부 상품의 경우 29CM는 통신판매의 당사자가 아닌 통신판매중개자로서
                    상품, 상품정보, 거래에 대한 책임이 제한될 수 있으므로, 각 상품
                    페이지에서 구체적인 내용을 확인하시기 바랍니다.
                </div>
            </div>
            <div class="footer-bottom-right">
                <div class="inicis">
                    <a class="inicis-logo" href="#">
                        <span class="css-y9tiu2 e1bq4unz3">
                            이니시스 결제시스템 유효성 확인
                        </span>
                    </a>
                    <span class="css-1k3wlg9 e1bq4unz2">
                        KG 에스크로<br />
                        가입 사실 확인
                    </span>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: "FooterComponent",
    data() {
        return { message: "test" }
    }
}

</script>

<style scoped>
.footer {
    padding: 0px 50px;
}

.footer-top {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.footer-top-left {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.customer-service-btns {
    display: flex;
    margin-top: 10px;
}

.customer-service-btn {
    position: relative;
    box-sizing: border-box;
    width: 94px;
    padding-left: 14px;
    font-size: 15px;
    line-height: 30px;
    color: white;
    background: black;
    border-radius: 2px;
}

.customer-service-btn:nth-child(2) {
    margin-left: 4px;
}

.footer-top-right {
    position: absolute;
    display: flex;
    right: 0;
    bottom: 0;
    height: 30px;
}

.footer-icon {
    display: inline-block;
    line-height: 30px;
    text-align: center;
    vertical-align: bottom;
    width: 30px;
    height: 30px;
    font-size: 15px;
    margin-left: 6px;
    background-color: black;
    border-radius: 100%;
}

.footer-icon>a {
    color: white;
}

.footer-middle {
    border-top: 1px solid lightgrey;
    margin-top: 17px;
    padding-top: 9px;
    padding-bottom: 6px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.footer-middle-left {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.footer-middle-right {
    position: absolute;
    display: flex;
    right: 0;
    height: 30px;
}

.footer-middle-right-list {
    display: flex;
    flex-direction: row;
}

.footer-middle-right-list-item {
    display: flex;
    flex-direction: column;
}

.footer-middle-right-list-item-title {
    padding-right: 103px;
}

.footer-bottom {
    border-top: 1px solid lightgrey;
    margin-top: 30px;
    padding-top: 9px;
    padding-bottom: 6px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.footer-bottom-left {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.footer-bottom-right {
    position: absolute;
    display: flex;
    right: 0;
    height: 30px;
}

.inicis {
    position: relative;
    display: flex;
    top: 50px;
    right: 50px;
}

.inicis-logo {
    overflow: hidden;
    display: inline-block;
    width: 42px;
    height: 42px;
    line-height: 100em;
    vertical-align: top;
    background: url("https://img.29cm.co.kr/next29cm/sp_pc_footer.jpg");
    background-position: 0 -27px;
    background-size: 162px 69px;
    padding-right: 8px;
}

.bottom-info {
    padding-top: 10px;
    font-size: 13px;
    line-height: 30px;
}
</style>