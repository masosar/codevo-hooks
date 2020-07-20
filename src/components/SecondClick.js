import React from 'react'

function SecondClick() {
    function clickHandler(){
        document.title="Yeah!"
        console.log("Title changed")
    }
    return (
        <div>
            <button onClick={clickHandler}>Click me</button>
        </div>
    )
}

export default SecondClick
