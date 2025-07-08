import React from "react";
import axios from "axios";

function App57(props) {
  function handleButton1Click() {
    // 요청 방식은 상관없다.
    // .then = 요청한 이후의 메소드
    axios.get("/api/main32/sub1").then((res) => {
      console.log("응답 받은 후 실행되는 코드");
      console.log(res.data);
      console.log(res);
    });
  }

  function handleButton2Click() {
    axios.get("/api/main32/sub2").then((res) => {
      console.log(res.data);
    });
  }

  function handleButton3Click() {
    axios.get("/api/main32/sub3").then((res) => {
      console.log(res.data); // json이 parsing된 js object
      console.log(res.data.name);
      console.log(res.data.age);

      console.log();
      const dat = res.data;
      console.log(dat.name);
      console.log(dat.age);
    });
  }

  function handleButton4Click() {
    axios.get("/api/main32/sub4").then((res) => {
      const data = res.data;
      console.log(data.city, data.address, data.country);
    });
  }

  function handleButton5Click() {
    axios.get("/api/main32/sub5").then((res) => {
      const data = res.data;
      console.log(data.id, data.city, data.phone.phone1, data.phone.phone2);
    });
  }

  function handleButton6Click() {
    axios.get("/api/main32/sub6").then((res) => {
      const data = res.data;
      console.log(
        data.id,
        data.name,
        data.address[0],
        data.address[1],
        data.address[2],
      );
    });
  }

  function handleButton7Click() {
    axios.get("/api/main32/sub7").then((res) => {
      const data = res.data;
      console.log(
        data.id,
        data.name,
        data.fruits[0],
        data.fruits[1],
        data.address.city,
        data.address.country,
      );
    });
  }

  function handleButton8Click() {
    axios.get("/api/main32/sub8").then((res) => {
      const data = res.data;
      console.log(
        data.id,
        data.title,
        data.category.author,
        data.category.genre,
        data.order[0],
        data.order[1],
        data.price,
      );
    });
  }

  function handleButton15Click() {
    // axios.then()은 200번대 응답 코드에만 실행
    // 200번대 외에는 catch 메소드 실행
    axios
      .get("/api/main32/sub15")
      .then((res) => {
        console.log("15잘됨 응답 받음");
      })
      .catch((err) => {
        console.log("실패");
      });
  }

  function handleButton16Click() {
    axios
      .get("/api/main32/sub16")
      .then((res) => {
        console.log("16 잘 됨 응답 받음");
      })
      .catch((err) => {
        console.log("실패");
      });
  }

  // 연습: 17번 버튼 클릭시 get /api/main32/sub17로 요청
  // 200번 응답 받기(spring boot 코드 작성)
  // 응답후 console에 17잘됨 출력
  function handleButton17Click() {
    axios
      .get("/api/main32/sub17")
      .then((res) => {
        console.log("17잘됨");
      })
      .catch((err) => {
        console.log("잘 안됨");
      });
  }

  // 연습: 18번 버튼 클릭시 get /api/main32/sub18로 요청
  // 500번 응답 받기(spring boot 코드 작성)
  // 응답 후 console에 잘 안됨 출력
  function handleButton18Click() {
    axios
      .get("/api/main32/sub18")
      .then((res) => {
        console.log("18 잘됨");
      })
      .catch((err) => {
        console.log("18잘 잘 안됨");
      });
  }

  function handleButton19Click() {
    axios.get("/api/main32/sub19").then((res) => {
      console.log(res.data);
    });
  }

  function handleButton20Click() {
    axios.get("/api/main32/sub20").catch((err) => {
      console.log(err.response.data);
    });
  }

  function handleButton21Click() {
    axios
      .get("/api/main32/sub21")
      .then((res) => {
        console.log("잘됨");
        console.log(res.data[0]);
        console.log(res.data[1]);
        console.log(res.data[2]);
      })
      .catch((err) => {
        console.log("잘안됨");
      });
  }

  function handleButton22Click() {
    axios.get("/api/main32/sub22").catch((err) => {
      console.log(err.response.data[0]);
      console.log(err.response.data[1]);
      console.log(err.response.data[2]);
    });
  }

  function handleButton23Click() {
    axios
      .get("/api/main32/sub23")
      .then((res) => {
        console.log("잘됨");
        console.log(res.data);
      })
      .catch((err) => {
        console.log("잘안됨");
        console.log(err.status);
        if (err.response.status === 400) {
          console.log("400번 에러 클라이언트 에러");
        } else {
          console.log("500번 에러 서버 잘못");
        }
      })
      .finally(() => {
        console.log("잘되든 안되든 항상 실행되는 코드는 여기에...");
      });
  }

  return (
    <div>
      <button onClick={handleButton23Click}>23/ 200,400,500 확률</button>
      <hr />
      <button onClick={handleButton21Click}>21/ 201 w/ data</button>
      <button onClick={handleButton22Click}>22/ 500 w/ data</button>
      <hr />
      <button onClick={handleButton19Click}>19/ 200 w/ data</button>
      <button onClick={handleButton20Click}>20/ 400 w/ data</button>
      <hr />
      <button onClick={handleButton17Click}>17/200번대 응답</button>
      <button onClick={handleButton18Click}>18/500번대 응답</button>
      <hr />
      <button onClick={handleButton15Click}>15/ 200번 응답</button>
      <button onClick={handleButton16Click}>16/ 400번 응답</button>
      <hr />
      <button
        onClick={() => {
          axios.get("/api/main32/sub11");
        }}
      >
        12
      </button>
      <button
        onClick={() => {
          axios.get("/api/main32/sub12");
        }}
      >
        13
      </button>
      <button
        onClick={() => {
          axios.get("/api/main32/sub13");
        }}
      >
        14
      </button>
      <hr />
      <button
        onClick={() => {
          axios.get("/api/main32/sub9");
        }}
      >
        200 code
      </button>
      <button
        onClick={() => {
          axios.get("/api/main32/sub10");
        }}
      >
        404 code
      </button>
      <button
        onClick={() => {
          axios.get("/api/main32/sub11");
        }}
      >
        500 code
      </button>
      <hr />
      <button onClick={handleButton8Click}>버튼 8</button>
      <hr />
      <button onClick={handleButton7Click}>버튼 7</button>
      <hr />
      <button onClick={handleButton6Click}>버튼 6</button>
      <hr />
      <button onClick={handleButton5Click}>버튼 5</button>
      <hr />
      <button onClick={handleButton4Click}>연습 한국</button>
      <hr />
      <button onClick={handleButton3Click}>
        직렬화 된 json 데이터 받기 map
      </button>
      <hr />
      <button onClick={handleButton2Click}>데이터 받기2</button>
      <hr />
      <button onClick={handleButton1Click}>데이터 받기 1</button>
    </div>
  );
}

export default App57;
