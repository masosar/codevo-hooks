import React from 'react'


//DESTRUCTURING PROPS IN THE BODY OF THE FUNCTION
const GreetDestr2 = (props) => {
    const {name, heroName} = props
    //console.log(props)
    return (
        <div>
            <h1>Hello {name}</h1>
            I know you are {heroName}
        </div>
    )
}

export default GreetDestr2