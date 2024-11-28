import { RequestHandler } from "express";
import MovieModel from "../models/movie";

// 영화를 생성하는 컨트롤러 함수
export const createMovie: RequestHandler = async (req, res, next) => {
  try {
    const movie = await MovieModel.create(req.body); // 요청에서 받은 데이터를 사용해 영화를 DB에 생성
    res.status(201).json(movie); // 생성된 영화 정보를 클라이언트에게 응답
  } catch (error) { next(error); } // 에러 발생시, 다음 미들웨어로 에러넘김
};

// 영화를 업데이트하는 컨트롤러 함수
export const updateMovie: RequestHandler = async (req, res, next) => {
  const movieId = req.params.movieId // 요청에서 영화 ID를 추출
  try {
    // 영화 ID를 사용하여 해당 영화를 DB에 업데이트
    const movie = await MovieModel.findByIdAndUpdate(movieId, { $set: req.body, }, { new: true });
    res.status(201).json(movie); // 업데이트된 영화 정보를 클라이언트에게 응답
  } catch (error) { next(error); } // 에러 발생시, 다음 미들웨어로 에러넘김
};

// 영화를 삭제하는 컨트롤러 함수
export const deleteMovie: RequestHandler = async (req, res, next) => {
  const movieId = req.params.movieId // 요청에서 영화 ID를 추출
  try {
    const movie = await MovieModel.findByIdAndDelete(movieId); // 영화 ID를 사용하여 해당 영화를 DB에 삭제
    res.status(201).json(movie); // 삭제된 영화 정보를 클라이언트에게 응답
  } catch (error) { next(error); } // 에러 발생시, 다음 미들웨어로 에러넘김
};

// 특정 영화를 조회하는 컨트롤러 함수
export const getMovie: RequestHandler = async (req, res, next) => {
  // 요청에서 영화 ID를 추출
  const movieId = req.params.movieId
  try {
    const movie = await MovieModel.findById(movieId); // 영화 ID를 사용해 해당 영화를 DB에서 조회
    res.status(200).json(movie); // 조회된 영화 정보를 클라이언트에게 응답
  } catch (error) { next(error); } // 에러 발생시, 다음 미들웨어로 에러넘김
};

// 모든 영화를 조회하는 컨트롤러 함수
export const getAllMovie: RequestHandler = async (req, res, next) => {
  try {
    const movie = await MovieModel.find(); // 모든 영화를 데이터베이스에서 조회
    res.status(200).json(movie.reverse()); // 조회된 영화 정보를 역순 정렬해 클라이언트에게 응답
  } catch (error) { next(error); } // 에러 발생시, 다음 미들웨어로 에러넘김
};

// 특정 유형(type)의 영화를 무작위로 조회하는 컨트롤러 함수
export const getMovieByType: RequestHandler = async (req, res, next) => {
  const type = req.query.type // 요청에서 type 쿼리 파라미터를 추출
  try {
    let movie;
    // type에 따라 해당 유형의 영화를 데이터베이스에서 무작위로 조회
    if (type === "series") {
      movie = await MovieModel.aggregate([
        { $match: { isSeries: true } },
        { $sample: { size: await MovieModel.countDocuments() } },
      ]);
    } else {
      movie = await MovieModel.aggregate([
        { $match: { isSeries: false } },
        { $sample: { size: await MovieModel.countDocuments() } },
      ]);
    }
    res.status(200).json(movie); // 조회된 영화 정보를 클라이언트에게 응답
  } catch (error) { next(error); } // 에러 발생시, 다음 미들웨어로 에러넘김
};

export const getMovieByTitle: RequestHandler = async (req, res, next) => {
  const encodedTitle = req.query.title as string | undefined; // 요청에서 title 쿼리 파라미터를 추출
  const decodedTitle: string = decodeURIComponent(encodedTitle || ''); // 명시적으로 string 타입으로 지정
  try {
    // 필수 매개변수 누락시 오류
    if (!encodedTitle) { return res.status(400).json({ error: "Title is required" }); }

    // "title"을 부분 일치 검색으로 DB에서 조회
    const movies = await MovieModel.find({ title: { $regex: decodedTitle, $options: "m" } });

    // 조회결과가 없다면 에러 발생
    if (movies.length === 0) { return res.status(404).json({ message: "No movies found with the given title" }); }

    res.status(200).json(movies); // 조회된 영화 정보를 클라이언트에게 응답
  } catch (error) { next(error); }// 에러 발생시, 다음 미들웨어로 에러 넘김
};







