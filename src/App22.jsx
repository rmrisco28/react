import React from "react";

function App22(props) {
  function handlerLinkClick(e) {
    // evetn.preventDefalt(): 브라우저 기본 동작을 막기

    e.preventDefault();
    console.log("링크클릭됨");
  }

  function handlerButtonClick(e) {
    e.preventDefault();
    console.log("멈춰!");
  }

  return (
    <div>
      {/* onSubmit 이벤트 발생 중*/}
      {/* 연습: onSubmit 이벤트 발생시 브라우저 기본 동작을 멈추고*/}
      {/* 콘솔에 메시지 출력*/}

      <form action="https://search.naver.com/search.naver">
        <input type="text" name="query" />
        <button onClick={handlerButtonClick}>검색</button>
      </form>

      <button onClick={() => console.log("버튼 클릭됨")}>버튼</button>
      <a href="https://www.google.com" onClick={handlerLinkClick}>
        {" "}
        구글로 이동
      </a>
    </div>
  );
}

export default App22;
