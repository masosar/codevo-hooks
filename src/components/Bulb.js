import React, {useState} from 'react'

// function Bulb() {
//     const [bulbOn, setbulbOn] = useState(0)
//     const onIt=()=> setbulbOn(1)
//     const offIt=()=> setbulbOn(0)
    
//     const isOnOff = bulbOn ? 'On' : 'Off'
//     return (
//         <div>
//             <h1>Bulb is {isOnOff}</h1>
//             <div>
//                 <button onClick={offIt}>Off</button>
//                 <button onClick={onIt}>On</button>
//             </div>
//         </div>
//     )
// }

function Bulb() {
    const [bulbOn, setbulbOn] = useState(false)
    const onIt=()=> {setbulbOn(bulbOn => !bulbOn)
        console.log(bulbOn)
    }
    return (
        <div>
            <h1>Bulb is {bulbOn ? 'On' : 'Off'}</h1>
            <div>
                <button onClick={onIt}>Switch</button>
            </div>
        </div>
    )
}
export default Bulb
