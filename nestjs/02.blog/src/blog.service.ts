import { PostDto } from './blog,model';
import { Injectable } from '@nestjs/common';
import { BlogMongoRepository } from './blog.repository'; // MongoDB를 저장소로 사용
// import { BlogFileRepository } from './blog.repository'; // blog.data.json을 저장소로 사용

@Injectable()
export class BlogService {
  constructor(private blogRepository: BlogMongoRepository) {} // MongoDB를 저장소로 사용
  // constructor(private blogRepository: BlogFileRepository) {} // blog.data.json을 저장소로 사용

  // 모든 블로그 글 가져오기
  async getAllPost() {
    return this.blogRepository.getAllPost();
  }

  // 새로운 블로그 글 작성
  createPost(postDto: PostDto) {
    this.blogRepository.createPost(postDto);
  }

  // 특정 ID의 블로그 글 가져오기
  async getPost(id) {
    return await this.blogRepository.getPost(id);
  }

  // 특정 ID의 블로그 글 삭제
  deletePost(id) {
    this.blogRepository.deletePost(id);
  }

  // 모든 블로그 글 삭제
  async deleteAllPost() {
    return this.blogRepository.deleteAllPost();
  }

  // 특정 ID의 블로그 글 업데이트
  updatePost(id, postDto: PostDto) {
    this.blogRepository.updatePost(id, postDto);
  }
}
