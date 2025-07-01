function MyComp1({ color, children }) {
  return (
    <ul>
      <li>color: {color}</li>
      <li>children: {children}</li>
    </ul>
  );
}

function App11() {
  // 직접 만든 컴포넌트: 대문자로 시작
  // html 컴포넌트(built-in component, 브라우저 컴포넌트) : 소문자로 시작
  // 브라우저 컴포넌트의 props: html attribute를 사용
  // but, class -> className, for -> htmlFor 로 바꿔야한다.

  // style prop : style attribute 역할
  /*
    **style attribute**
    <div style="color: red; background-color: yellow; font-size: 24px;">
    </div>
     */
  /*
    **style prop**
    <div style={{color: "red", backgroundColor: "yellow", fontSize: "24px"}}>
    </div>
     */
  return (
    <>
      <MyComp1 color="red">작성된 컨텐츠</MyComp1>
      {/*우리가 만들지 않은 컴포넌트에는 어떻게 줄 수 있을까?*/}
      <h1>제목</h1>
      <p>문단</p>
      <div>div</div>
      <a href="httmps://www.dum.net">daum</a>
      <br />
      <img
        src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ3Hv6iGG5mrI76aruo7gRz7BTVzMs1SV2wo6hi-ohzY7bF6bxFCYLTqNsCO8GdB8jt2lHehNqcpDfRNYEJ-utWtQ"
        alt="사자 그림"
        title="사자 사진" /*마우스 호버시 나오는 문구 */
      />
      <br />
      {/*<label for="">이름</label> 오류가 날 수 있음*/}
      <label htmlFor="">이름</label>
      <input type="text" id="nameInput" />
      <hr />
      {/*<div class="content">hello</div>
       자바스크립트 코드로 변경된다. class에서는 class를 만들 기 때문에, */}
      {/* className으로 써야한다.*/}
      <div className="content">hello</div>
      <hr />
      <div
        style={{ color: "red", backgroundColor: "yellow", fontsize: "24px" }}
      >
        스타일 props 사용
      </div>

      {/* 연습 style props을 사용해서 자신만의 버튼 만들어 보기*/}
      <button
        style={{
          color: "skyblue",
          backgroundColor: "white",
          padding: "10px",
          borderRadius: "5px",
          fontsize: "2em",
        }}
      >
        내가 만든 멋진 버튼
      </button>
    </>
  );
}
const myAddress = "jeju";
//
export { myAddress };

export default App11;
