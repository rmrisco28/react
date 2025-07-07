import React from "react";
import axios from "axios";

function App53(props) {
  function handleButton1Click() {
    axios.request({
      method: "GET",
      url: "http://localhost:8080/main1/sub1",
    });
  }

  function handleButton2Click() {
    axios.request({
      method: "GET",
      url: "/api/main28/sub1",
    });
  }

  function handleButton3Click() {
    axios.request({
      method: "post",
      url: "/api/main28/sub2",
    });
  }

  return (
    <div>
      {/* 연습*/}
      <button onClick={handleButton3Click}>요청 보내기3</button>
      <hr />
      <button onClick={handleButton2Click}>요청 보내기2</button>
      <hr />
      <button onClick={handleButton1Click}>요청 보내기1</button>
    </div>
  );
}

export default App53;
