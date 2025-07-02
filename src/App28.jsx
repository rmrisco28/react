import React, { useState } from "react";

function MyComp1() {
  // use... : 훅(hook) 갈고리 react에 걸어놓고 쓰는 메소드.
  // react는 훅의 사용순서로 기억한다.
  // react에 걸린 순서를 기억한다.
  //
  const [number, setNumber] = useState(0); // 1
  const [text, setText] = useState(""); // 2
  const [name, setName] = useState("son"); // 3
  // 어떤조건에 따라 hook을 쓰거나 안쓰거나 하면안된다.
  if (true) {
    const [message, setMesaage] = useState(""); // 4?
  }
  const [alert, setAlert] = useState(""); // 4? 5?
  // let a = 3 + 5; // 훅중간에 다른 코드 쓰지말기
  // 따라서 use...(hook) 사용 시
  // 1. 조건 절에 넣으면 안됨.
  // 2. 반복문에 넣으면 안됨.(고정된 값이면 가능, 어쩔때마다 번호가 바뀌면 x)
  for (let i = 0; i < 3; i++) {
    const [other, setOther] = useState("");
  }
  // 3. 안전하게 컴포넌트 코드 상위에 순서대로 작성할 것. 이후 나머지 코드들을 작성한다.

  return null;
}

function App28(props) {
  return (
    <div>
      <MyComp1 />
    </div>
  );
}

export default App28;
