import React from 'react'

function FunctionClick() {
    function clickHandler(){
        console.log('Button clicked')
        alert("Hello world!")
    }
    return (
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}

export default FunctionClick
