import { readFile, writeFile } from 'fs/promises';
import { PostDto } from './blog,model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Blog, BlogDocument } from './blog.schema';

// 블로그 리포지토리 인터페이스 정의
export interface BlogRepository {
  getAllPost(): Promise<PostDto[]>;
  getPost(id: string): Promise<PostDto>;
  createPost(postDto: PostDto);
  deletePost(id: string);
  updatePost(id: string, postDto: PostDto);
}

@Injectable()
export class BlogFileRepository implements BlogRepository {
  FILE_NAME = 'blog.data.json'; // 블로그 글 데이터 파일 이름

  // 모든 블로그 글 가져오기
  async getAllPost(): Promise<PostDto[]> {
    const datas = await readFile(this.FILE_NAME, 'utf-8'); // 파일에서 데이터 읽기
    const posts = JSON.parse(datas); // JSON 형식의 데이터로 변환
    return posts;
  }

  // 새 블로그 글 작성
  async createPost(postDto: PostDto) {
    const posts = await this.getAllPost(); // 기존 블로그 글 데이터 가져오기
    const id = posts.length + 1; // 새 글의 ID 계산
    const createPost = { id: id.toString(), ...postDto, createdDt: new Date() }; // 새 글 데이터 생성
    posts.push(createPost); // 새 글 추가
    await writeFile(this.FILE_NAME, JSON.stringify(posts)); // 파일에 새 데이터 저장
  }

  // 특정 ID의 블로그 글 가져오기
  async getPost(id: string): Promise<PostDto> {
    const posts = await this.getAllPost(); // 모든 블로그 글 데이터 가져오기
    const result = posts.find((post) => post.id === id); // 특정 ID의 글 찾기
    return result;
  }

  // 특정 ID의 블로그 글 삭제
  async deletePost(id: string) {
    const posts = await this.getAllPost(); // 모든 블로그 글 데이터 가져오기
    const filteredPosts = posts.filter((post) => post.id !== id); // 특정 ID의 글을 제외한 글들로 필터링
    await writeFile(this.FILE_NAME, JSON.stringify(filteredPosts)); // 변경된 데이터 파일에 저장
  }

  // 모든 블로그 글 삭제
  async deleteAllPost() {
    const resetPosts = []; // 빈 배열로 초기화하여 모든 글 삭제
    await writeFile(this.FILE_NAME, JSON.stringify(resetPosts)); // 변경된 데이터 파일에 저장
  }

  // 특정 ID의 블로그 글 업데이트
  async updatePost(id: string, postDto: PostDto) {
    const posts = await this.getAllPost(); // 모든 블로그 글 데이터 가져오기
    const index = posts.findIndex((post) => post.id === id); // 특정 ID의 글 인덱스 찾기
    const updatePost = { id, ...postDto, updatedDt: new Date() }; // 업데이트할 글 데이터 생성
    posts[index] = updatePost; // 글 업데이트
    await writeFile(this.FILE_NAME, JSON.stringify(posts)); // 변경된 데이터 파일에 저장
  }
}

@Injectable()
export class BlogMongoRepository implements BlogRepository {
  constructor(@InjectModel(Blog.name) private blogModel: Model<BlogDocument>) {}

  // MongoDB에서 모든 블로그 글 가져오기
  async getAllPost(): Promise<Blog[]> {
    return await this.blogModel.find().exec();
  }

  // 새 블로그 글 MongoDB에 작성
  async createPost(postDto: PostDto) {
    const createPost = {
      ...postDto,
      createdDt: new Date(),
      updatedDt: new Date(),
    };
    this.blogModel.create(createPost);
  }

  // 특정 ID의 블로그 글 MongoDB에서 가져오기
  async getPost(id: string): Promise<PostDto> {
    return await this.blogModel.findById(id);
  }

  // 특정 ID의 블로그 글 MongoDB에서 삭제
  async deletePost(id: string) {
    await this.blogModel.findByIdAndDelete(id);
  }

  // 모든 블로그 글 MongoDB에서 삭제
  async deleteAllPost() {
    await this.blogModel.deleteMany();
  }

  // 특정 ID의 블로그 글 업데이트
  async updatePost(id: string, postDto: PostDto) {
    const updatePost = { id, ...postDto, updatedDt: new Date() };
    await this.blogModel.findByIdAndUpdate(id, updatePost);
  }
}
