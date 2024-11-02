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