import React from 'react';
import {BrowserRouter, Outlet, Route, Routes, useNavigate} from "react-router";
import App1 from "./App1.jsx";
import {Button} from "react-bootstrap";

// 각 버튼 클릭 시
function MyLayout() {
    const navigate = useNavigate();
    return (
        <div>
            <div>
                {/* / 로 이동*/}
                <Button onClick={() => navigate("/")} variant="outline-info">HOME</Button>
                {/*/qwe로 이동*/}
                <Button onClick={() => navigate("/qwe")} variant="outline-info">QWE</Button>
                {/* /asd 로 이동*/}
                <Button onClick={() => navigate("/asd")} variant="outline-info">ASD</Button>

                {/*history(방문기록) 기준으로 이동하기*/}
                <Button onClick={() => navigate(-1)}>뒤로</Button>
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    )
}

function App51(props) {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MyLayout/>}>
                        <Route index element={<div><h3>home</h3></div>}/>
                        <Route path="qwe" element={<div><h3>qwe</h3></div>}/>
                        <Route path="asd" element={<div><h3>asd</h3></div>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App51;