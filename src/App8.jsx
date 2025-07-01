function MyComp1({ name = "son", age = 44, city = "london" }) {
  // 갖고 있는 값을 html에 표시하는 방법
  // {} :  jsx 코드 내에서 js(javascript) 코드 작성하는 부분
  return (
    <>
      <ul>
        <li>이름: {name}</li>
        <li>나이: {age * 2}</li>
        <li>도시: {city}</li>
      </ul>
    </>
  );
}

function MyCom2({ name, score }) {
  return (
    <>
      <p>
        이름은 {name}이고 점수는 {score} 입니다.
      </p>
    </>
  );
}

function App8() {
  return (
    <>
      <MyComp1 />
      <MyComp1 name={"lee"} />
      <MyComp1 name={"kim"} age={55} />
      <MyComp1 name={"park"} age={66} city={"busan"} />
      {/*<p> 연습: 이름은 홍길동이고 점수는 98 입니다. </p> */}
      <MyCom2 score={98} name="홍길동" />
      <MyCom2 score={88} name="장길산" />
      <MyCom2 score={78} name="임꺽정" />
    </>
  );
}

export default App8;
