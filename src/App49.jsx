import React from 'react';
import {BrowserRouter, NavLink, Outlet, Route, Routes} from "react-router";

// 연습: 현재 경로와 link의 to prop이 같으면 그려지는 a 요소에 active class 추가하기
import "./assets/mystyle.css"


// 연습
// /react/install
// /react/game
// /react/state
function ReactComponent() {
    return (
        <div className="d-flex gap-3">
            <div className="w-25 bg-body-tertiary p-1">
                <div><NavLink to="/react/install">인스톨</NavLink></div>
                <div><NavLink to="/react/game">게임</NavLink></div>
                <div><NavLink to="/react/state">상태</NavLink></div>
            </div>
            <div className="flex-1 bg-primary-subtle">
                <Outlet/>
            </div>
        </div>
    )
}


function App49(props) {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="react" element={
                        <ReactComponent/>
                    }>
                        <Route
                            path="install"
                            element={
                                <div>
                                    <h3>설치 방법</h3>
                                </div>
                            }/>
                        <Route
                            path="game"
                            element={
                                <div>
                                    <h3>게임 만들기</h3>
                                </div>
                            }/>
                        <Route
                            path="state"
                            element={
                                <div>
                                    <h3>상태란 무엇인가</h3>
                                </div>
                            }/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App49;