import bcrypt from "bcrypt";
import { RequestHandler } from "express";
import createHttpError from "http-errors";
import mongoose from "mongoose";
import UserModel from "../models/user";

// 유저 정보를 업데이트하는 컨트롤러 함수
export const updateUser: RequestHandler = async (req, res, next) => {
  // 요청에서 유저 ID와 새로운 사용자 이름, 이메일, 비밀번호, 관리자 여부 추출
  const userId = req.params.userId;
  try {
    // 유효하지 않은 유저 ID인 경우, 에러 생성
    if (!mongoose.isValidObjectId(userId)) { throw createHttpError(400, "유효하지 않은 유저 ID"); }

    // 유저 ID를 사용하여 해당 유저를 DB에서 조회, 찾지못하면 에러 생성
    const user = await UserModel.findById(userId).exec();
    if (!user) { throw createHttpError(404, "유저를 찾을 수 없음"); }

    // 새로운 사용자 이름, 이메일, 비밀번호, 관리자 여부를 업데이트
    user.username = req.body.username || user.username;
    user.email = req.body.email || user.email;
    user.isAdmin = req.body.isAdmin || user.isAdmin
    user.profile = req.body.profile || user.profile
    if (req.body.password) { user.password = await bcrypt.hash(req.body.password, 10); }

    const updatedUser = await user.save(); // 유저 정보를 저장해 업데이트를 완료
    res.status(200).json(updatedUser); // 업데이트된 유저 정보를 클라이언트에게 응답
  } catch (error) { next(error); } // 에러 발생시, 다음 미들웨어로 에러넘김
};

// 유저를 삭제하는 컨트롤러 함수
export const deleteUser: RequestHandler = async (req, res, next) => {
  const userId = req.params.userId; // 요청에서 유저 ID를 추출
  try {
    // 유효하지 않은 유저 ID인 경우, 에러 생성
    if (!mongoose.isValidObjectId(userId)) { throw createHttpError(400, "유효하지 않은 유저 ID"); }

    // 유저 ID를 사용해 해당 유저를 DB에서 조회, 찾지 못하면 에러
    const user = await UserModel.findById(userId).exec();
    if (!user) { throw createHttpError(404, "유저를 찾을 수 없음"); }

    await user.deleteOne(); // 유저를 DB에서 삭제
    res.sendStatus(204); // 204 상태코드를 클라이언트에게 응답
  } catch (error) { next(error); }; // 에러 발생시, 다음 미들웨어로 에러넘김
};

// 특정 유저를 조회하는 컨트롤러 함수
export const getUser: RequestHandler = async (req, res, next) => {
  const userId = req.params.userId; // 요청에서 유저 ID를 추출
  try {
    // 유효하지 않은 유저 ID인 경우, 에러 생성
    if (!mongoose.isValidObjectId(userId)) { throw createHttpError(400, "유효하지 않은 유저 ID"); }

    // 유저 ID를 사용하여 해당 유저를 DB에서 조회, 찾지 못하면 에러
    const user = await UserModel.findById(userId).exec();
    if (!user) { throw createHttpError(404, "유저를 찾을 수 없음"); }

    res.status(200).json(user); // 조회된 유저 정보를 클라이언트에게 응답
  } catch (error) { next(error); } // 에러 발생시, 다음 미들웨어로 에러넘김
};

// 모든 유저를 조회하는 컨트롤러 함수
export const getAllUser: RequestHandler = async (req, res, next) => {

  const query = req.query.new; // 쿼리 파라미터에서 new 값을 추출
  try {
    // new 값이 true인 경우, 최신 5명의 유저를 조회 / 없거나 false인 경우, 모든 유저를 조회
    const user = query
      ? await UserModel.find().sort({ _id: -1 }).limit(5)
      : await UserModel.find();

    res.status(200).json(user); // 조회된 유저 정보를 클라이언트에게 응답
  } catch (error) { next(error); } // 에러 발생시, 다음 미들웨어로 에러넘김
};

// 유저 생성 날짜를 기준으로 통계 데이터를 조회하는 컨트롤러 함수
export const getUserStat: RequestHandler = async (req, res, next) => {
  try {
    const today = new Date();
    const lastYear = new Date(today);
    lastYear.setFullYear(today.getFullYear() - 1);
    // 유저 생성 날짜를 기준으로 통계 데이터를 DB에서 집계
    const data = await UserModel.aggregate([
      { $project: { month: { $month: "$createdAt" }, }, },
      { $group: { _id: "$month", total: { $sum: 1 }, }, },
    ]);

    res.status(200).json(data); // 집계된 통계 데이터를 클라이언트에게 응답
  } catch (error) { next(error); } // 에러 발생시, 다음 미들웨어로 에러넘김
};