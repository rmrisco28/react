import React from 'react';
import {BrowserRouter, Route, Routes, useSearchParams} from "react-router";

// /board/detail?id=3 : <h3> 3번게시물 </h3>
// /board/detail?id=13 : <h3> 13번게시물 </h3>
// /board/detail?id=33 : <h3> 33번게시물 </h3>

// 연습
// /member/detail?id=son : <h3>son 회원 정보 보기</h3>
// /member/detail?id=park : <h3>park 회원 정보 보기</h3>
// /member/detail?id=cha : <h3>cha 회원 정보 보기</h3>

function Child1() {
    // useSearchParams (hook) : query String(request param) 정보 얻기
    // URLSearchParams와 set 메소드를 배열로 리턴
    const [params] = useSearchParams();

    console.log(params);
    console.log("id", params.get("id"));

    return     <div>
        <h3>{params.get("id")} 번 게시물 보기</h3>
    </div>
}

function Child2() {
    const [params] =useSearchParams();
    const userId= params.get("id");
    return <div>
        <h3>{userId} 회원 정보 보기</h3>
    </div>
}

function App46(props) {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                        <Route path="member/detail" element={<Child2 />}/>
                        <Route path="board/detail" element={<Child1 />}/>
                </Routes>
            </BrowserRouter>

        </div>
    );
}

export default App46;