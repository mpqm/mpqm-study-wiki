const { ObjectId } = require("mongodb"); 
const paginator = require("./paginator");

// 게시물 작성 함수
async function writePost(collection, post) {
  post.hits = 0; // 조회수 초기화
  post.createdDt = new Date().toISOString(); // 현재 날짜로 작성일시 설정
  return await collection.insertOne(post); // 게시물 데이터를 컬렉션에 삽입하고 결과 반환
}

// 게시물 목록 조회 함수
async function list(collection, page, search) {
  const perPage = 10; // 페이지당 아이템 수
  const query = { title: new RegExp(search, "i") }; // 제목에 검색어가 포함된 게시물을 찾기 위한 쿼리
  const cursor = collection.find(query, { limit: perPage, skip: (page - 1) * perPage }).sort({ createdDt: -1 }); // 쿼리 실행 및 정렬
  const totalCount = await collection.count(query); // 총 게시물 수 계산
  const posts = await cursor.toArray(); // 쿼리 결과를 배열로 변환
  const paginatorObj = paginator({ totalCount, page, perPage: perPage }); // 페이지네이션 정보 생성
  return [posts, paginatorObj]; // 조회한 게시물과 페이지네이션 정보 반환
}

// 상세 게시물 조회 함수
async function getDetailPost(collection, id) {
  return await collection.findOneAndUpdate(
    { _id: new ObjectId(id) }, // 주어진 id에 해당하는 게시물 조회 및 업데이트
    { $inc: { hits: 1 } } // 조회수 증가
  );
}

// 비밀번호 포함 게시물 조회 함수
async function getPostByIdAndPassword(collection, { id, password }) {
  return await collection.findOne({ _id: new ObjectId(id), password: password }); // 주어진 id와 비밀번호로 게시물 조회
}

// 게시물 id로 조회 함수
async function getPostById(collection, id) {
  return await collection.findOne({ _id: new ObjectId(id) }); // 주어진 id로 게시물 조회
}

// 게시물 업데이트 함수
async function updatePost(collection, id, post) {
  const toUpdatePost = { $set: { ...post } }; // 업데이트할 게시물 데이터 설정
  return await collection.updateOne({ _id: new ObjectId(id) }, toUpdatePost); // 주어진 id에 해당하는 게시물 업데이트
}

// 모듈 내보내기
module.exports = {
  list, 
  writePost, 
  getDetailPost, 
  getPostById, 
  getPostByIdAndPassword,
  updatePost,
};
