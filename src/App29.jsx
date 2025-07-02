import React, { useState } from "react";
import data from "bootstrap/js/src/dom/data.js";

function MyComp1() {
  const arr = ["java", "react", "css"];

  return (
    <div>
      {arr.map((item) => (
        <p>{item}</p>
      ))}
    </div>
  );
}

function MyComp2() {
  const datas = [9, 5, 1, 0];
  return (
    <div>
      {/* datas 를 활용해서 아래처럼 출력되도록*/}
      {/*
      <ul>
        <li>9</li>
        <li>5</li>
        <li>1</li>
        <li>0</li>
      </ul>
    */}
      <ul>
        {datas.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function MyComp3() {
  const [datas, setDatas] = useState(["java", "react", "spring"]);

  function handleButtonClick() {
    datas.push("boot");
    console.log(datas);
    // react는 배열을 참조값 비교로 상태가 변경되었는지 확인
    // 따라서 이전 상태 배열을 복사한 새 배열을 상태 변경 시 사용해야함.
    setDatas(datas);
  }

  console.log("상태 변경됨!!!");

  return (
    <div>
      <ul>
        {datas.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <button onClick={handleButtonClick}>추가</button>
    </div>
  );
}

function MyComp4() {
  const [datas, setDatas] = useState(["java", "react", "spring"]);

  function handleButtonClick() {
    // react는 배열을 참조값 비교로 상태가 변경되었는지 확인
    // 따라서 이전 상태 배열을 복사한 새 배열을 상태 변경 시 사용해야함.
    const nextDatas = [...datas];
    setDatas(nextDatas);
  }

  console.log("상태 변경됨");

  return (
    <div>
      <ul>
        {datas.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <button onClick={handleButtonClick}>추가</button>
    </div>
  );
}

function MyComp5() {
  const [list, setList] = useState(["곰", "독수리", "벌"]);
  // 연습
  // 각 버튼 클릭시 새 아잍메 추가 되도록 코드 작성

  function handleBearButtonClick() {
    const nextList = [...list];
    nextList.push("곰");
    setList(nextList);
  }

  console.log("변경");

  function handleEagleClick() {
    const nextList = [...list, "독수리"];
    setList(nextList);
  }

  function handleBeeClick() {
    setList([...list, "벌"]);
  }

  // function handleMinusClick() {
  //   const minusList = [...list];
  //   minusList.pop();
  //   setList(minusList);
  // }

  return (
    <div>
      {/*button*3+ul*/}
      <button onClick={handleBearButtonClick}>곰 추가</button>
      <button onClick={handleEagleClick}>독수리 추가</button>
      <button onClick={handleBeeClick}>벌 추가</button>
      <button onClick={() => setList([...list, "사자"])}>사자 추가</button>
      {/*<button onClick={handleMinusClick}>마지막 요소 지우기</button>*/}
      <button
        onClick={() => {
          const nextList = [...list];
          nextList.pop();
          setList(nextList);
        }}
      >
        마지막 요소 지우기
      </button>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function MyComp6() {
  const [datas, setDatas] = useState(["java", "react", "css"]);
  // 연습: 추가 버튼 클릭시 input에 입력된 내용이 배열에 추가 되도록 코드 작성
  const [text, setText] = useState("");

  function handleButtonClick() {
    setDatas([...datas, text]);
    setText("");
  }

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={handleButtonClick}>추가</button>
      <ul>
        {datas.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function App29(props) {
  return (
    <div>
      {/*연습*/}
      <MyComp6 />
      <hr />

      {/*연습*/}
      <MyComp5 />
      <hr />
      <MyComp4 />
      <hr />
      <MyComp3 />
      <hr />
      <MyComp2 />
      <hr />
      <MyComp1 />
    </div>
  );
}

export default App29;
