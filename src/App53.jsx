import React from "react";
import axios from "axios";

function App53(props) {
  function handleButton1Click() {
    axios.request({
      method: "GET",
      url: "http://localhost:8080/main1/sub1",
    });
  }

  return (
    <div>
      <button onClick={handleButton1Click}>요청 보내기1</button>
    </div>
  );
}

export default App53;
