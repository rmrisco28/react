import React, {useEffect} from 'react';
import {BrowserRouter, Link, NavLink, Outlet, Route, Routes} from "react-router";
import "./assets/mystyle.css"

// /react/learn
// /react/tutorial
// /react/docs
// /react/api

function ReactLayout() {
    useEffect(() => {
        console.log("주소")
    }, []);

    return (<div>
        <div className="d-flex justify-content-around">
            <div>NAVBAR</div>
            <div>
                {/*전체 페이지를 다시 마운트 하지 않으려면 a 태그 대신
                    react router의 Link 컴포넌트 사용*/}
                {/*NavLink: 현재 경로와 to prop의 값이 같으면 active class 추가 함*/}
                <NavLink to="/react/learn">LEARN</NavLink>
            </div>
            <div>
                <NavLink to="/react/tutorial">TUTORIAL</NavLink>
            </div>
            <div>
                <NavLink to="/react/docs">DOCS</NavLink>
            </div>
            <div>
                <NavLink to="/react/api">API</NavLink>
            </div>
        </div>
        {/*자식 경로의 컴포넌트가 출력되는 곳*/}
        <Outlet></Outlet>
    </div>)
}

function App48(props) {
    return (<div>
        <BrowserRouter>
            <Routes>
                {/*만약에 navbar(공통된 것)를 둘때는 상단(react)에게 한테 준다.*/}
                <Route
                    path="react"
                    element={<div>
                        <ReactLayout/>
                    </div>}>
                    <Route
                        path="learn"
                        element=
                            {<div>
                                <h3>LEARN 화면</h3>
                            </div>}/>
                    <Route
                        path="tutorial"
                        element=
                            {<div><h3>TUTORIAL 화면</h3>
                            </div>}/>
                    <Route
                        path="docs"
                        element=
                            {<div><h3>DOCS 화면</h3>
                            </div>}/>
                    <Route
                        path="api"
                        element=
                            {<div><h3>API 화면</h3>
                            </div>}/>
                </Route>
            </Routes>
        </BrowserRouter>

    </div>);
}

export default App48;