import React from 'react'

const Greet = (props) => {
    //console.log(props)
    return (
        <div>
            <h1>Hello {props.name}</h1>
            I know you are {props.heroName}
            <p>{props.children}</p>
        </div>
    )
}

export default Greet