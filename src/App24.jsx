import React, { useState } from "react";

function MyComp1() {
  const [count, setCount] = useState(0);

  function handleButtonClick() {
    setCount(count + 1);
    setCount(count + 1);
  }
  console.log(count); // 현재 상태 출력

  return (
    <div>
      {count}
      <br />
      <button onClick={handleButtonClick}>증가</button>
    </div>
  );
}

function MyComp2() {
  const [count, setCount] = useState(0);

  console.log(count); // 현재 상태 출력

  function handleButtonClick() {
    // 상태가 변경되자마자 다시 그리지 않는다. (re-render)
    // react는 적절한 순간에  변경된 상태로 다시 그림(re-render_
    setCount(count + 1);
    setCount(count + 2);
  }

  return (
    <div>
      {count}
      <br />
      <button onClick={handleButtonClick}>증가</button>
    </div>
  );
}

function MyComp3() {
  const [count, setCount] = useState(0);

  console.log(count); // 현재 상태 출력

  let number = count;
  function handleButtonClick() {
    setCount(number + 2); // 이게 제일 좋다.
    // number++;
    // number++;
    // setCount(number);
  }

  return (
    <div>
      {/*연습: 버튼 클릭시 number 2씩 늘어나도록 코드 수정*/}
      {number}
      <br />
      <button onClick={handleButtonClick}>증가</button>
    </div>
  );
}

function App24(props) {
  return (
    <div>
      <MyComp3 />
      <MyComp2 />
      <MyComp1 />
    </div>
  );
}

export default App24;
