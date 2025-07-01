function MyComp1() {
  return <h1>Hello React</h1>;
}

// 컴포넌트 주의 할 점
// 이름: UpperCamelCase
// return 에 그려야할 html 코드 작성
// 가장 상위 요소가 하나의 요소만 그려야 함
function MyComp2() {
  return <h2>Hello Component</h2>;
}

// 가능
function MyComp3() {
  return (
    <h1>
      <span>안녕</span>
      <span>컴포넌트</span>
      <button>
        <span>버튼 문구</span>
      </button>
    </h1>
  );
}
/* 불가능, div가 같은 상위 클래스에 있기 때문에
function MyComp4() {
  return
  <div>hello</div>;
  <div>div</div>;
}
*/

//이렇게 하면 가능 의미 없는 div로 묶을 수 있다.
function MyComp4() {
  return (
    <div>
      <div>hello</div>
      <div>div</div>
    </div>
  );
}

function MyComp5() {
  // fragment: 가장 바깥 요소가 필요 없을 때 <></> 사용
  return (
    <>
      <div>hello</div>
      <div>comp5</div>
    </>
  );
}

function MyComp6() {
  return (
    <div>
      <h1>제목</h1>
      <p>Lorem ipsum dolor.</p>
    </div>
  );
}

function MyComp7() {
  return (
    <>
      <h2>두번째 제목</h2>
      <p>Lorem ipsum dolor.</p>
    </>
  );
}

function MyComp8() {
  // return 작성시 주의할 점
  return <h1>간단한건 한줄로</h1>;
}

function MyComp9() {
  // return 에서 줄바꿈이 일어나면, 코드가 끝났다고 판단 하여
  // return; 으로 취급. 꼭 괄호를 써주자.
  return (
    <div>
      <h1>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aperiam
        aut autem blanditiis dignissimos dolorum eligendi, labore magni numquam
        optio, quasi quia quibusdam repellat repellendus repudiandae similique
        vel velit vitae?
      </h1>
      <p>Lorem.</p>
    </div>
  );
}

function App4() {
  return (
    <>
      <MyComp1 />
      <MyComp2 />
      <MyComp3 />
      <MyComp4 />
      <MyComp5 />
      <MyComp6 />
      {/* 연습
      <div>
          <h1>제목</h1>
          <p>lorme3</p>
      </div>
      */}
      <MyComp7 />
      {/* 연습
      <h2>두번째 제목</h2>
      <p>lorem3</p>
      */}
      <MyComp8 />
      <MyComp9 />
    </>
  );
}

export default App4;
