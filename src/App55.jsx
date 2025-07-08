import React, { useState } from "react";
import axios from "axios";

function App55(props) {
  const [myFile, setMyFile] = useState(null);

  function handlerButton1Click() {
    // 버튼을 누르면 put 방식의 요청이 날아간다.
    axios.put("/api/main30/sub1");
  }

  function handlerButton2Click() {
    axios.delete("/api/main30/sub2");
  }

  // spring: put /api/main30/sub3 받는 request handler method
  // spring: delete /api/main30/sub4 받는 request handler method
  function handlerButton3Click() {
    axios.put("/api/main30/sub3");
  }

  function handlerButton4Click() {
    axios.delete("/api/main30/sub4");
  }

  function handlerButton5Click() {
    axios.put("/api/main30/sub5", {
      nickName: "트럼프", // string
      age: 77, // number
      married: true, // boolean
      // object 객체
      team: {
        name: "ny",
        location: "korea",
      },
      address: ["seoul", "busan", "jeju"], // array
    });
  }

  function handlerButton6Click() {
    axios.delete("/api/main30/sub6", {
      params: {
        name: "son",
        ad: 77,
      },
    });
  }
  // 연습: spring delete /api/main30/sub6으로 오는 요청
  //request parameter 받아서 출력하는 코드 완성

  function handlerButton7Click() {
    // file 전송시 postForm 또는 putForm
    axios.postForm("/api/main30/sub7", {
      name: "흥민",
      age: 77,
      myFile: myFile,
    });
  }

  return (
    <div>
      <div>
        <input
          type="file"
          value={myFile}
          onChange={(e) => setMyFile(e.target.value)}
        />
        <button onClick={handlerButton7Click}>7 post w/ file</button>
      </div>
      <hr />
      <button onClick={handlerButton6Click}>6 delete 연습</button>
      <hr />
      <button onClick={handlerButton5Click}>5 put 연습</button>
      <hr />
      {/*연습: 3번 클릭시 put 방식으로 /api/main30/sub3 요청보내기*/}
      <button onClick={handlerButton3Click}>3 put 요청</button>
      <hr />
      {/*연습: 4번 클릭시 delete 방식으로 /api/main30/sub4 요청보내기*/}
      <button onClick={handlerButton4Click}>4 delete 요청</button>
      <hr />
      <button onClick={handlerButton2Click}>2 delete 요청</button>
      <hr />
      <button onClick={handlerButton1Click}>1 put 요청</button>
    </div>
  );
}

export default App55;
