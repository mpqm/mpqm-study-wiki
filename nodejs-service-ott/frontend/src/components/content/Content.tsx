import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useEffect, useState } from "react";
import { ContentModel } from "../../network/Model";
import * as OttApi from "../../network/OttApi";
import ContentItem from '../contentItem/ContentItem';
import Search from "../search/Search";
import "./content.scss";

interface ContentProps {
    type: string, // 영화인지 시리즈인지
    genre: string // 장르
}

const Content = ({ type, genre }: ContentProps) => {
    // 가로 스크롤 위치를 관리하는 상태 변수
    const [scrollX, setScrollX] = useState(0);

    // API에서 받아온 콘텐츠 항목들을 저장하는 상태 변수
    const [contentItems, setContentItems] = useState<ContentModel | null>(null);

    // 모든 콘텐츠 항목을 저장하는 상태 변수 (만약 타입이 "home"인 경우 셔플된 상태)
    const [content, setContent] = useState<ContentModel[]>([]);

    useEffect(() => {
        // 조건식에 따른 콘텐츠를 가져오는 비동기 함수
        const getContents = async () => {
            try {
                // 검색 페이지인 경우 아무 작업도 하지 않음
                if (type === "search") { return }
                // 홈 페이지가 아니고 장르가 지정된 경우 해당 타입과 장르에 맞는 콘텐츠를 가져옴
                else if (type !== "home" && genre !== "") {
                    const content = await OttApi.getContent(type, genre);
                    setContent([content]);
                    setContentItems(content[0].content);
                }
                // 그 외의 경우 홈 페이지이거나 장르가 지정되지 않은 경우
                else {
                    let allContentItems = [];
                    // 홈 페이지용 모든 콘텐츠를 가져옴
                    if (type === "home") {
                        const content = await OttApi.getContent("", "");
                        // 2중 배열 합치기
                        allContentItems = content.reduce((acc: string | any[], cur: { content: any }) => acc.concat(cur.content), []);
                    }
                    // 타입은 지정되어있지만 장르가 null일때의 경우(잘못된 조건식)
                    else {
                        const content = await OttApi.getContent(type, genre);
                        allContentItems = content.reduce((acc: string | any[], cur: { content: any }) => acc.concat(cur.content), []);
                    }
                    // Fisher-Yates 알고리즘을 사용해 콘텐츠 항목들을 셔플
                    for (let i = allContentItems.length - 1; i > 0; i--) {
                        const randomIndex = Math.floor(Math.random() * (i + 1));
                        [allContentItems[i], allContentItems[randomIndex]] = [
                            allContentItems[randomIndex],
                            allContentItems[i],
                        ];
                    }
                    setContentItems(allContentItems);
                }
            } catch (error) { console.error(error); }
        };

        getContents();
    }, [type, genre]);

    // 왼쪽 버튼 클릭 처리기 (왼쪽으로 스크롤)
    const handleBtnLeftClick = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if (x > 0) { x = 0; }
        setScrollX(x);
    };

    // 오른쪽 버튼 클릭 처리기 (오른쪽으로 스크롤)
    const handleBtnRightClick = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = contentItems?.length * 160;
        if (window.innerWidth - listW > x) { x = window.innerWidth - listW - 60; }
        setScrollX(x);
    };

    return (
        <>
            {type === "search"
                // 타입이 "search"인 경우 검색 컴포넌트를 렌더링, 그 외의 경우 콘텐츠 캐러셀을 렌더링
                ? <Search type={type} genre={genre} />
                : <div className="content">
                    <div className="contentButtonleft contentButton" onClick={handleBtnLeftClick}>
                        <ArrowBackIosIcon style={{ fontSize: 20 }} />
                    </div>
                    <div className="contentButtonright contentButton" onClick={handleBtnRightClick}>
                        <ArrowForwardIosIcon style={{ fontSize: 20 }} />
                    </div>
                    < div className="carousel">
                        {/* 콘텐츠 항목들을 매핑해 ContentItem 컴포넌트를 렌더링 */}
                        <div className="contentItems" style={{ marginLeft: scrollX, width: contentItems ? contentItems.length * 160 : 0 }}>
                            {contentItems?.map((item: string, index: any) => <ContentItem url={item} key={index} />)}
                        </div>
                    </div>
                </div >
            }
        </>
    );
}

export default Content;