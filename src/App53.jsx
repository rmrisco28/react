import React, { useState } from "react";
import axios from "axios";

function App53(props) {
  // use... (hook)들은 컴포넌트 최상단에 작성,(조건문, 반복문 사용금지)
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [city, setCity] = useState("");

  const [fruit, setFruit] = useState("");
  const [price, setPrice] = useState(0);
  const [location, setLocation] = useState("");

  function handleButton1Click() {
    axios.request({
      method: "GET",
      url: "http://localhost:8080/main1/sub1",
    });
  }

  function handleButton2Click() {
    axios.request({
      method: "GET",
      url: "/api/main28/sub1",
    });
  }

  function handleButton3Click() {
    axios.request({
      method: "post",
      url: "/api/main28/sub2",
    });
  }

  function handleButton4Click() {
    axios.request({
      method: "get",
      url: "/api/main28/sub3",
    });
  }

  function handleButton5Click() {
    axios.request({
      method: "post",
      url: "/api/main28/sub4",
    });
  }

  function handleButton6Click() {
    // axios.request({
    //   method: "get",
    //   url: "/api/main28/sub6",
    // });
    axios.get("/api/main28/sub6");
  }

  function handleButton7Click() {
    axios.get("/api/main28/sub7");
  }

  function handleButton8Click() {
    // get 방식으로 데이터를 보낼 때 queryString 사용
    axios.get("/api/main28/sub8?name=son&age=33", {});
  }

  function handleButton9Click() {
    axios.get("/api/main28/sub9?address=seoul&score=3.3", {});
  }

  function handleButton10Click() {
    // 직접완성
    axios.get("/api/main28/sub10?address=서울 강남&score=88.12", {});
  }

  // 한글이나 특수기호가 들어갈 경우, queryString이 잘 작동하지 않을 수도 있다.
  // 이때 잘 사용하는 방법
  function handleButton11Click() {
    // config의 params에 객체를 넣는 방법
    axios.get("/api/main28/sub11", {
      params: { address: "서울 신촌", score: "77.77" },
    });
  }

  function handleButton12Click() {
    axios.get("/api/main28/sub12", {
      params: { fruit: "사과", price: 4000 },
    });
  }

  function handleButton13Click() {
    const searchParams = new URLSearchParams();
    searchParams.set("name", "흥민");
    searchParams.set("age", "33");
    searchParams.set("address", "서울 강남");

    axios.get("/api/main28/sub13", {
      params: searchParams,
    });
  }

  function handleButton14Click() {
    const searchParams = new URLSearchParams();
    searchParams.set("city", "london");
    searchParams.set("country", "korea");
    searchParams.set("id", "99");
    axios.get("/api/main28/sub14", {
      params: searchParams,
    });
  }

  function handleButton15Click() {
    const p = new URLSearchParams();
    p.set("name", "hm");
    p.set("age", "33");
    p.set("country", "한국");
    console.log(p.toString());

    // axios.get("/api/main28/sub15?" + p.toString());
    // axios.get(`/api/main28/sub15?${p}`);
    axios.get("/api/main28/sub15?" + p);
  }

  function handleButton16Click() {
    const p = new URLSearchParams();
    p.set("fruit", "apple");
    p.set("price", 5000);
    p.set("location", "강남");
    // axios.get("/api/main28/sub16?" + p);
    axios.get(`/api/main28/sub16?${p}`);
  }

  function handleButton20Click() {
    // 객체를 config.params에 넣기
    axios.get("/api/main28/sub17?", {
      params: {
        name: name,
        age: age,
        city: city,
      },
    });
    // axios.get(`/api/main28/sub17?` + p);
  }

  function handleButton19Click() {
    // URLSearchParams를 config에 넣기
    const p = new URLSearchParams();
    p.set("name", name);
    p.set("age", age);
    p.set("city", city);
    axios.get("/api/main28/sub17?", { params: p });
    // axios.get(`/api/main28/sub17?` + p);
  }

  function handleButton18Click() {
    // URLSearchParams를 연결연산자로 붙이기
    const p = new URLSearchParams();
    p.set("name", name);
    p.set("age", age);
    p.set("city", city);
    axios.get(`/api/main28/sub17?${p}`);
    // axios.get(`/api/main28/sub17?` + p);
  }

  function handleButton17Click() {
    // query String 직접 완성
    axios.get(`/api/main28/sub17?name=${name}&age=${age}&city=${city}`, {});
  }

  function handleButton21Click() {
    // 쿼리스트링 직접 작성
    axios.get(
      `/api/main28/sub21?fruit=${fruit}&price=${price}&location=${location}`,
    );
  }

  function handleButton22Click() {
    // URLSearchParams 객체를 url에 연결 연산으로 붙여주기
    const params = new URLSearchParams();
    params.set("fruit", fruit);
    params.set("price", price);
    params.set("location", location);
    // axios.get(`/api/main28/sub22?${params}`);
    axios.get(`/api/main28/sub22?` + params);
  }

  function handleButton23Click() {
    // config.params 값을 URLSearchParms로 주기
    const params = new URLSearchParams();
    params.set("fruit", fruit);
    params.set("price", price);
    params.set("location", location);
    axios.get("/api/main28/sub23", {
      params: params,
    });
  }

  function handleButton24Click() {
    // 객체로 주기
    axios.get("/api/main28/sub24", {
      params: {
        fruit: fruit,
        price: price,
        location: location,
      },
    });
  }

  return (
    <div>
      <div>
        <div>
          <h3>과일 요청 받기</h3>
          <input
            type="text"
            value={fruit}
            onChange={(e) => setFruit(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <button onClick={handleButton21Click}>21쿼리스트링 직접작성</button>
        <button onClick={handleButton22Click}>22쿼리스트링 직접작성</button>
        <button onClick={handleButton23Click}>23쿼리스트링 직접작성</button>
        <button onClick={handleButton24Click}>24쿼리스트링 직접작성</button>
      </div>

      <hr />
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
      <button onClick={handleButton20Click}>요청 20</button>
      <hr />
      <button onClick={handleButton19Click}>요청 19</button>
      <hr />
      <button onClick={handleButton18Click}>요청 18</button>
      <hr />
      <button onClick={handleButton17Click}>요청 17</button>
      <hr />
      <button onClick={handleButton16Click}>요청16</button>
      <hr />
      <button onClick={handleButton15Click}>요청15</button>
      <hr />
      <button onClick={handleButton14Click}>
        요청 14 URLSearchParams 활용 실습{" "}
      </button>
      <hr />
      <button onClick={handleButton13Click}>
        요청 13 URLSearchParams 객체 활용
      </button>
      <hr />
      <button onClick={handleButton12Click}>요청 12 + queryString</button>
      <hr />
      <button onClick={handleButton11Click}>요청 11 + queryString</button>
      <hr />
      <button onClick={handleButton10Click}>요청 10 + queryString</button>
      <hr />
      <button onClick={handleButton9Click}>요청 9 w/ queryString</button>
      <hr />
      <button onClick={handleButton8Click}>요청 8 w/ queryString</button>
      <hr />
      {/*연습: axios.get 메소드를 활용해서 7 번 버튼 클릭시 get / api/main28/sub7 요청보내기*/}
      {/*server 에서 get /api/main28/sub7 요청보내기*/}
      <button onClick={handleButton7Click}>버튼 7</button>
      <button onClick={handleButton6Click}>요청 6</button>
      <hr />

      {/* 연습: 버튼 5 클릭하면 get /api/main28/sub4로 요청보내기*/}
      {/* 서버에서 post /api/main28/sub4의 요청 받는 method 만들기*/}
      <button onClick={handleButton5Click}>요청 보내기5</button>
      <hr />
      {/* 연습: 버튼 4 클릭하면 get /api/main28/sub3으로 요청보내기*/}
      {/* 서버에서 get /api/main28/sub3의 요청 받는 method 만들기*/}
      <button onClick={handleButton4Click}>요청 보내기4</button>
      <hr />
      <button onClick={handleButton3Click}>요청 보내기3</button>
      <hr />
      <button onClick={handleButton2Click}>요청 보내기2</button>
      <hr />
      <button onClick={handleButton1Click}>요청 보내기1</button>
    </div>
  );
}

export default App53;
