import React, { useState } from "react";

function MyComp1() {
  const [number1, setNumber1] = useState(1);
  const [number2, setNumber2] = useState(10);

  console.log(number1, number2);
  // 함수가 두개 있을때 하나만 새로 고침되는것이 아니라 두개 다 새로고침 된다.
  return (
    <div>
      {/*div*2>div+button*/}
      <div>
        <div>{number1}</div>
        <button onClick={() => setNumber1(number1 + 1)}>버튼1</button>
      </div>
      <div>
        <div>{number2}</div>
        <button onClick={() => setNumber2(number2 - 1)}>버튼2</button>
      </div>
    </div>
  );
}

function MyComp2() {
  // 연습
  // 코드 인풋에 입력한 값으로 변경되도록 코드 작성
  const [text, setText] = useState("");

  function handleChange1(e) {
    setText(e.target.value);
  }

  const [message, setMessage] = useState("");

  function handleChange2(e) {
    setMessage(e.target.value);
  }

  return (
    <div>
      <div>
        <input type="text" value={text} onChange={handleChange1} />
      </div>
      <div>
        <input type="text" value={message} onChange={handleChange2} />
      </div>
    </div>
  );
}

function App26(props) {
  return (
    <div>
      <MyComp2 />
      <hr />
      <MyComp1 />
    </div>
  );
}

export default App26;
