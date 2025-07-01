// 연습
// App14.jsx에 App14, MyAwesomeAlert 컴포넌트 작성
// App14는 default export 하기
// MyAwesome Alert은 named export 하기
import App14 from "./App14.jsx";
import { MyAwesomeAlert } from "./App14";

function App15() {
  return (
    <>
      <App14 />
      <MyAwesomeAlert />
    </>
  );
}

export default App15;
