import React, { useState } from "react";
import axios from "axios";

function App56(props) {
  const [myFiles, setMyFiles] = useState(null);

  function handleButton1Click() {
    // file 전송시 postForm/putForm
    axios.postForm("/api/main31/sub1", {
      name: "흥민",
      age: 77,
      myFiles: myFiles,
    }); // JSON 형식x
  }

  function handleButton2Click() {
    axios.postForm("/api/main31/sub2", {
      address: "신촌",
      score: 55.66,
      yourFiles: myFiles,
    });
  }

  function handleButton3Click() {
    axios.postForm("/api/main31/sub3", {
      city: "seoul",
      uploadFile: myFiles,
    });
  }

  function handleButton4click() {
    axios.postForm("/api/main31/sub4", {
      id: 33,
      userName: "흥민",
      address: "강남",
      uploadFiles: myFiles,
    });
  }

  function handleButton5Click() {
    axios.postForm("/api/main31/sub5", {
      score: 66.77,
      className: "기린",
      location: "신촌",
      uploads: myFiles,
    });
  }

  return (
    <div>
      <div>
        <button
          onClick={() => {
            axios.get("/api/main31/sub7/33");
          }}
        >
          id 33
        </button>
        <button
          onClick={() => {
            axios.get("/api/main31/sub7/66");
          }}
        >
          id 66
        </button>
        <button
          onClick={() => {
            axios.get("/api/main31/sub7/99");
          }}
        >
          id 99
        </button>
      </div>
      <hr />
      <div>
        <button
          onClick={() => {
            axios.get("/api/main31/sub6/seoul");
          }}
        >
          서울
        </button>
        <button
          onClick={() => {
            axios.get("/api/main31/sub6/jeju");
          }}
        >
          제주
        </button>
        <button
          onClick={() => {
            axios.get("/api/main31/sub6/busan");
          }}
        >
          부산
        </button>
      </div>
      <hr />
      <div>
        <input
          type="file"
          multiple
          onChange={(e) => setMyFiles(e.target.files)}
        />
        <button onClick={handleButton5Click}>파일 전송 5 여러개</button>
      </div>
      <div>
        <input
          type="file"
          multiple
          onChange={(e) => setMyFiles(e.target.files)}
        />
        <button onClick={handleButton4click}>파일 전송 4, 여러개</button>
      </div>
      <div>
        <input
          type="file"
          // multiple={true}
          onChange={(e) => setMyFiles(e.target.files)}
        />
        <button onClick={handleButton3Click}>여러 파일 전송</button>
      </div>
      <div>
        <input
          type="file"
          multiple={true}
          onChange={(e) => setMyFiles(e.target.files)}
        />
        <button onClick={handleButton2Click}>파일 전송</button>
      </div>
      <hr />
      <div>
        {/* file은 e.target.files */}
        <input type="file" onChange={(e) => setMyFiles(e.target.files)} />
        <button onClick={handleButton1Click}>파일 전송 1</button>
      </div>
    </div>
  );
}

export default App56;
