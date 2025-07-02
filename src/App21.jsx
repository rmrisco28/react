import React from "react";

function App21(props) {
  function handlerButtonClick(e) {
    // e: event 객체
    console.log(e);
    console.log("버튼 클릭");
    // stipPropagation(): 이벤트 전달 막기
    e.stopPropagation();
    console.log("버튼 클릭");
  }

  function handlerPClick(e) {
    console.log("para 클릭");
    e.stopPropagation();
  }

  return (
    <div className="p-5 bg-info" onClick={() => console.log("div 클릭")}>
      {/* p 클릭 이벤트가 div까지 전파되지 않도록 코드 수정*/}
      <p className="bg-danger" onClick={handlerPClick}>
        Lorem ipsum dolor.
      </p>
      <p
        className="bg-danger"
        onClick={(e) => {
          e.stopPropagation();
          console.log("클릭");
        }}
      >
        Lorem ipsum dolor.
      </p>

      <button onClick={handlerButtonClick}>버튼</button>
    </div>
  );
}

export default App21;
