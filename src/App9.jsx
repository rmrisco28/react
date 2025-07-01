function App9() {
  const val1 = "son";
  const val2 = 88;
  const val3 = ["java", "react"];
  const val4 = { city: "seoul", country: "USA" }; // not ok
  const val5 = true; // 출력 안됨
  const val6 = false; // 출력 안됨
  const val7 = null; // 출력 안됨
  const val8 = undefined; // 출력 안됨.
  return (
    <>
      <ul>
        <li>값1: {val1}</li>
        <li>값2: {val2}</li>
        <li>값3: {val3}</li>
        {/*<li>값4: {val4}</li>*/}
        {/* 나눠 쓰는건 가능하다. */}
        <li>값4: {val4.city}</li>
        <li>값4: {val4.country}</li>
        {/* boolean, null, undefined는  출력이 안된다. 오류는 아님.*/}
        <li>값5: {val5}</li>
        <li>값6: {val6}</li>
        <li>값7: {val7}</li>
        <li>값8: {val8}</li>
      </ul>
    </>
  );
}

export default App9;
