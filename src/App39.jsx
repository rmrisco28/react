import React from 'react';
import {Table} from "react-bootstrap";

function MyComp1() {
    const list = ["java", "css", "react", "boot"]
    // 정리
    // key prop: 리스트를 컴포넌트로 그릴 때 각 컴포넌트를 유일하게 식별하는 값
    // 효율적으로 그리기 위해서.
    //  -> 키로 같은 컴포넌트인지 판단해서 효율적으로 컴포넌트를 출력하는 용도
    // 똑같은 값이면 처리하지 않고, 키값이 변경됐을때만
    // -> 보통 key prop의 값은 db의 pk를 사용함
    return <div>
        <ul>
            {list.map((item) => (
                // <li>{item}</li>
                //  이때 li 는 key 값을 원한다.
                // 키 프랍이 없으면 다시 그리게 된다.
                <li key={{item}}>{item}</li>
                //
            ))}
        </ul>
    </div>;
}

function MyComp2() {
    const board =
        [{id: 3, title: "게시물 3번 제목", author: "SON"},
            {id: 5, title: "게시물 5번 제목", author: "PARK"},
            {id: 9, title: "게시물 9번 제목", author: "SON"},
            {id: 14, title: "또 다른 제목", author: "CHA"},
            {id: 21, title: "게시물 제목 21", author: "PARK"}]

    return <div>
        <Table striped={true}>
            <thead>
            <tr>
                <th>번호</th>
                <th>제목</th>
                <th>작성자</th>
            </tr>
            </thead>
            <tbody>
            {board.map((item) => (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.author}</td>
                </tr>
            ))}
            </tbody>
        </Table>


    </div>
}

function App39(props) {
    return (
        <div>
            <MyComp2/>
            <MyComp1/>
        </div>
    );
}

export default App39;