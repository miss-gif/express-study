// 'productModel'을 '../models/products.model.js' 경로에서 가져옴
import productModel from "../models/products.model.js";

// 새로운 제품을 생성하는 비동기 함수 'createProduct' 정의
export const createProduct = async (req, res, next) => {
  try {
    // 'productModel'을 이용해 요청 본문(req.body) 데이터를 기반으로 새로운 제품 생성
    const createdProduct = await productModel.create(req.body);

    // 생성된 제품을 JSON 형식으로 응답하며, 상태 코드는 201(Created)로 설정
    res.status(201).json(createdProduct);
  } catch (error) {
    // 오류가 발생하면, 오류를 다음 미들웨어로 전달하여 에러 핸들링
    next(error);
  }
};
