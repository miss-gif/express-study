// mongoose 라이브러리에서 mongoose 객체를 가져옴
import mongoose from "mongoose";

// 제품 정보를 정의하는 스키마(schema)를 생성
const productsSchema = new mongoose.Schema({
  // 제품 이름 필드 정의
  name: {
    type: String, // 필드 데이터 타입: 문자열(String)
    required: true, // 필수 값 설정: 반드시 입력되어야 함
  },
  // 제품 설명 필드 정의
  description: {
    type: String, // 필드 데이터 타입: 문자열(String)
    required: true, // 필수 값 설정: 반드시 입력되어야 함
  },
  // 제품 가격 필드 정의
  price: {
    type: Number, // 필드 데이터 타입: 숫자(Number)
    required: true, // 필수 값 설정: 반드시 입력되어야 함
  },
});

// 'Product'라는 이름으로 모델을 생성하고, productsSchema 스키마를 기반으로 정의된 모델을 export
const Product = mongoose.model("Product", productsSchema);

export default Product;
