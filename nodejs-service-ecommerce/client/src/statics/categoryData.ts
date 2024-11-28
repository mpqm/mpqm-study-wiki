const wf_winterlook = [
  { id: 0, title: '겨울코트' },
  { id: 1, title: '겨울패딩' },
  { id: 2, title: '겨울니트' },
  { id: 3, title: '기모' },
  { id: 4, title: '신발' },
  { id: 5, title: '머플러' },
  { id: 6, title: '장갑' },
  { id: 7, title: '트루퍼햇' },
];

const wf_bagwallet = [
  { id: 0, title: '핸드백' },
  { id: 1, title: '지갑' },
];

const wf_clothes = [
  { id: 0, title: '원피스' },
  { id: 1, title: '상의' },
  { id: 2, title: '하의' },
  { id: 3, title: '아우터' },
  { id: 4, title: '수트/셋업' },
  { id: 5, title: '운동복' },
  { id: 6, title: '테마의류' },
  { id: 7, title: '수영복/비치웨어' },
  { id: 7, title: '임산부의류' },
];

const wf_shoes = [
  { id: 0, title: '단화' },
  { id: 1, title: '운동화/스니커즈' },
  { id: 2, title: '힐/펌프스' },
  { id: 3, title: '뮬/샌들' },
  { id: 4, title: '슬리퍼/실내화' },
  { id: 5, title: '기능화' },
  { id: 6, title: '부츠/워커' },
  { id: 7, title: '신발용품' },
];

const womanFasion = [
  { id: 0, title: '겨울룩', sub: wf_winterlook },
  { id: 1, title: '명품가방/지갑', sub: wf_bagwallet },
  { id: 2, title: '여성의류', sub: wf_clothes },
  { id: 3, title: '여성신발', sub: wf_shoes },
  { id: 4, title: '여성가방/지갑' },
  { id: 5, title: '탄생석' },
  { id: 6, title: '주얼리' },
  { id: 7, title: '언더웨어/잠옷' },
  { id: 8, title: '시계' },
];

const manFasion = [
  { id: 0, title: '겨울룩', sub: wf_winterlook },
  { id: 1, title: '남성의류', sub: wf_clothes },
];

export const categoryData = [
  {
    id: 0,
    title: '여성패션',
    image_Url: 'https://shop-phinf.pstatic.net/20231212_209/1702369541918JpBLp_PNG/EC97ACEC84B1ED8CA8EC8598.png?type=f305_305',
    sub: womanFasion,
  },
  {
    id: 1,
    title: '여성패션',
    image_Url: 'https://shop-phinf.pstatic.net/20231212_209/1702369541918JpBLp_PNG/EC97ACEC84B1ED8CA8EC8598.png?type=f305_305',
    sub: womanFasion,
  },
  {
    id: 2,
    title: '남성패션',
    image_Url: 'https://shop-phinf.pstatic.net/20231212_44/1702369555832SJlvQ_PNG/EB82A8EC84B1ED8CA8EC8598.png?type=f305_305',
    sub: manFasion,
  },
  {
    id: 3,
    title: '남성패션',
    image_Url: 'https://shop-phinf.pstatic.net/20231212_44/1702369555832SJlvQ_PNG/EB82A8EC84B1ED8CA8EC8598.png?type=f305_305',
    sub: manFasion,
  },
  {
    id: 4,
    title: '남성패션',
    image_Url: 'https://shop-phinf.pstatic.net/20231212_44/1702369555832SJlvQ_PNG/EB82A8EC84B1ED8CA8EC8598.png?type=f305_305',
    sub: manFasion,
  },
  {
    id: 5,
    title: '남성패션',
    image_Url: 'https://shop-phinf.pstatic.net/20231212_44/1702369555832SJlvQ_PNG/EB82A8EC84B1ED8CA8EC8598.png?type=f305_305',
    sub: manFasion,
  },
  {
    id: 6,
    title: '남성패션',
    image_Url: 'https://shop-phinf.pstatic.net/20231212_44/1702369555832SJlvQ_PNG/EB82A8EC84B1ED8CA8EC8598.png?type=f305_305',
    sub: manFasion,
  },
  {
    id: 7,
    title: '남성패션',
    image_Url: 'https://shop-phinf.pstatic.net/20231212_44/1702369555832SJlvQ_PNG/EB82A8EC84B1ED8CA8EC8598.png?type=f305_305',
    sub: manFasion,
  },
  {
    id: 8,
    title: '남성패션',
    image_Url:'https://shop-phinf.pstatic.net/20231212_44/1702369555832SJlvQ_PNG/EB82A8EC84B1ED8CA8EC8598.png?type=f305_305',
    sub: manFasion,
  },
  {
    id: 9,
    title: '남성패션',
    image_Url: 'https://shop-phinf.pstatic.net/20231212_44/1702369555832SJlvQ_PNG/EB82A8EC84B1ED8CA8EC8598.png?type=f305_305',
    sub: manFasion,
  },
];
