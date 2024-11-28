const styles = {
  custom_container: 'w-11/12 hidden sm:block',
  heading:
    'text-[27px] text-center xl:text-start font-[600] font-Roboto pb-[20px]',
  section: 'w-11/12 mx-auto',
  productTitle: 'text-[25px] font-[600] font-Roboto text-[#333]',
  productDiscountPrice: 'font-bold text-[18px] text-[#333] font-Roboto',
  price: 'font-[500] text-[16px] text-[#d55b45] pl-3 mt-[-4px] line-through',
  shop_name: 'pt-3 text-[15px] text-blue-400 pb-3',
  active_indicator: 'absolute bottom-[-27%] left-0 h-[3px] w-full bg-[crimson]',
  category_buttion:
    'relative border-[#3957db] bg-white h-[40px] w-[300px] hidden text 1000px:block',
  cart_button:
    'px-[20px] h-[38px] rounded-[20px] bg-[#f63b60] flex items-center justify-center cursor-pointer',
  cart_button_text: 'text-[#fff] text-[16px] font-[600]',
  // input: 'w-full border p-1 rounded-[5px]',
  activeStatus:
    'w-[10px] h-[10px] rounded-full absolute top-0 right-1 bg-[#40d132]',
  noramlFlex: 'flex items-center',





  // 기본
  n_section: 'w-11/12 mx-auto mb-3',
  n_section_title: 'mb-3 border-y-[1px] border-black text-md xl:text-xl font-bold text-center',
  n_input_icon: 'absolute right-3 top-3 cursor-pointer',
  n_lr_align: 'flex items-center justify-between space-x-1 p-1',
  n_center_align: 'flex justify-center items-center p-1 space-x-1',
  n_hover: 'hover:opacity-30 cursor-pointer',
  n_opacity: 'opacity-30',
  n_input_label: 'text-sm mb-3',
  n_btn: 'w-full h-[40px] flex justify-center items-center p-3 border-[1px] border-black hover:opacity-30 cursor-pointer',
  n_input: 'appearance-none block w-full p-3 focus:outline-none focus:ring-1 focus:ring-black border-[1px] border-black',
  n_flex_col: 'flex flex-col',
  n_flex_row: 'flex flex-row',
  n_flex_center:'flex items-center space-x-3',
  n_show_hidden: 'hidden xl:block',
  n_overflow_x_scroll:'flex overflow-x-scroll whitespace-nowrap',
  n_big_logo: "flex text-sm font-extrabold mb-1 xl:block xl:text-2xl",

  // auth
  au_container: 'min-h-screen flex flex-col justify-center p-5',
  au_title: 'mx-auto w-full max-w-xl text-center text-3xl font-bold mb-3 space-y-3',
  au_form: 'mx-auto w-full max-w-xl border-[1px] border-black p-5 space-y-3',
  au_visible: 'absolute right-3 top-3',
  au_img:'flex h-[80px] w-[80px] justify-center object-cover rounded-full',

  // 슬라이더
  sd_section: 'w-11/12 mx-auto h-[400px] mb-3 relative group ',
  sd_img: 'w-full h-full bg-center bg-cover',
  sd_lbtn: 'absolute top-[50%] -translate-x-0 translate-y-[-50%] text-3xl rounded-full p-3 border-[1px] border-black bg-white cursor-pointer left-5',
  sd_rbtn: 'absolute top-[50%] -translate-x-0 translate-y-[-50%] text-3xl rounded-full p-3 border-[1px] border-black bg-white cursor-pointer right-5',
  sd_idx_view: 'absolute bottom-5 right-0 left-0 flex items-center justify-center gap-2',
  sd_idx_dot: 'transition-all w-[8px] h-[8px] bg-black rounded-full',

  // 헤더
  hd_section: 'w-11/12 mx-auto h-[50px] my-[15px] flex flex-col items-center justify-between xl:flex xl:flex-row',
  hd_search_container: 'w-full relative mb-1 xl:w-[75%]',
  hd_search_input: 'flex w-full h-[40px] p-1 border-[1px] border-black focus:outline-none xl:w-full',
  hd_search_list: 'absolute w-full bg-white z-[9] top-[100%] p-3 border-r-[1px] border-b-[1px] border-black',
  hd_search_item_container:'w-full flex items-start p-1 hover:opacity-30',
  hd_search_item_img: 'w-[30px] h-[30px]',
  hd_search_item_title:'text-sm xl:text-md ml-1',

  // 네비게이션 바
  nb_section: 'w-11/12 mx-auto transition flex items-center bg-white border-r-[1px] border-y-[1px] border-black h-[50px] mb-3 justify-between',
  nb_section_scroll: 'w-full fixed top-0 left-0 z-10 m-0',
  nb_item_category:'relative flex items-center justify-between mr-3',
  nb_item_category_btn:'bg-white h-[50px] w-[111px] xl:w-[201px] border-[1px] border-black hover:opacity-30 items-center justify-center flex space-x-3',
  nb_item:'flex w-[90px] bg-white p-3 items-center justify-center cursor-pointer border-l-[1px] border-black',

  // 카테고리 드롭다운
  cg_dropdown_container: 'absolute top-[100%] left-0 flex flex-row bg-white z-30 border-b-[1px] border-x-[1px] border-black w-[339px] xl:w-[609px] pb-5',
  cg_dropdown_item: 'cursor-pointer select-none text-xs xl:text-base hover:opacity-30 border-b-[1px] border-black p-3 w-[110px] xl:w-[200px]',

  // 위로가기
  mtt_btn: 'fixed z-99999 bg-white w-[40px] h-[40px] cursor-pointer flex items-center p-3 border-[1px] border-black  bottom-10 right-3 ',

  // 푸터
  ft_section: 'hidden xl:block w-11/12 mx-auto border-t-[1px] border-x-[1px] border-black text-[20px] text-center bg-white p-3',
  ft_container: 'flex justify-center items-center my-3 space-x-3 text-sm',
  ft_c_input: 'p-3 w-[30%] border-[1px] appearance-none block h-[30px] border-black focus:outline-none',
  ft_c_btn: 'px-3 hover:opacity-30 border-black border-[1px] h-[30px] text-[15px] items-center justify-center',

  // 바로가기
  sc_section: 'w-11/12 mx-auto mb-3 z-0',
  sc_swiper_container: 'border-[1px] border-black',
  sc_swiper_item: 'flex flex-col items-center justify-center text-xs xl:text-sm mb-10',
  sc_swiper_item_img: 'border-[1px] border-black rounded-full object-cover w-[50px] h-[50px] xl:w-[100px] xl:h-[100px] mt-5 mb-1',
  
  // 카트, 관심목록 오른쪽 탭
  rt_bg: 'fixed top-0 left-0 w-full bg-black/5 h-screen z-10',
  rt_header: 'flex w-full justify-between p-3 text-xl',
  rt_container: 'space-y-1 p-3 fixed top-3 xl:right-3 h-auto w-[99%] xl:w-[30%] bg-white flex flex-col',
  rt_item_container: 'border-y p-1 w-full flex justify-between space-x-1',
  rt_item_count_container: 'flex flex-col items-center justify-center text-md',
  rt_item_count_btn: 'w-[25px] h-[25px] flex items-center cursor-pointer hover:opacity-30',
  rt_item_img: 'w-[75px] h-[75px]',
  rt_item_content: 'flex flex-col space-y-1 overflow-x-auto text-sm xl:text-base',
  
  // 프로필
  pf_section:"w-11/12 mx-auto mb-3 flex border-[1px] border-black",
  pf_sidebar_section:"w-[50px] xl:w-[350px]",
  pf_sidebar_container:'w-full h-full border-r-[1px] border-black mb-3',
  pf_sidebar_menu:'flex items-center cursor-pointer w-full border-b-[1px] space-x-3 text-md p-3',
  pf_content_section:"w-full overflow-x-auto p-3",
  pf_privacy_container:'w-full block xl:flex xl:space-x-3',
  pf_privacy_input_container:'w-full xl:w-[50%] space-y-1 mb-3',
  pf_delivery_info_item:'w-full h-auto flex items-center justify-between border-[1px] border-black p-1 text-sm xl:text-md mt-3',
  pf_payment_method_item:'w-full h-auto flex items-center justify-between border-[1px] border-black p-1 text-sm xl:text-md mt-3',
  pf_payment_method_item_img:"w-[20px] xl:w-[50px]",
  
  // 상품아이템

  // 판매자-대시보드헤더
  dbhd_section:`my-[15px] w-11/12 mx-auto h-[50px] bg-white sticky top-0 left-0 z-30 flex items-center justify-between`,
  dbhd_icon:"flex items-center size-5 xl:size-8 cursor-pointer hover:opacity-30",
  db_section:"w-11/12 mx-auto mb-3 flex border-[1px] border-black",
  dbsb_section:"w-[50px] xl:w-[350px]",
};

export const customRenderBullet = (index: number, className: string) => `<span class='${className}' style='background-color: black;'></span>`;

export default styles;
