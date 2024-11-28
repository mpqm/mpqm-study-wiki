import { RequestHandler } from "express";
import ContentModel from "../models/content";

// 컨텐츠를 생성하는 컨트롤러 함수
export const createContent: RequestHandler = async (req, res, next) => {
    try {
        const content = await ContentModel.create(req.body); // 요청에서 받은 데이터를 사용해 컨텐츠를 DB에 생성
        res.status(201).json(content); // 생성된 컨텐츠 정보를 클라이언트에게 응답
    } catch (error) { next(error); } // 에러 발생시, 다음 미들웨어로 에러넘김
};

// 컨텐츠를 삭제하는 컨트롤러 함수
export const deleteContent: RequestHandler = async (req, res, next) => {
    const contentId = req.params.contentId // 요청에서 컨텐츠 ID를 추출
    try {
        const content = await ContentModel.findByIdAndDelete(contentId); // 컨텐츠 ID를 사용해 해당 컨텐츠를 DB에서 삭제
        res.status(201).json(content); // 삭제된 컨텐츠 정보를 클라이언트에게 응답
    } catch (error) { next(error); } // 에러 발생시, 다음 미들웨어로 에러넘김
};

// 특정 조건에 따라 컨텐츠를 조회하는 컨트롤러 함수
export const getContent: RequestHandler = async (req, res, next) => {
    // 요청에서 type과 genre 쿼리 파라미터 추출
    const typeQuery = req.query.type;
    const genreQuery = req.query.genre;
    let Contents = [];
    try {
        // typeQuery, genreQuery에 따라 컨텐츠를 조회
        if (typeQuery) {
            // type과 genre 쿼리 파라미터가 모두 존재하는 경우, 해당 조건에 맞는 컨텐츠를 조회
            if (genreQuery) {
                Contents = await ContentModel.aggregate([
                    { $sample: { size: await ContentModel.countDocuments() } },
                    { $match: { type: typeQuery, genre: genreQuery } },
                ]);
            }
            // type 쿼리 파라미터만 존재하는 경우, 해당 조건에 맞는 컨텐츠를 조회
            else {
                Contents = await ContentModel.aggregate([
                    { $sample: { size: await ContentModel.countDocuments() } },
                    { $match: { type: typeQuery } },
                ]);
            }
        }
         // type 쿼리 파라미터가 존재하지 않는 경우, 무작위로 컨텐츠를 조회
        else { Contents = await ContentModel.aggregate([{ $sample: { size: await ContentModel.countDocuments() } }]); }
        res.status(200).json(Contents); // 조회된 컨텐츠 정보를 클라이언트에게 응답
    } catch (error) { next(error); } // 에러 발생시, 다음 미들웨어로 에러넘김
};