import React from 'react';

function MyComp1() {
    const [person, setPerson] = useState({name: "", address: ""})

    return (
        <div>
            <div>
                <div>
                    <input type="text" value={person.name: e.target.value}/>

                </div>
            </div>
        </div>
    )

}

function App34(props) {
    return (
        <div>
            <MyComp2/>
            <hr/>
            <MyComp1/>
        </div>
    );
}

export default App34;
