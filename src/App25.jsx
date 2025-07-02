import React, { useState } from "react";

function MyComp1(props) {
  const [text, setText] = useState("기본값");

  function handleInputChange(e) {
    // value에 상태값을 넣고 함수가 발생됐을때
    // setText target.value로 값늘 넣을 수 있다.
    console.log(e.target.value);
    // 값이 변경 될때
    // setText("다른 값");
    setText(e.target.value);
  }

  return (
    <div>
      {/*기본값이 있다면, 다른 값을 넣어야 다시 그릴 수 있음*/}
      <input type="text" value={text} onChange={handleInputChange} />
    </div>
  );
}

function MyComp2() {
  const [message, setMessage] = useState("");
  // 연습
  // input 값이 입력 되도록
  // 리셋버튼 클릭 시 input의 value가 "" 되도록

  return (
    <div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={() => setMessage("")}>리셋</button>
    </div>
  );
}

function App25(props) {
  return (
    <div>
      <MyComp2 />
      {/*기본값이 있다면, 다른 값을 넣어야 다시 그릴 수 있음*/}
      <MyComp1 />
    </div>
  );
}

export default App25;
