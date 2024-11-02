# express 학습 정리

## res.json()과 res.send() 차이

- Node.js의 Express 프레임워크에서 `res.json()`과 `res.send()`는 모두 클라이언트에게 응답을 보내는 메서드이지만, 사용하는 방식과 결과가 약간 다릅니다.

### `res.json()`

- **용도**: 주로 JSON 데이터를 클라이언트에게 보낼 때 사용됩니다.
- **내용**: 주어진 JavaScript 객체를 JSON 문자열로 변환하고, `Content-Type` 헤더를 `application/json`으로 설정합니다.

### `res.send()`

- **용도**: 텍스트, HTML, JSON 등 다양한 형식의 데이터를 클라이언트에게 보낼 수 있는 범용 메서드입니다.
- **내용**: 전달된 내용을 그대로 클라이언트에게 전송하며, 자동으로 `Content-Type`을 설정합니다. 만약 객체를 전달하면, Express는 자동으로 JSON으로 변환하지만, 문자열이나 다른 형식의 데이터를 보낼 때는 해당 형식에 맞게 `Content-Type`을 설정합니다.

### 요약

- `res.json()`: JSON 형식의 응답을 보낼 때 사용, 자동으로 `Content-Type`을 `application/json`으로 설정.
- `res.send()`: 다양한 형식의 데이터를 보낼 수 있는 메서드, 객체를 보낼 경우 JSON으로 변환.

## res.send()와 res.end() 차이

### `res.send()`

- **용도**: 클라이언트에게 응답 데이터를 보낼 때 사용합니다.
- **기능**:
  - 문자열, 버퍼, 객체 등을 클라이언트에게 보낼 수 있습니다.
  - 객체를 보내는 경우, 자동으로 JSON 문자열로 변환하여 `Content-Type`을 적절히 설정합니다.
  - 내부적으로 `res.end()`를 호출하여 응답을 종료합니다.

### `res.end()`

- **용도**: 응답을 종료할 때 사용됩니다.
- **기능**:
  - 클라이언트에게 데이터를 보내고 응답을 종료하는 데 사용되며, 추가적인 데이터 전송 없이 즉시 응답을 종료합니다.
  - 주로 스트리밍 데이터나 파일 전송 같은 경우에 사용할 수 있습니다.
  - 데이터 전송 시, 문자열이나 버퍼를 인수로 전달할 수 있습니다.

### 요약

- **`res.send()`**:
  - 응답 데이터를 보내고, 내부적으로 응답을 종료합니다.
  - 다양한 데이터 형식을 지원하며, JSON 변환도 자동으로 처리합니다.
- **`res.end()`**:
  - 데이터 전송 후 응답을 종료합니다.
  - 일반적으로 단순한 응답 종료 또는 스트리밍 시 사용됩니다.

## 미들웨어 Middleware

**미들웨어(Middleware)**는 HTTP 요청과 응답 사이에서 특정 작업을 수행하는 함수입니다.

Express의 미들웨어는 애플리케이션의 기능을 확장하고 코드 구조를 깔끔하게 관리할 수 있는 중요한 요소입니다.

### 1. 미들웨어의 역할

미들웨어는 요청-응답 주기 사이에서 실행되며 다음과 같은 역할을 수행할 수 있습니다:

- 요청을 해석하고 필요한 데이터를 추출
- 요청을 인증하고 권한을 부여
- 특정 조건을 만족하면 응답을 보내거나, 다음 미들웨어로 요청을 넘김
- 오류를 처리하고 로깅

### 2. Express에서의 미들웨어 구조

Express 미들웨어는 다음과 같은 구조로 작성됩니다:

```jsx
function middlewareFunction(req, res, next) {
  // 여기에 작업 수행 (예: 요청 로깅, 데이터 검증 등)
  next(); // 다음 미들웨어로 전달 (필수)
}
```

- **req**: 요청 객체로 클라이언트 요청 정보를 포함.
- **res**: 응답 객체로 클라이언트에 응답을 보낼 수 있게 함.
- **next**: 다음 미들웨어로 제어를 넘김. `next()` 호출을 통해 다음 미들웨어로 이동하며, 호출하지 않으면 요청-응답 주기가 중단됨.

### 3. 미들웨어의 종류

1. **애플리케이션 레벨 미들웨어**
   - 특정 경로나 전체 앱에 적용됩니다.

```jsx
app.use((req, res, next) => {
  console.log("모든 요청에서 실행됨");
  next();
});
```

2. **라우터 레벨 미들웨어**
   - 특정 라우터에만 적용됩니다.

```jsx
const router = express.Router();
router.use("/path", (req, res, next) => {
  console.log("/path 경로에 요청이 있을 때 실행됨");
  next();
});
```

3. **빌트인 미들웨어**
   - `express.static()`과 같은 Express에 기본으로 포함된 미들웨어입니다.

```jsx
app.use(express.static("public"));
```

4. **서드파티 미들웨어**
   - `body-parser` 같은 외부 라이브러리에서 제공하는 미들웨어입니다.

```jsx
const bodyParser = require("body-parser");
app.use(bodyParser.json());
```

### 4. 미들웨어의 예시

다음은 간단한 예시로, 요청을 로깅하는 미들웨어입니다.

```jsx
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url} - ${new Date()}`);
  next();
});
```

이 예시에서 `app.use`로 정의된 미들웨어는 모든 요청에 대해 요청의 HTTP 메서드, URL, 시간을 로그로 기록하고 다음 미들웨어로 이동합니다.

### 5. 미들웨어의 순서

Express는 미들웨어를 정의된 순서대로 실행합니다. 따라서 미들웨어가 여러 개일 경우 올바른 순서로 배치해야 요청이 올바르게 처리됩니다.

미들웨어는 Express에서 요청을 유연하게 처리하고 코드의 가독성과 확장성을 높이는 중요한 도구입니다.
