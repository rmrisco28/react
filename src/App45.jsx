import React from 'react';
import {BrowserRouter, Route, Routes, useParams} from "react-router";

function Child() {
    // react router: 경로 -> dynamic segments
    // 아래 mySubPath 라고 적힌것이 dynamic segments
    let param = useParams(); // dynamic segment

    console.log(param)

    return <div>
        <h3>{param.mySubPath}번게시물 보기</h3>
    </div>
}

// 연습
// /java/collection : <h3>collection 배우기</h3>
// /java/io: <h3>io 배우기 </h3>
// /java/stream: <h3>stream 배우기 </h3>
// /java/class: <h3>class 배우기 </h3>

function Child2() {
    // const params = useParams();
    const {content} = useParams();
    return <h3>{content} 배우기</h3>;
}

function App45(props) {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="learn">
                        <Route path=":mySubPath" element={<Child/>}/>
                    </Route>
                    <Route path="java">
                        <Route path=":content" element={<Child2/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App45;