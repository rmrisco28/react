import React, { useState } from "react";

function MyComp1() {
  const [person, setPerson] = useState({
    name: "son",
    address: {
      city: "london",
      country: "uk",
    },
  });

  function handleNameChagne(e) {
    setPerson({ ...person, name: e.target.value });
  }

  function handleCityChange(e) {
    // 좋은 코드는 아니다.
    // 왜냐면 얕은 복사가 일어난다. 하지만 잘 되는 것처럼 보이기때문에.

    // const newPerson = structuredClone(person)// 이렇게 써야 한다.
    const newPerson = { ...person };
    newPerson.address.city = e.target.value;
    console.log(newPerson);
    setPerson(newPerson);
  }

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="이름"
          value={person.name}
          onChange={handleNameChagne}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="도시"
          value={person.address.city}
          onChange={handleCityChange}
        />
      </div>
      <div>
        <input type="text" placeholder="국가" value={person.address.country} />
      </div>
    </div>
  );
}

function App31(props) {
  return (
    <div>
      <MyComp1 />
    </div>
  );
}

export default App31;
