import React from 'react'
import { categoryData } from '../../statics/categoryData'
import { useNavigate } from 'react-router-dom';
import styles, { customRenderBullet } from '../../styles/styles'
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CategoryData } from '../../utils/interface';

const Shortcut = () => {
    const navigate = useNavigate();
    const handleSubmit = (i: CategoryData) => { navigate(`/product?category=${i.title}`); };
    return (
        <div className={`${styles.sc_section}`}>
            {/* <h1 className={`${styles.n_section_title}`}>바로가기</h1> */}
            {/* 카테고리 슬라이드 */}
            <Swiper
                breakpoints={{
                    384: { slidesPerView: 5, spaceBetween: 1 },
                    576: { slidesPerView: 10, spaceBetween: 3 },
                }}
                pagination={{ clickable: true, renderBullet: customRenderBullet }}
                modules={[Pagination]}
                className={`${styles.sc_swiper_container}`}
            >
                {categoryData.map((i) => (
                    <SwiperSlide key={i.id}>
                        <div onClick={() => handleSubmit(i)} className={`${styles.sc_swiper_item}`}>
                            <img className={`${styles.sc_swiper_item_img}`} src={i.image_Url} />
                            <h1>{i.title.length > 6 ? `${i.title.slice(0, 6)}..` : `${i.title}`}</h1>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div >
    )
}

export default Shortcut