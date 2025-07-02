import React from "react";
import button from "bootstrap/js/src/button.js";
import { Button } from "react-bootstrap";
import * as PropTypes from "prop-types";

function AwesomeButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px",
        backgroundColor: "black",
        color: "white",
        fontSize: "2rm",
      }}
    >
      {children}
    </button>
  );
}

function AwesomeHeader({ children, onDoubleclick }) {
  return (
    <h1
      onDoubleClick={onDoubleclick}
      style={{
        fontStyle: "italic",
        fontWeight: "2rm",
        fontSize: "medium",
        backgroundColor: "blue",
      }}
    >
      {children}
    </h1>
  );
}
// 필요없는 코드 지워도 됨.(알려주기 위해 이번만 주석처리)
// AwesomeHeader.propTypes = { children: PropTypes.node };

function App20(props) {
  let handleAwesomeHeaderDoubleClick = () => {
    console.log("제목 두번째 더블 클릭");
  };
  return (
    <div>
      {/* 연습: AwesomeHeader 를 만들고 마우스가 더블클릭 하면 콘솔에 메시지 출력 */}
      {/* <h1 style={적절한 스타일 주기}></h1>*/}
      <h1 onDoubleClick={() => console.log("제목 더블클릭")}>멋진 제목</h1>
      <AwesomeHeader onDoubleclick={() => console.log("예쁜 더블 클릭")}>
        예쁜 제목
      </AwesomeHeader>
      <AwesomeHeader onDoubleclick={handleAwesomeHeaderDoubleClick}>
        예쁜 제목
      </AwesomeHeader>

      <button onClick={() => console.log("보통의 버튼 클릭")}>
        브라우저 컴포넌트 버튼
      </button>
      <AwesomeButton onClick={() => console.log("멋진버튼 1 클릭")}>
        멋진 버튼1
      </AwesomeButton>
      <Button
        variant="outline-danger"
        onClick={() => console.log("부트스트랩 버튼 클릭")}
      >
        부트스트랩 버튼
      </Button>
    </div>
  );
}

export default App20;
