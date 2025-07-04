import React, {useEffect, useState} from 'react';
import * as PropTypes from "prop-types";
import {FormCheck} from "react-bootstrap";

function MyComp1(value) {
    return <div className="border bg-light">
value * 2 = {value * 2}
    </div>
}

let someValue = 0;

function MyComp2(props) {
    someValue = someValue + 1;
    return <div className="border bg-light">
        someValue = {someValue}
    </div>
}

MyComp2.propTypes = {value: PropTypes.number};

function MyComp3() {
    useEffect(() => {
        // 마운트 될때 실행 되는 코드
        console.log("comp3 마운트 됨");

        return () => {
            // 언마운트 될 때 실행 코드
            console.log("comp3 언마운트 됨");
        }
    }, []);
    return <div>
        <h3>Comp3</h3>
    </div>
}

function Child41() {
    useEffect(() => {
        console.log("child41 mounted")
        return ()=>{
            console.log("child4 unmounted")
        }
    }, []);

    return <div>
        <h3>child41 component</h3>
    </div>
}

function MyComp4() {
    const [show, setShow] = useState(true)
    return <div>
        <FormCheck type="switch" checked={show} onClick={() => setShow(!show)}/>
        {show && <Child41/>}
    </div>
}

function App38(props) {
    // strict mode: 모든 컴포넌트를 마운트, 언마운트, 마운트
    // 마운트 했을때 같은값이 나와야함.
    // pure component: 함수(컴포넌트) 밖의 데이터를 변경하지 말 것.

    return (
        <div>
            <MyComp4/>
            <hr/>
            <MyComp3/>
            <hr/>
            <MyComp2/>
            <MyComp2/>
            <MyComp1 value={1} />
            <MyComp1 value={2} />
        </div>
    );
}

export default App38;