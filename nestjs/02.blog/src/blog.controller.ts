import {
  Controller,
  Param,
  Body,
  Delete,
  Get,
  Post,
  Put,
} from '@nestjs/common';

import { BlogService } from './blog.service';

// 컨트롤러 클래스 위에 데코레이터를 사용하여 엔드포인트의 베이스 경로를 설정
@Controller('blog')
export class BlogController {
  // 컨트롤러 생성자에서 BlogService를 주입
  constructor(private blogService: BlogService) {}

  // HTTP GET 요청을 처리하는 데코레이터, getAllPosts 함수를 실행하여 모든 블로그 글을 가져옴
  @Get()
  getAllPosts() {
    console.log('모든 글 가져오기');
    return this.blogService.getAllPost();
  }

  // HTTP POST 요청을 처리하는 데코레이터, createPost 함수를 실행하여 새로운 블로그 글을 생성
  @Post()
  createPost(@Body() postDto) {
    console.log('게시글 작성');
    this.blogService.createPost(postDto);
    return '성공';
  }

  // HTTP GET 요청을 처리하며, :id는 동적인 URL 파라미터를 나타냄, getPost 함수를 실행해 특정ID의 블로그 글을 가져옴
  @Get('/:id')
  async getPost(@Param('id') id: string) {
    console.log('게시글 하나 가져오기');
    const post = await this.blogService.getPost(id);
    return post;
  }

  // HTTP DELETE 요청을 처리하며, :id는 동적인 URL 파라미터를 나타냄, deletePost 함수를 실행해 특정ID의 블로그 글을 삭제
  @Delete('/:id')
  deletePost(@Param('id') id: string) {
    console.log('게시글 삭제');
    this.blogService.deletePost(id);
    return '성공';
  }

  // HTTP DELETE 요청을 처리하는 데코레이터, deleteAllPosts 함수를 실행하여 모든 블로그 글을 삭제
  @Delete()
  deleteAllPosts() {
    console.log('게시글 전체 삭제');
    this.blogService.deleteAllPost();
    return '성공';
  }

  // HTTP PUT 요청을 처리하며, :id는 동적인 URL 파라미터를 나타냄, updatePost 함수를 실행해 특정 ID의 블로그 글을 업데이트
  @Put('/:id')
  updatePost(@Param('id') id, @Body() postDto) {
    console.log('게시글 업데이트', id, postDto);
    return this.blogService.updatePost(id, postDto);
  }
}
