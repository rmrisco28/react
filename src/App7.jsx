function MyComp1({ color, score, city, kids, skils, person }) {
  console.log("color", color);
  console.log("score", score);
  console.log("city", city);
  console.log("kids", kids);
  console.log("skils", skils);
  console.log("person", person);
  return null;
}
// props의 타입은 뭐든지 가능
// String은 ""
// 나머지는 {중괄호}, {"String"} 도 가능

function MyComp2({ name, age, address, married }) {
  console.log("name", name); // lee
  console.log("age", age); // 44
  console.log("address", address); // {city: "seoul", country: "korea"}
  console.log("married", married); // false
  return null;
}

function App7() {
  return (
    <>
      <MyComp1
        color="yellow"
        score={123.123}
        city={"seoul"}
        kids={true}
        skils={["java", "css", "react"]}
        person={{ name: "son", age: 33, team: "토트넘" }}
      />
      {/* probs 작성하기 */}
      <MyComp2
        name={"lee"}
        age={44}
        address={{ city: "seoul", country: "korea" }}
        married={false}
      />
    </>
  );
}

export default App7;
