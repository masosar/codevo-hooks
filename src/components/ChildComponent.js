import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            {/* <button onClick={props.greetHandler}>Greet parent</button> */}

            {/* //We are passing a parameter from the child to the parent */}
            <button onClick={() => props.greetHandler('Little Marco')}>Greet parent</button>
        </div>
    )
}

export default ChildComponent
