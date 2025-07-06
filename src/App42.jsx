import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router";

// localhost:5173 learn: <h3>react 배우기 </h3>
// localhost:5173 tutorial: <h3>react 공부하기 </h3>
// localhost:5173 install: <h3> react 설치하기 </h3>
// localhost:5173 reference/react : <h3> react 참고문서 </h3>
function LearnCompnent() {
    return <h3>react 배우기</h3>
}
function App42(props) {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="learn" element={<LearnCompnent />}></Route>
                    <Route path="tutorial" element={<h3> react 공부하기</h3>}></Route>
                    <Route path="install" element={<h3> react 설치하기</h3>}></Route>
                    <Route path="reference/react" element={<h3> react 참고문서</h3>}></Route>
                </Routes>
            </BrowserRouter>

        </div>
    );
}

export default App42;